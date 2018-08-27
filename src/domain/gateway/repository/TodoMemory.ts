import { ITodoRepository } from "../../../domain/contract/repository";
import { Todos } from "../../../domain/entity";

export default class TodoMemory implements ITodoRepository {
  private todos: Todos

  constructor(todos?: Todos) {
    this.todos = todos || new Todos([])
  }

  public save(todos: Todos): Promise<void> {
    const self = this
    return new Promise((resolve) => {
      self.todos = new Todos(todos.todos)
      resolve()
    })
  }

  public load(): Promise<Todos> {
    const self = this
    return new Promise((resolve) => {
      resolve(self.todos)
    })
  }
}
