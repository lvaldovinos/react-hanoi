import { storiesOf } from "@storybook/react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import * as React from "react";
import { Rod } from "./Rod";
import { Disc } from "../Disc/Disc";
import { action } from "@storybook/addon-actions";
import Stack from "../../lib/stack";

const stories = storiesOf("Components", module);

stories.add(
  "Rod",
  () => (
    <DndProvider backend={Backend}>
      <Rod stack={new Stack<number>()} discsLimit={3} />
    </DndProvider>
  ))
  .add("Rod onDrop", () => (
    <DndProvider backend={Backend}>
      <Disc size={2} stack={new Stack<number>()} discsLimit={3} />
      <Rod onDrop={action("onDrop")} stack={new Stack<number>()} discsLimit={3} />
    </DndProvider>
  ));
