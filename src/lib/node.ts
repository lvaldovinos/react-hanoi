export default class Node<T> {
  private v: T;
  private parent: Node<T> | null;
  private child: Node<T> | null;

  constructor (value: T) {
    this.v = value;
    this.parent = null;
    this.child = null;
  }

  get value (): T {
    return this.v;
  }

  get parentNode (): Node<T> {
    return this.parent;
  }

  get childNode (): Node<T> {
    return this.child;
  }

  public addChild (node: Node<T>): Node<T> {
    this.child = node;
    return this;
  }

  public addParent (node: Node<T>): Node<T> {
    this.parent = node;
    return this;
  }

  public removeParent (): Node<T> {
    this.parent = null;
    return this;
  }

  public removeChild (): Node<T> {
    this.child = null;
    return this;
  }
}
