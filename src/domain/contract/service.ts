import { Todos } from "../entity";


export interface ITodoService {
  getTodos(): Promise<Todos>
  addTodo(title: string): Promise<void>
  removeTodo(i: number): Promise<void>
  toggleDone(i: number): Promise<void>
}
