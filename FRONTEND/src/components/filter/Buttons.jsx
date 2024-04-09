import React from "react";
import { dummy } from "../../utils/dummy";

function Buttons({ menuItems, filterItems, setItems }) {
  return (
    <div className="flex justify-center mb-2">
      {menuItems.map((val) => (
        <button
          className=" text-white bg-black p-1 px-2 mx-5 rounded-lg"
          onClick={() => filterItems(val)}
        >
          {val}
        </button>
      ))}
      <button
        className="text-white bg-black p-1 px-2 mx-5 rounded-lg"
        onClick={() => setItems(dummy)}
      >
        All
      </button>
    </div>
  );
}

export default Buttons;
