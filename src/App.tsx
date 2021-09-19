import { main } from "./actions/main";
import { Curserstate } from "./actions/OnClickHandler";
import collector from "./img/Collector.png";

// var main = new Main();

function App() {

  main();

  // function handleStructureClick(param: Curserstate) {    
  //   switch(param) {
  //     case Curserstate.Collector: {
  //       main.onClick(Curserstate.Collector)
  //     }
  //   }
  // }

  return (
    <div className="m-0 p-0">
      <div className="row w-100">
        <canvas className="p-0 w-100"></canvas>
      </div>
      <div className="row w-100">
        <div className="col-5">
          <h2>Structure Buttons</h2>
          {/* <button onClick={() => handleStructureClick(Curserstate.Collector)}>Collector<img src={collector} alt="Collector"/></button> */}
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
