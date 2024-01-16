import { useState, useRef } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncreament = () => {
    countRef.current += 1;

    if (countRef.current === 3) {
      countRef.current = 0;
      setCount(prev => prev + 1);
    }
  };

  return (
    <>
      <div className="counter-container">
        <h1>Counter</h1>
        <div>{count}</div>

        <div className="btns">
          <button className="add-btn" onClick={handleIncreament}>
            +
          </button>
          <button className="del-btn" onClick={() => setCount(prev => prev-1)}>-</button>
        </div>
      </div>
    </>
  );
}

export default App;
