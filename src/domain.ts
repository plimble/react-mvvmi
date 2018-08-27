
import { TodoService } from './domain/service'
import { TodoMemory } from './domain/gateway/repository'
import { Todo, Todos } from './domain/entity'

export const todoMemory = new TodoMemory(new Todos([
  new Todo("1111", false),
  new Todo("2222", false),
  new Todo("3333", false),
]))
export const todoService = new TodoService(todoMemory)

