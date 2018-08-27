import Todo from "./Todo"

export default class Todos {
  public todos: Todo[]

  constructor(todos: Todo[]) {
    this.todos = todos
  }

  public add(todo: Todo) {
    this.todos.push(todo)
  }

  public remove(i: number) {
    this.todos.splice(i, 1)
  }

  public count(): number {
    return this.todos.length
  }
}

