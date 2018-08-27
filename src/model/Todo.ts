import { computed, observable } from 'mobx'

export default class Todo {
  @observable public title: string
  @observable public done: boolean

  constructor(title: string, done: boolean) {
    this.title = title
    this.done = done
  }

  @computed get isValid() {
    return this.title !== ''
  }
}
