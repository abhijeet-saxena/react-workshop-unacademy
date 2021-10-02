import "./App.css"; // Component Style FIle
import CC from "./ClassComponent";
import FC from "./FunctionComponent";
import Counter from "./Counter";

// Comment/Uncomment as you like to render components
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <h1 className="underline">App Component</h1>
      {/* <CC color="teal"></CC>
      <FC text="This text is coming as props from <App>"></FC> */}
      <Counter />
    </div>
  );
}

export default App;
