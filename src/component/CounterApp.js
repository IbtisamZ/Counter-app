import './counter-app.css';
import React, { useState } from "react";


const CounterApp = () => {

  // declare a state variable
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

  // reset counter to 0
  const resetCounter = () => {
       setCounter(0);
  };

  return (
    <>
      <div className="App">
        <p>Counter App</p>
          <div className="number">{counter}</div>
          <div className="buttons-alignment">
            <button className="button" onClick={counterDown}>-</button>
            <button className="button" onClick={counterUp}>+</button>
          </div>
          <button className="reset-button reset-button-margin" onClick={resetCounter}>Reset</button>
      </div>
      <div className="developer-name">
        — IbtisamZ —
      </div>
    </>
  );
};

export default CounterApp;
