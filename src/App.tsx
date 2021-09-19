import { useCallback, useEffect, useRef, useState } from "react";
import Main from "./actions/main";
import { Curserstate } from "./actions/OnClickHandler";
import collector from "./img/Collector.png";

var main = new Main();
var ctx: CanvasRenderingContext2D;

function App() {
  const [canvasWidth, setCanvasWidth] = useState<number>();
  const [canvasHeight, setCanvasHeight] = useState<number>();

  const canvasRef = useCallback(node => {
    if (node !== null) {
      let width = node.getBoundingClientRect().width;
      let height = node.getBoundingClientRect().height;
      setCanvasHeight(height);
      setCanvasWidth(width);
      main.setCanvasDim(width, height);
      ctx = node.getContext("2d");
    }
  }, []);

  useEffect(() => {
    if (canvasWidth && canvasHeight) {
      main.setCanvasDim(canvasWidth, canvasHeight);
      main.drawing(ctx);
    }
  }, [canvasHeight, canvasWidth]);

  return (
    <div className="m-0 p-0">
      <div className="row w-100">
        <canvas className="p-0 w-100" onClick={() => main.onCanvasClick()} ref={canvasRef} width={canvasWidth} height={canvasHeight}></canvas>
      </div>
      <div className="row w-100">
        <div className="col-5">
          <h2>Structure Buttons</h2>
          <button onClick={() => main.onClick(Curserstate.Collector)}>Collector<img src={collector} alt="Collector" /></button>
        </div>
        <div className="col-5">
          <h2>Other things</h2>
        </div>
        <div className="col-2">
          <h2>Options</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
