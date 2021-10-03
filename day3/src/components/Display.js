import "../App.css";

export default function Display(props) {
  const { expression, result, err } = props;

  return (
    <div className="display">
      <p>{expression}</p>
      {err ? (
        <p className="error">{err}</p>
      ) : (
        <p className="output">{result}</p>
      )}
    </div>
  );
}
