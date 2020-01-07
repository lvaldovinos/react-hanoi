import { expect } from "chai";
import * as sinon from "sinon";
import { StackDealer, getInstance } from "./stack-dealer";
import Stack from "./stack";

describe("StackDealer test suite", () => {
  let stackDealer: StackDealer;
  let sourceStackMock: sinon.SinonStubbedInstance<Stack<number>>;
  let destinationStackMock: sinon.SinonStubbedInstance<Stack<number>>;

  beforeEach(() => {
    stackDealer = new StackDealer();
    sourceStackMock = sinon.createStubInstance(Stack);
    destinationStackMock = sinon.createStubInstance(Stack);
  });

  it("startMove", () => {
    stackDealer.startMove(sourceStackMock as unknown as Stack<number>, 0);
    expect(sourceStackMock.pop.called).to.equal(true);
    expect(stackDealer.valueToBeMoved).to.equal(0);
  });

  it("moveIfPossible destination's top value is null", () => {
    destinationStackMock.getTopValue.returns(null);
    stackDealer.startMove(sourceStackMock as unknown as Stack<number>, 1);
    stackDealer.moveIfPossible(destinationStackMock as unknown as Stack<number>);
    expect(destinationStackMock.push.calledWith(1)).to.equal(true);
    expect(sourceStackMock.push.called).to.equal(false);
  });

  it("moveIfPossible value is greater than destination's top value", () => {
    destinationStackMock.getTopValue.returns(1);
    stackDealer.startMove(sourceStackMock as unknown as Stack<number>, 0);
    stackDealer.moveIfPossible(destinationStackMock as unknown as Stack<number>);
    expect(destinationStackMock.push.calledWith(0)).to.equal(true);
    expect(sourceStackMock.push.called).to.equal(false);
  });

  it("getInstance", () => {
    let dealer = getInstance();
    expect(dealer instanceof StackDealer).to.equal(true);
  });
});
