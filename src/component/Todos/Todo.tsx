import * as React from 'react'
import * as model from '../../model'
import { Button, Row, Col, Icon } from 'antd'
import { observer } from 'mobx-react'

interface IProps {
  key: number
  todo: model.Todo
  onRemoveTodo(e: React.SyntheticEvent): void
  onToggleTodo(e: React.SyntheticEvent): void
}

export default observer(({ todo, onRemoveTodo, onToggleTodo }: IProps) => {
  console.log('render todo', todo.title)
  return (
    <Row>
      <Col span={6}>{todo.done ? <Icon type="check-square-o" /> : <Icon type="minus-square-o" />} {todo.title}</Col>
      <Col span={18} style={{ textAlign: 'left' }}>
        <Button onClick={onToggleTodo}>Toggle</Button>
        <Button type="danger" onClick={onRemoveTodo}>Remove</Button>
      </Col>
    </Row>
  )
})
