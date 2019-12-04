import { expect } from "chai";
import Stack from "./stack";

describe("stack unit test", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it("push", () => {
    stack.push(5);
    expect(stack.size).to.equal(1);
  });

  it("pop", () => {
    stack.push(5);
    expect(stack.size).to.equal(1);
    expect(stack.pop()).to.equal(5);
    expect(stack.size).to.equal(0);
  });
});
