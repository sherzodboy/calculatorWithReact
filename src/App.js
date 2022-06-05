import { useState } from "react";
import Calculyator from "./components/Calculyator";

function App() {
  const [showCalc, setShowCalc] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShowCalc(!showCalc)}>
        Show Calc
      </button>
      {showCalc ? <Calculyator /> : null}
    </>
  );
}

export default App;
