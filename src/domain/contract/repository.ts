import { Todos } from "../entity"

export interface ITodoRepository {
  save(todos: Todos): Promise<void>
  load(): Promise<Todos>
}

