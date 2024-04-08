import React from "react";
import MusicEvents from "../../utils/Cat_second_content";

const Music = () => {
 const [cat1] = MusicEvents;
  return (
    <div className="m-3 w-full">
      <h2>Music</h2>
      {/* banner */}

      {/* our events starts here */}
      <div className="min-h-[100px] max-w-auto pt-[24px] pb-[40px] m-10">
        <div className="">
          <div className="">
            <h3>Events in Online</h3>
            <div></div>
          </div>
          {/* Events Container */}
          <div className="w-full flex bg-slate-500">
            {/* Event Card */}
            {MusicEvents?.map((categorie) => (
              <div
                key={categorie?.events.id}
                className="p-[8px] w-[25%] border-box border-2 border-black bg-pink-300"
              >
                <div className="flex flex-col h-[100%]">
                  <div className=" top-0 left-0 h-[100%] w-[100%]"></div>
                  {/* upperpart of card */}
                  <a href="">
                    <div>
                      <img src="/banner/music.png" alt="" />
                    </div>
                  </a>
                  {/* lowerpart of card */}
                  <div className="pt-[8px] pr-[8px] pb-[16px] pl-[12px] ">
                    <div className="space-[4px]">
                      <a href="">
                        <h2>chaserashwin - chasing life</h2>
                      </a>
                      <p>Thu,Apr 11 * 10:30 PM</p>
                      <div className="mt-1"></div>
                      <div className="flex flex-wrap items-center ">
                        <p>Free</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
