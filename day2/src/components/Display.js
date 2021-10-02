import "../App.css";

export default function Display(props) {
  const { expression, result } = props;

  return (
    <div className="display">
      <p>{expression}</p>
      <p class="output">{result}</p>
    </div>
  );
}
