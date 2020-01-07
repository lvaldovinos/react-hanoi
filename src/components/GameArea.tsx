import * as React from "react";
import Stack from "../lib/stack";
import { Rod, IItem } from "./Rod/Rod";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { getInstance, StackDealer } from "../lib/stack-dealer";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

interface IGameArea {
  rods: number;
  discs: number;
}

function createRods ({ rods: rodsLimit, discs: discsLimit }: IGameArea) {
  const rods: Array<Stack<number>> = [];
  for (let index = 0; index < rodsLimit; index += 1) {
    rods.push(new Stack<number>());
  }

  for (let value = rodsLimit; value >= 1; value -= 1) {
    rods[0].push(value);
  }

  return rods;
}

function GameArea (props: IGameArea) {
  const onDiscDrop = (dropInfo: IItem) => {
    const stackDealer: StackDealer = getInstance();
    stackDealer.startMove(dropInfo.srcStack, dropInfo.size);
    stackDealer.moveIfPossible(dropInfo.destStack);
  };
  const rodsComponents = createRods(props).map((rodStack: Stack<number>) => (
    <Rod
      stack={rodStack}
      discsLimit={props.discs}
      onDrop={onDiscDrop}
    />
  ));
  return (
    <section style={style}>
      <DndProvider backend={Backend}>
        {rodsComponents}
      </DndProvider>
    </section>
  );
}

export {
  GameArea,
  IGameArea
}
