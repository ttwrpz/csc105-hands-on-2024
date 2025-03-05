import { useState } from "react";

function App() {
  const [currentValue, setCurrentValue] = useState(
    /** @type {String|number} */ 0,
  );
  const [result, setResult] = useState(/** @type {number} */ 0);

  /**
   * @param {String|number} value
   */
  const handleOnChange = (value) => {
    if (isNaN(value)) return;
    setCurrentValue(value);
  };

  /**
   * @param {"+"|"-"|"*"|"/"} operation
   */
  const handleOnOperation = (operation) => {
    switch (operation) {
      case "+":
        setResult((prev) => prev + Number(currentValue));
        break;
      case "-":
        setResult((prev) => prev - Number(currentValue));
        break;
      case "*":
        setResult((prev) => prev * Number(currentValue));
        break;
      case "/":
        setResult((prev) => {
          if (prev === 0 && Number(currentValue) === 0) return 0;
          if (Number(currentValue) === 0) return prev;

          return prev / Number(currentValue);
        });
        break;
    }
    setCurrentValue("");
  };

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="mx-auto flex h-full w-full max-w-xl flex-col gap-8 rounded p-8 shadow">
        <h1 className="text-center text-3xl font-semibold">
          Simple Calculator
        </h1>
        <div className="space-x-2 rounded bg-gray-100 px-4 py-2 text-center">
          <span className="font-semibold">Result:</span>
          <span>{result}</span>
        </div>
        <div className="flex flex-row flex-wrap gap-4">
          <input
            type="text"
            className="h-9 flex-10/12 rounded border px-4"
            onChange={(e) => handleOnChange(e.target.value)}
            value={currentValue}
            placeholder="Enter a number"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleOnOperation("+")}
              className="w-full flex-1 rounded bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
            >
              Add
            </button>
            <button
              onClick={() => handleOnOperation("-")}
              className="w-full flex-1 rounded bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
            >
              Subtract
            </button>
            <button
              onClick={() => handleOnOperation("*")}
              className="w-full flex-1 rounded bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
            >
              Multiply
            </button>
            <button
              onClick={() => handleOnOperation("/")}
              className="w-full flex-1 rounded bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
            >
              Divide
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setCurrentValue("")}
              className="w-full flex-1 rounded bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
            >
              Reset Input
            </button>
            <button
              onClick={() => setResult(0)}
              className="w-full flex-1 rounded bg-red-800 px-4 py-2 text-white hover:bg-red-900"
            >
              Reset Result
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
