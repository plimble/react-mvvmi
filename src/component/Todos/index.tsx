import * as React from 'react'
import * as model from '../../model'
import Todo from './Todo'
import { observer } from 'mobx-react'

export interface IProps {
  todos: model.Todos
  onRemoveTodo(i: number): void
  onToggleTodo(i: number): void
}

export default observer(({ todos, onRemoveTodo, onToggleTodo }: IProps) => {
  console.log('render todos', todos.todos.length)
  return (
    <div>
      {todos.todos.map((todo: model.Todo, i: number) =>
        <Todo key={i} todo={todo} onRemoveTodo={onRemoveTodo.bind(undefined, i)} onToggleTodo={onToggleTodo.bind(undefined, i)} />
      )}
    </div>
  )
})
