export class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T>;

  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T> {
  head: LinkedListNode<T> | null;
  
  constructor() {
    this.head = null;
  }

  append(data: T) {
    const node = new LinkedListNode(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while(current.next) {
      current = current.next;
    }

    current.next = node;
  }
}