import Stack from "./stack";

let stackDealer: StackDealer;

export class StackDealer {
  private sourceStack: Stack<number>;
  private value: number;
  private destinationStack: Stack<number>;

  startMove (sourceStack: Stack<number>, value: number) {
    this.sourceStack = sourceStack
    this.value = value
    this.sourceStack.pop()
  }

  moveIfPossible (destinationStack: Stack<number>) {
    this.destinationStack = destinationStack;
    if (this.destinationStack.getTopValue() === null ||
      (this.value < this.destinationStack.getTopValue())) {
      this.destinationStack.push(this.value);
    } else {
      this.sourceStack.push(this.value);
    }
  }

  get valueToBeMoved (): number {
    return this.value;
  }
}

export function getInstance () {
  if (!stackDealer) {
    stackDealer = new StackDealer();
    return stackDealer;
  }
  return stackDealer;
}
