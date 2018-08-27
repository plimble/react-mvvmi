import { computed, action, observable } from 'mobx'
import Todo from './Todo'

export default class Todos {
  @observable public todos: Todo[]

  constructor(todos?: Todo[]) {
    this.todos = todos || []
  }

  @action public addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  @action public removeTodo(i: number) {
    this.todos.splice(i, 1)
  }

  @action public toggleTodo(i: number) {
    this.todos[i].done = !this.todos[i].done
  }

  @computed get total() {
    return this.todos.length
  }
}
