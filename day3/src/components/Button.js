export default function Button(props) {
  return (
    <div className="btn" data-input={props.value}>
      {props.value}
    </div>
  );
}
