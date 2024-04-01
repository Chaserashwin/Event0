import React from "react";
import { GiMicrophone } from "react-icons/gi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { PiStudentFill } from "react-icons/pi";

function OurCategories({ images: categories }) {
  return (
    <div class="w-full h-auto flex flex-wrap flex-col items-center text-center p-10">
      <div className=" w-full flex flex-wrap justify-evenly">
        {categories?.map((categorie) => (
          <div
            key={categorie?.id}
            className="h-[100px] w-[100px] flex flex-col items-center text-center mb-12"
          >
            <a href="">
              <img
                className=" bg-orange-300 flex rounded-full p-1 border-dotted border-2 border-black"
                src={categorie?.src}
                alt={categorie?.title}
                cover
              />
              <p className="text-xl font-semibold dark:text-white">
                {categorie?.title}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurCategories;
