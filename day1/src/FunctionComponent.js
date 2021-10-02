// props are inputs passed to child components
// Function components dont have their state
function FC(props) {
  return (
    <div>
      <h2>This is a Function/Stateless Component</h2>
      <button style={{ color: "Blue" }}>{props.text}</button>
    </div>
  );
}

export default FC;
