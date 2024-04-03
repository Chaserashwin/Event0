import React from "react";

function OurCategories({ images: categories }) {
  return (
    <div className="w-full h-auto flex flex-wrap flex-col items-stretch text-center p-5 mt-2 mb-8">
      <div className=" w-full flex flex-wrap justify-evenly ">
        {categories?.map((categorie) => (
          <div
            key={categorie?.id}
            className="h-[100px] w-[100px] flex flex-col items-center text-center m-1"
          >
            <a href="">
              <img
                className="bg-orange-300 hover:bg-orange-100 flex rounded-full p-1 border-dotted border-2 border-black"
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
