import { useState } from "react";
import "./App.css";
import Button from "./Button";
const operators = ["%", "-", "+", "/", "*"];

function App() {
  const [lastOperator, setLastOperator] = useState("");

  const [strDisplay, setstrToDisplay] = useState("");

  const [mouseDown, setMouseDown] = useState();

  const handleOnClick = (value) => {
    if (value === "AC") {
      setstrToDisplay("");
      return;
    }

    // make c button work
    if (value === "C") {
      setstrToDisplay(strDisplay.slice(0, -1));
      return;
    }

    // Make = button work
    if (value === "=" || value === "Enter") {
      setLastOperator("");
      const lastChar = strDisplay[strDisplay.length - 1];

      if (operators.includes(lastChar)) {
        setstrToDisplay(strDisplay.slice(0, -1));
      }
      return displayTotal();
    }

    // make only one operator at a time

    if (operators.includes(value)) {
      setLastOperator(value);
      const lastChar = strDisplay[strDisplay.length - 1];

      if (operators.includes(lastChar)) {
        setstrToDisplay(strDisplay.slice(0, -1) + value);
        return;
      }
    }

    // allow only one dot for the programme
    if (value === ".") {
      const lastoperatorIndex = strDisplay.lastIndexOf(lastOperator);

      const lastNumberSet = strDisplay.slice(lastoperatorIndex);

      if (lastNumberSet.includes(".")) {
        return;
      }

      if (!lastOperator && strDisplay.includes(".")) {
        return;
      }
    }

    setstrToDisplay(strDisplay + value);
  };

  const displayTotal = () => {
    const total = eval(strDisplay);

    setstrToDisplay(total.toString());
  };

  const handleMouseDown = (value) => {
    setMouseDown(value);
  };

  const btns = [
    {
      cls: "btn-ac",
      label: "AC",
    },
    {
      cls: "btn-c",
      label: "C",
    },
    {
      cls: "btn-per",
      label: "%",
    },
    {
      cls: "btn-slash",
      label: "/",
    },
    {
      cls: "btn-7",
      label: "7",
    },
    {
      cls: "btn-8",
      label: "8",
    },
    {
      cls: "btn-9",
      label: "9",
    },
    {
      cls: "btn-star",
      label: "*",
    },
    {
      cls: "btn-4",
      label: "4",
    },
    {
      cls: "btn-5",
      label: "5",
    },
    {
      cls: "btn-6",
      label: "6",
    },
    {
      cls: "btn-minus",
      label: "-",
    },
    {
      cls: "btn-1",
      label: "1",
    },

    {
      cls: "btn-2",
      label: "2",
    },
    {
      cls: "btn-3",
      label: "3",
    },
    {
      cls: "btn-plus",
      label: "+",
    },
    {
      cls: "btn-0",
      label: "0",
    },
    {
      cls: "btn-dot",
      label: ".",
    },
    {
      cls: "btn-equal",
      label: "=",
    },
  ];

  return (
    <div className="wrapper flex-center">
      <div className="calculator">
        <div className="display">{strDisplay}</div>

        {btns.map((btn, i) => (
          <Button
            mouseDown={mouseDown}
            handleMouseDown={handleMouseDown}
            handleOnClick={handleOnClick}
            key={i}
            {...btn}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
