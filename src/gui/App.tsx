import { useCallback, useEffect, useRef, useState } from "react";
import Main from "../actions/main";
import { Curserstate } from "../actions/OnClickHandler";
import collector from "../img/Collector.png";

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
      main.draw.setRenderContext(ctx);
      main.run();
    }
  }, [canvasHeight, canvasWidth]);

  return (
    <div className="container p-0">
      <div className="row w-100">
        <canvas className="m-1 p-0 w-100" onClick={(e) => main.onCanvasClick(e, canvasWidth, canvasHeight)} ref={canvasRef} width={canvasWidth} height={canvasHeight}></canvas>
      </div>
      <div className="row w-100">
        <div className="col-5">
          <button onClick={() => main.onClick(Curserstate.Collector)}>Collector<img src={collector} alt="Collector" /></button>
        </div>
        <div className="col-5">
          ENGERY
          <div className="progress">
            <div className={"progress-bar w-" + 100 / main.game.player.maxEnergy * main.game.player.energy} role="progressbar">{main.game.player.energy + "/" + main.game.player.maxEnergy}</div>
          </div>
          Collection <br />
          {main.game.player.collection}
          <br />
          {/* <div className="progress">
            <div className={"progress-bar w-" + 100 / main.game.player.maxEnergy * main.game.player.energy} role="progressbar">{main.game.player.collection}</div>
          </div> */}
          Starvation <br />
          {main.game.player.starvation}
          {/* <div className="progress">
            <div className={"progress-bar w-"+100/main.game.player.collection*main.game.player.energy} role="progressbar">{main.game.player.starvation}</div>
          </div> */}
        </div>
        <div className="col-2 row">
          <div className="col-2">
            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
            </svg></button>
            {/* <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pause" viewBox="0 0 16 16">
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
            </svg></button> */}
            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-volume-off" viewBox="0 0 16 16">
              <path d="M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM10 5.04 8.312 6.39A.5.5 0 0 1 8 6.5H6v3h2a.5.5 0 0 1 .312.11L10 10.96V5.04z" />
            </svg></button>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-music-note" viewBox="0 0 16 16">
              <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
              <path fillRule="evenodd" d="M9 3v10H8V3h1z" />
              <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
            </svg></button>
          </div>
          <div className="col">
            <button className="w-100 bg-warning text-white">Options</button>
            <button className="w-100 bg-success text-white">Help</button>
            <button className="w-100 bg-danger text-white">Exit Game</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
