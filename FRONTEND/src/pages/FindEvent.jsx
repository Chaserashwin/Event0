import React, { useState } from "react";
import { dummy } from "../utils/dummy";
import EventCard from "../components/EventCard";
import Buttons from "../components/filter/Buttons";

function FindEvent() {
  const [search, setSearch] = useState("");
  const [item, setItems] = useState(dummy);

  const menuItems = [...new Set(dummy.map((val) => val.catname))];

  const filterItems = (cat) => {
    const newItems = dummy.filter((newval) => newval.catname === cat);
    setItems(newItems);
    console.log(newItems);
  };

  return (
    <div className=" dark:bg-slate-950">
      <div className="w-full h-auto flex flex-wrap flex-col md:p-10 max-w-10xl mx-auto mt-[50px] sm:mt-0 px-4 sm:px-6 justify-center">
        {/* heading of component */}
        <div className="w-full h-auto flex flex-wrap flex-col items-center pt-12 md:pt-20 border-t border-gray-800">
          <p
            className="bg-gradient-to-r 
         from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 font-bold text-3xl md:text-4xl text-center "
          >
            Find Events
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-400 rounded-2xl md:mt-4 mt-2 mb-4"></div>
        </div>
        {/* SearchBar */}
        <div className="text-center w-full">
          <form className="text-center">
            <input
              className="border border-black my-3 mx-3 px-3 py-2 dark:bg-slate-600 dark:text-white rounded-lg text-center"
              type="search"
              placeholder="Musical Night"
              name=""
              id=""
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        {/* filter buttons */}
        <div className="text-center justify-center align-center w-full">
          <Buttons
            menuItems={menuItems}
            filterItems={filterItems}
            setItems={setItems}
          />
        </div>
        {/* event Collection starts here */}
        <EventCard dummy={item} search={search} />
      </div>
    </div>
  );
}

export default FindEvent;
