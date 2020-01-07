import Node from "./node";

export default class Stack<T> implements Iterable<T> {
  private top: Node<T> | null;

  constructor () {
    this.top = null;
  }

  push (value: T): Stack<T> {
    if (!this.top) {
      this.top = new Node<T>(value);
      return this;
    }
    const node = new Node<T>(value);
    this.top.addParent(node);
    node.addChild(this.top);
    this.top = node;
    return this;
  }

  *[Symbol.iterator] () {
    let node: Node<T> = this.top;
    while (node) {
      yield node.value;
      node = node.childNode;
    }
  }

  pop (): T {
    const value: T = this.top.value;
    const childNode: Node<T> = this.top.childNode;
    this.top = childNode;
    return value;
  }

  get size (): number {
    let size: number = 0;
    let node: Node<T> = this.top;
    while (node) {
      size += 1;
      node = node.childNode;
    }
    return size;
  }

  getTopValue (): T | null {
    if (!this.top) {
      return null;
    }
    return this.top.value;
  }
}
