import * as React from "react";
import { GameArea } from "./GameArea";

function App () {
  return (
    <GameArea discs={3} rods={3} />
  );
}

export {
  App
}
