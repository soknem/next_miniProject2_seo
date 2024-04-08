import React from "react";
import CardDetailComponent from "@/components/card/CardDetailComponent";
import { ProductType } from "@/components/libs/difinition";

type PropsType = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const ENDPOINT = "https://store.istad.co/api/products/";

async function getData(id: string) {
  const res = await fetch(`${ENDPOINT}${id}`);
  const data = await res.json();
  return data;
}

const Page = async (props: PropsType) => {
  let data = await getData(props.params.id);
  return (
    <div className="w-full  h-auto  min-h-screen bg-green-200">
      <CardDetailComponent
        name={data.name}
        price={data.price}
        image={data.image}
        seller={data.seller}
        desc={data.desc}
      />
    </div>
  );
};

export default Page;
