

export default class Todo {
  public title: string
  public done: boolean

  constructor(title: string, done: boolean) {
    this.title = title
    this.done = done
  }

  public toggleDone() {
    this.done = !this.done
  }

}
