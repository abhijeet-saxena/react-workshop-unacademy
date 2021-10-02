// If we want state like behavior in Function components
// useState is a react Hook https://reactjs.org/docs/hooks-state.html
import { useState } from "react";

export default function Counter() {
  // First Element stores the value, second element is used to update value
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <main>
      <h2>Counter</h2>
      <p>{count}</p>
      <button className="btn" onClick={increment}>
        Increment
      </button>
      <button className="btn" onClick={decrement}>
        Decrement
      </button>
    </main>
  );
}
