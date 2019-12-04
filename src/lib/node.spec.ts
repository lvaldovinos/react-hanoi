import { expect } from "chai";
import Node from "./node";

describe("node test suite", () => {
  let node: Node<number>;

  beforeEach(() => {
    node = new Node<number>(5);
  });

  it("addParent", () => {
    const parentNode = new Node<number>(4);
    expect(node.parentNode).to.equal(null);
    node.addParent(parentNode);
    expect(node.parentNode).to.equal(parentNode);
  });

  it("addChild", () => {
    const childNode = new Node<number>(4);
    node.addChild(childNode);
    expect(node.childNode).to.eql(childNode);
  });

  it("removeParent", () => {
    const parentNode = new Node<number>(4);
    node.addParent(parentNode);
    expect(node.parentNode).to.equal(parentNode);
    node.removeParent();
    expect(node.parentNode).to.equal(null);
  });

  it("removeChild", () => {
    const childNode = new Node<number>(4);
    node.addChild(childNode);
    expect(node.childNode).to.eql(childNode);
    node.removeChild();
    expect(node.childNode).to.equal(null);
  });
});
