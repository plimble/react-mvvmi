

import { action, observable, computed } from 'mobx'
import { ITodoService } from '../../domain/contract/service'
import * as model from '../../model'

export default class ViewModel {
  // @observable public loading: boolean
  @observable public todos: model.Todos = new model.Todos()

  private todoService: ITodoService

  constructor(todoService: ITodoService) {
    this.todoService = todoService
  }

  @action.bound
  public onRemoveTodo(i: number): void {
    this.todoService.removeTodo(i).then(() => {
      this.todos.removeTodo(i)
    })
  }

  @action.bound
  public onToggleTodo(i: number): void {
    this.todoService.toggleDone(i).then(() => {
      this.todos.toggleTodo(i)
    })
  }

  @computed get jack(): string[] {
    console.log('compute jack')
    return this.todos.todos.map((todo) => todo.title)
  }

  @action.bound
  public onLoad(): void {
    this.todoService.getTodos().then(todos => {
      const todosModel = new model.Todos()
      todos.todos.forEach((todo) => {
        todosModel.addTodo(new model.Todo(todo.title, todo.done))
      })
      this.todos = todosModel
      console.log(todos)
    })
  }
}
