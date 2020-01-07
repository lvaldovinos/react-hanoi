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

  it("get all values in stack", () => {
    for (let index = 0; index < 10; index += 1) {
      stack.push(index);
    }
    let expectedValue = 9;
    for (const value of stack) {
      expect(value).to.equal(expectedValue);
      expectedValue -= 1;
    }
  });
});
