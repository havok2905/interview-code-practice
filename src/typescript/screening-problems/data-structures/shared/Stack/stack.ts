export class EmptyStackException extends Error {
  constructor() {
    super('An attempt was made to access the contents of an empty stack');
  }
}

export class StackNode<T> {
  data: T;
  next: StackNode<T>;

  constructor(data: T) {
    this.data = data;
  }
}

export class Stack<T> {
  private top: StackNode<T> | null;

  constructor() {
    this.top = null;
  }

  isEmpty(): boolean {
    return this.top === null;
  }

  peek(): T {
    if (this.isEmpty()) throw new EmptyStackException();
    return this.top.data;
  }

  pop(): T {
    if (this.isEmpty()) throw new EmptyStackException();
    const data = this.top.data;
    this.top = this.top.next;
    return data;
  }

  push(data: T) {
    const node = new StackNode<T>(data);
    node.next = this.top;
    this.top = node;
  }
}
