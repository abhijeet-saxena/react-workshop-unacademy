// If we want state like behavior in Function components
// useState is a react Hook https://reactjs.org/docs/hooks-state.html
import { useState } from "react";

export default function Counter() {
  // First Element stores the value, second element is used to update value
  const [count, setCount] = useState(0);

  const handleClick = (diff) => {
    console.log("calculating");
    setCount(count + diff);
  };

  return (
    <main>
      <h2>Counter</h2>
      <p>{count}</p>
      <button className="btn" onClick={() => handleClick(-1 * count)}>
        Reset to 0
      </button>
      <button className="btn" onClick={() => handleClick(1)}>
        Increment by 1
      </button>
      <button className="btn" onClick={() => handleClick(-1)}>
        Decrement by 1
      </button>
      <button className="btn" onClick={() => handleClick(2)}>
        Increment by 2
      </button>
      <button className="btn" onClick={() => handleClick(-2)}>
        Decrement by 2
      </button>
    </main>
  );
}
