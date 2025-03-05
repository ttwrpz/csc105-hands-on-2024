import { useState } from "react";
import { cn } from "./lib/utils";

function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [shoppingLists, setShoppingLists] = useState(
    /** @type {{label: String, isEditing: boolean, isCompleted: boolean}[]} */
    [],
  );

  const handleOnAddItem = () => {
    if (currentValue.trim() === "" || currentValue.trim().length <= 0) return;

    setShoppingLists((prev) => [
      ...prev,
      { label: currentValue, isEditing: false, isCompleted: false },
    ]);
    setCurrentValue("");
  };

  /**
   * @param {number} index
   */
  const handleOnEditItem = (index) => {
    setShoppingLists((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isEditing: !item.isEditing } : item,
      ),
    );
  };

  /**
   * @param {String} value
   * @param {number} index
   */
  const handleOnSaveEditItem = (value, index) => {
    setShoppingLists((prev) =>
      prev.map((item, i) => (i === index ? { ...item, label: value } : item)),
    );
  };

  /**
   * @param {number} index
   */
  const handleOnMarkAsCompleted = (index) => {
    console.log(shoppingLists[index].isEditing);
    if (shoppingLists[index].isEditing) return;

    setShoppingLists((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );
  };

  /**
   * @param {number} index
   */
  const handleOnRemoveItem = (index) => {
    setShoppingLists((prev) => [...prev.filter((_, i) => i !== index)]);
  };

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="mx-auto flex h-full min-h-[50svh] w-full max-w-xl flex-col gap-8 rounded p-8 shadow">
        <h1 className="text-center text-3xl font-semibold">Shopping List</h1>
        <div className="flex flex-row flex-wrap gap-4">
          <input
            type="text"
            className="h-9 flex-10/12 rounded border px-4"
            onChange={(e) => setCurrentValue(e.target.value)}
            value={currentValue}
            placeholder="Add a new item"
          />
          <button
            className="w-full flex-1/12 rounded bg-slate-800 px-4 py-2 text-white transition-colors hover:bg-slate-900"
            onClick={handleOnAddItem}
          >
            Add
          </button>
        </div>
        <div className="flex max-h-[40svh] flex-1 flex-col gap-4 overflow-scroll">
          {shoppingLists.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-row items-center justify-between rounded",
                item.isCompleted ? "bg-emerald-600/20" : "",
              )}
            >
              <div
                className="flex-2/3"
                onClick={() => handleOnMarkAsCompleted(index)}
              >
                {item.isEditing ? (
                  <input
                    type="text"
                    className="rounded outline-none"
                    onChange={(e) =>
                      handleOnSaveEditItem(e.target.value, index)
                    }
                    value={item.label}
                    disabled={!item.isEditing}
                  />
                ) : (
                  <p className={cn(item.isCompleted ? "line-through" : "")}>
                    {item.label}
                  </p>
                )}
              </div>
              <div className="flex flex-1/3 flex-row gap-2">
                <button
                  className={cn(
                    "w-full flex-1 rounded px-2 py-1 transition-colors",
                    item.isEditing
                      ? "bg-yellow-400 hover:bg-yellow-500"
                      : "bg-green-800 text-white hover:bg-green-900",
                  )}
                  onClick={() => handleOnEditItem(index)}
                >
                  {item.isEditing ? "Done" : "Edit"}
                </button>
                <button
                  className="w-full flex-1 rounded bg-red-700 px-2 py-1 text-white transition-colors hover:bg-red-800"
                  onClick={() => handleOnRemoveItem(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
