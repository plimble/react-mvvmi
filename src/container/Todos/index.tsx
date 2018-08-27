import * as React from 'react'
import ViewModel from './ViewModel';
import { todoService } from '../../domain';
import Todos from '../../component/Todos';
import { observer } from 'mobx-react';


@observer
class TodosContainer extends React.Component<any, any> {
  private vm = new ViewModel(todoService)

  public componentDidMount() {
    this.vm.onLoad()
  }

  public render() {
    console.log('render container')
    return (
      <div>
        <Todos
          todos={this.vm.todos}
          onRemoveTodo={this.vm.onRemoveTodo}
          onToggleTodo={this.vm.onToggleTodo}
        />
      </div>
    )
  }
}

export default TodosContainer

