import { ITodoRepository } from "../contract/repository"
import { ITodoService } from "../contract/service"
import { Todo, Todos } from "../entity"

export default class TodoService implements ITodoService {
  private repo: ITodoRepository

  constructor(repo: ITodoRepository) {
    this.repo = repo
  }

  public async getTodos(): Promise<Todos> {
    return await this.repo.load()
  }

  public async addTodo(title: string): Promise<void> {
    const todos = await this.getTodos()
    const todo = new Todo(title, false)
    todos.add(todo)
    await this.repo.save(todos)
  }

  public async removeTodo(i: number): Promise<void> {
    const todos = await this.getTodos()
    todos.remove(i)
    await this.repo.save(todos)
  }

  public async toggleDone(i: number): Promise<void> {
    const todos = await this.getTodos()
    todos.todos[i].toggleDone()
    await this.repo.save(todos)
  }
}
