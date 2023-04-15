import './counter-app.css';
import React, { useState } from "react";


const CounterApp = () => {

  const [counter, setCounter] = useState(0);

  // increment by 1
  const counterUp = () => {
      setCounter((currentCounter) => currentCounter + 1);
  };

  // decrement by 1
  const counterDown = () => {
    counter > 0 &&
    setCounter((currentCounter) => currentCounter - 1);
  };

  // reset to 0
  const resetCounter = () => {
       setCounter(0);
  };

  return (
      <div className="App">
        <div className="counter-component">
          <div className="number">{counter}</div>
          <div className="buttons-alignment">
            <button className="button" onClick={counterDown}>-</button>
            <button className="button" onClick={counterUp}>+</button>
          </div>
          <button className="reset-button" onClick={resetCounter}>Reset</button>
        </div>
        <div className="developer-credits">
          — IbtisamZ —
        </div>
      </div>
  );
};

export default CounterApp;
