import collector from "./img/Collector.png";

function App() {
  return (
    <div className="m-0 p-0">
      <div className="row w-100">
        <canvas className="p-0 w-100"></canvas>
      </div>
      <div className="row w-100">
        <div className="col-5">
          <h2>Structure Buttons</h2>
          <button>Collector<img src={collector} alt="Collector" /></button>
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
