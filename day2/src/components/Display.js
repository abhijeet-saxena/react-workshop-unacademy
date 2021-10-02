import "../App.css";

export default function Display(props) {
  const { expression, result, isExpanded } = props;

  return (
    <div className={isExpanded ? "display expanded" : "display"}>
      <p>{expression}</p>
      <p class="output">{result}</p>
    </div>
  );
}
