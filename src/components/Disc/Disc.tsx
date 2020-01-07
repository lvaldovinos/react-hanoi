import * as React from "react";
import { useDrag } from "react-dnd";
import { DRAG_ITEMS } from "../../constants";
import Stack from "../../lib/stack";

interface IDiscProps {
  size: number;
  discsLimit: number;
  stack: Stack<number>;
  disableDrag?: boolean;
  onStartDrag?(): void;
};

const WIDTH = 200;

const style2 = {
  fill: "#B8B8B8",
};

const draggingStyle = {
  opacity: 0.5,
};

function Disc (props: IDiscProps) {
  const { size, discsLimit, disableDrag, stack }: IDiscProps = props;
  const style = {
    width: `${size * (WIDTH / discsLimit)}px`,
  };
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: DRAG_ITEMS.DISC,
      size: props.size,
      srcStack: stack,
    },
    begin: () => {
      if (props.onStartDrag) {
        props.onStartDrag();
      }
    },
    canDrag: () => !props.disableDrag,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div ref={drag} style={isDragging ? { ...draggingStyle, ...style } : style}>
      <svg height="25" width="100%" viewBox="0 0 400 50" preserveAspectRatio="xMinYMin meet">
        <ellipse cx="200" cy="25" rx="200" ry="25" style={style2} />
      </svg>
    </div>
  );
}

export {
  Disc,
  IDiscProps,
}
