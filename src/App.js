import './App.css';
import React, {useState} from "react";


const CounterApp = () => {

  const [counter, setCounter] = useState(0);

  const counterUp = () => {
      setCounter(counter + 1);
  };
  const counterDown = () => {
    counter > 0 &&
       setCounter(counter - 1);
  };
  const resetCounter = () => {
       setCounter(0);
  };
  return (
      <div className="App">
        <p>Counter App</p>
          <div className="number">{counter}</div>
          <button className="button" onClick={counterUp}>+</button>
          <button className="button" onClick={counterDown}>-</button>
          <button className="button reset-button-margin" onClick={resetCounter}>Reset</button>
      </div>
  );
};

export default CounterApp;
