import React from "react";
import ReactDOM from "react-dom";
import { Game } from "../chars/game";
import { GameBar } from "./gameBar";

export const App = () => (
  <div>
    {/* <h1>My React and TypeScript App!</h1> */}
    <GameBar />
  </div>
);

ReactDOM.render(
  <App />,
  document.querySelector("#gui")
);