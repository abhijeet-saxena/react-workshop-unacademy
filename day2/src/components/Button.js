export default function Button(props) {
  return (
    <div class="btn" data-attr={props.value}>
      {props.value}
    </div>
  );
}
