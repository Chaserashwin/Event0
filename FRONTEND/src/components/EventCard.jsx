import React from "react";
import Card from "./Card";

function EventCard({ dummy, search }) {
  return (
    <div className="mb-2 px-0 lg:mb-10 w-full p-2">
      <div className="flex flex-col flex-wrap gap-2  sm:flex-row sm:gap-16  sm:justify-center">
        {/* event card starts here */}
        {dummy
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.eventname.toLowerCase().includes(search);
          })
          .map((item) => (
            <Card item={item} />
          ))}
      </div>
    </div>
  );
}

export default EventCard;
