import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [resetDisplay, setResetDisplay] = useState(false);

  const handleNumber = (num: string) => {
    if (resetDisplay) {
      setDisplay(num);
      setResetDisplay(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOperation = (op: string) => {
    setPreviousValue(display);
    setOperation(op);
    setResetDisplay(true);
  };

  const calculate = () => {
    if (!previousValue || !operation) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(display);
    let result = 0;

    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "×":
        result = prev * current;
        break;
      case "÷":
        result = prev / current;
        break;
    }

    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setResetDisplay(false);
  };

  const buttons = [
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md rounded-2xl bg-gray-800 p-6 shadow-2xl">
        <div className="mb-6 rounded-lg bg-gray-900 p-4">
          <div className="flex h-20 items-end justify-end overflow-hidden text-right">
            <span className="animate-fade-in text-4xl font-light text-white">
              {display}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <Button
            variant="destructive"
            className="col-span-2 text-lg font-semibold"
            onClick={clear}
          >
            AC
          </Button>
          <Button
            variant="secondary"
            className="col-span-2 text-lg font-semibold"
            onClick={() => setDisplay(display.slice(0, -1) || "0")}
          >
            ⌫
          </Button>
          {buttons.map((btn, index) => (
            <Button
              key={btn}
              className={cn(
                "text-lg font-semibold transition-all hover:scale-105",
                ["÷", "×", "-", "+"].includes(btn)
                  ? "bg-blue-600 hover:bg-blue-700"
                  : btn === "="
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-700 hover:bg-gray-600"
              )}
              onClick={() => {
                if (btn === "=") {
                  calculate();
                } else if (["÷", "×", "-", "+"].includes(btn)) {
                  handleOperation(btn);
                } else {
                  handleNumber(btn);
                }
              }}
            >
              {btn}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;