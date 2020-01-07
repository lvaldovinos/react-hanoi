import * as React from "react";
import { useDrop } from "react-dnd";
import Stack from "../../lib/stack";
import { DRAG_ITEMS } from "../../constants";
import { Disc, IDiscProps } from "../Disc/Disc";

export interface IItem {
  type: string;
  destStack: Stack<number>;
  srcStack: Stack<number>;
  size: number;
}

export interface IRodProps {
  stack: Stack<number>;
  discsLimit: number;
  onDrop?(item: IItem): void;
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
} as React.CSSProperties;

const style = {
  fill: "#966F33",
};

function renderDiscs (stack: Stack<number>, discsLimit: number): React.ReactNode[] {
  const discs: React.ReactNode[] = [];
  for (let value of stack) {
    discs.push((
      <Disc
        size={value}
        discsLimit={discsLimit}
        disableDrag={discs.length > 0}
        stack={stack}
      />
    ));
  }
  return discs;
}

export function Rod (props: IRodProps) {
  const { stack, discsLimit }: IRodProps = props;
  const [{ isOver, canDrop, item }, drop] = useDrop({
    accept: DRAG_ITEMS.DISC,
    drop: () => {
      if (props.onDrop) {
        const newItem: IItem = {
          ...item,
          destStack: stack,
        };
        props.onDrop(newItem as IItem);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
      item: monitor.getItem(),
    }),
  });
  let style1 = style;
  if (isOver) {
    style1 = Object.assign({}, style1, {
      stroke: "black",
    });
  }
  const discs = renderDiscs(stack, discsLimit);
  return (
    <div ref={drop} style={containerStyle}>
      {discs}
      <svg height="100%" width="100%" viewBox="0 0 400 50" preserveAspectRatio="xMinYMin meet">
        <ellipse cx="200" cy="25" rx="200" ry="25" style={style1} />
      </svg>
    </div>
  );
}
