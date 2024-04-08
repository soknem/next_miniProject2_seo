"use client";
import { Card } from "flowbite-react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
// import "@/globals.css";
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
  const router = useRouter();
  return (
    <div className="bg-green-200 w-full py-8 h-auto min-h-screen  flex items-center justify-center">
      <section className="lg:w-[90%] h-full lg:h-[80%] product grid grid-cols-1 lg:grid-cols-2 bg-gray-50 rounded-lg p-1 shadow-lg">
        <div className=" relative h-[300px] lg:h-full bg-gradient-to-b from-gray-50 to-gray-50 lg:to-gray-200 rounded-l-lg ">
          <img
            src={image}
            alt="green apple slice"
            className="absolute left-1/2 lg:left-0 top-0 transform -translate-x-1/2 lg:-translate-x-6 h-[300px] lg:h-full pb-4 object-contain translate-y-0"
          />
        </div>
        <div className=" w-full p-4 bg-gradient-to-b from-gray-50 to-gray-200 rounded-r-lg">
          <div className="title mb-2">
            <h1 className="text-primary text-3xl font-bold">{name}</h1>
          </div>
          <div className="price mb-4">
            <span className="text-orange-400 text-5xl font-bold">
              R$ {price}
            </span>
          </div>
          <div className="variant mb-4">
            <h3 className="text-secondary text-[1.5rem] font-semibold mb-2">SELECT A COLOR</h3>
            <ul className="flex justify-around">
              {[1, 2, 3, 4].map((item) => (
                <li key={item}>
                  <img src={image} alt={image} className="w-10 h-10" />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-[1.5rem]">SELLER</h2>
            <span className="text-[1.2rem]">{seller}</span>
          </div>
          <div className="description mb-4">
            <h2 className="font-semibold text-[1.5rem] mb-2">DESCRIPTION</h2>
            <span className="text-[1.2rem]">{desc}</span>
          </div>
          <div className="flex flex-row justify-between px-1">
            <button className="bg-red-500 hover:bg-red-700  rounded-lg font-semibold text-gray-100 bg-highlight shadow-md w-[140px] h-[50px]"
            onClick={()=>router.push("/")}>
              BACK
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 rounded-lg font-semibold text-gray-100 bg-highlight shadow-md  w-[140px] h-[50px]">
              ADD TO CART
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
