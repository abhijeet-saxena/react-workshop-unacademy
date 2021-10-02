import Button from "./Button";

export default function Keypad() {
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
    "pi",
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
    <div class="keypad">
      {keys.map((item) => {
        return <Button key={item} value={item}></Button>;
      })}
    </div>
  );
}
