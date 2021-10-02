import Button from "./Button";

export default function Keypad(props) {
  const keys = [
    7,
    4,
    1,
    ".",
    8,
    5,
    2,
    0,
    9,
    6,
    3,
    "=",
    "AC",
    "CE",
    "/",
    "*",
    "+",
    "-",
  ];

  const scientificKeys = ["inv", "rad", "sin", "cos", "tan", "e", "(", ")"];

  return (
    <div class="keypad">
      {keys.map((item) => {
        return <Button key={item} value={item}></Button>;
      })}
      <div className={props.isExpanded ? "scientific expanded" : "scientific"}>
        {scientificKeys.map((item) => {
          return <Button key={item} value={item}></Button>;
        })}
      </div>
    </div>
  );
}
