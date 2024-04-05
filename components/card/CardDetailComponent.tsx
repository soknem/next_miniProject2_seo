"use client";

import { Card } from "flowbite-react";
type PropsType = {
  name: string;
  image: string;
  price: number;
  desc: string;
  seller: string;
};
export default function Component({
  name,
  image,
  price,
  desc,
  seller,
}: PropsType) {
  return (
    <section className="w-[90%]  h-[90%] bg-yellow-300 grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <img
        src={image}
        alt={name}
        className="mx-auto h-full object-cover object-center overflow-hidden"
      />
      <div className="w-full h-full flex flex-col justify-around bg-purple-400">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{desc}</p>
      </div>
    </section>
  );
}
