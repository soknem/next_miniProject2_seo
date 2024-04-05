import { Card } from "flowbite-react";
import React from "react";

type PropsType = {
  title: string;
  image: string;
  description: string;
  onClick?: () => void;
};

export default async function CardServiceComponent({
  title,
  image,
  description,
  onClick,
}: PropsType) {
  return (
    <Card
      onClick={onClick}
      className="w-full min-w-[250px]  min-h-[300px] max-h-[400px] hover:border-gray-400 hover:scale-[103%] hover:shadow-md duration-200"
      renderImage={() => (
        <img
          className=" object-contain w-full h-full overflow-hidden mx-auto p-1"
          src={image}
        />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
        {description}
      </p>
    </Card>
  );
}
