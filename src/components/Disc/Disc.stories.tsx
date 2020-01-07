import { storiesOf } from "@storybook/react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import * as React from "react";
import { Disc } from "./Disc";
import Stack from "../../lib/stack";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("Components", module);

stories.add(
  "Disc",
  () => (
    <DndProvider backend={Backend}>
      <Disc
        size={1}
        onStartDrag={action("onStartDrag")}
        discsLimit={3}
        stack={new Stack()}
      />
    </DndProvider>
  ))
  .add("Disc no draggable", () => (
    <DndProvider backend={Backend}>
      <Disc
        size={1}
        onStartDrag={action("onStartDrag")}
        disableDrag
        discsLimit={3}
        stack={new Stack()}
      />
    </DndProvider>
  ));
