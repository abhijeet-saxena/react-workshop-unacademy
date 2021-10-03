import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import { evaluate } from "mathjs";

function App() {
  const [isExpanded, setExpanded] = useState(false);
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [err, setErr] = useState("");

  const calculate = (ip) => {
    setErr("");
    try {
      switch (ip) {
        case "AC":
          setExpression("");
          setResult("");
          break;
        case "CE":
          setExpression(expression.slice(0, -1));
          setResult("");
          break;
        case "=":
          let cleanedExp = expression.replaceAll("log", "log10");
          cleanedExp = cleanedExp.replaceAll("ln", "log");
          cleanedExp = cleanedExp.replaceAll("π", "pi");
          cleanedExp = cleanedExp.replaceAll("√", "sqrt");
          setResult(evaluate(cleanedExp));
          break;
        case "sin":
        case "cos":
        case "tan":
        case "ln":
        case "log":
        case "√":
          setExpression(expression + ip + "(");
          break;
        default:
          setExpression(expression + ip);
          setResult("");
      }
    } catch (e) {
      // in case error occurs;
      console.log(e.message); //optional
      setErr(e.message);
    }
  };

  const highlightBtn = (element) => {
    element.classList.add("clicked");
    setTimeout(() => {
      element.classList.remove("clicked");
    }, 100);
  };

  // this gets invoked on mount
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (
        document.querySelector(`[data-input='${e.key}']`) ||
        ["Enter", "Escape", "Backspace"].includes(e.key)
      ) {
        switch (e.key) {
          case "Enter":
            document.querySelector(`[data-input='=']`).click();
            highlightBtn(document.querySelector(`[data-input='=']`));
            break;
          case "Escape":
            document.querySelector(`[data-input='AC']`).click();
            highlightBtn(document.querySelector(`[data-input='AC']`));
            break;
          case "Backspace":
            document.querySelector(`[data-input='CE']`).click();
            highlightBtn(document.querySelector(`[data-input='CE']`));
            break;
          default:
            highlightBtn(document.querySelector(`[data-input='${e.key}']`));
            document.querySelector(`[data-input='${e.key}']`).click();
        }
      }
    });

    // This function is invoked on unmount
    return () => {
      document.removeEventListener("keyup", (e) => {});
    };
  }, []); // dependency array

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="container">
      <button onClick={handleClick}>
        Show {isExpanded ? "Basic" : "Scientific"}
      </button>
      <main className={isExpanded ? "expanded" : ""}>
        <Display err={err} expression={expression} result={result}></Display>
        <Keypad calculate={calculate}></Keypad>
      </main>
    </div>
  );
}

export default App;
