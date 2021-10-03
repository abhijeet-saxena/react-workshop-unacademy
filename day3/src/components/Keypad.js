import Button from "./Button";

export default function Keypad(props) {
  const keys = [
    "7",
    "4",
    "1",
    ".",
    "8",
    "5",
    "2",
    "0",
    "9",
    "6",
    "3",
    "=",
    "AC",
    "CE",
    "/",
    "*",
    "+",
    "-",
    "sin",
    "ln",
    "π",
    "(",
    "cos",
    "log",
    "e",
    ")",
    "tan",
    "!",
    "^",
    "√",
  ];

  return (
    <div
      className="keypad"
      onClick={(e) => props.calculate(e.target.dataset.input)}
    >
      {keys.map((item) => {
        return <Button key={item} value={item}></Button>;
      })}
    </div>
  );
}
