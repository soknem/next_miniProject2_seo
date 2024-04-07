import React from "react";

export default function HomeComponent() {
  return (
    <div className="row1 bg-yellow-100 w-[100%] grid grid-cols-1 lg:grid-cols-2 place-items-center gap-0">
      <div className=" h-[150px] md:h-[250px] lg:h-auto flex flex-col justify-center items-center">
        <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] m-2 md:m-3 lg:m-4">
          Welcome To <span className="text-[#309255]">ESA Store</span>
        </h1>
        <h3 className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] m-2 md:m-3 lg:m-4">
          You can buy every thing from here
        </h3>
      </div>
      <div className="box2 flex items-center justify-center lg:justify-end">
        <img src="https://store.istad.co/media/product_images/5-Best-Platforms-For-Selling-Digital-Products-Online.jpg
" alt="home image" />
      </div>
    </div>
  );
}
