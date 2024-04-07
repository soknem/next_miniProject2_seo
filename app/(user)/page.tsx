"use client";
import { Pagination } from "flowbite-react";
import CardProductComponent from "@/components/card/CardProductComponent";
import { ProductType } from "@/components/libs/difinition";
import { customTheme } from "@/components/customize/CustomFlowbiteThemeComponent";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import HomeComponent from "@/components/home/HomeComponent";

const baseUrl = "https://store.istad.co/api/products/";

export default function Page() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(10); // Default per page value
  const router = useRouter();

  useEffect(() => {
    fetchProducts(baseUrl + `?page=${currentPage}&page_size=${perPage}`);
  }, [currentPage, perPage]);

  const fetchProducts = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setProducts(data.results);
      setTotalPages(Math.ceil(data.total / perPage));
    } catch (error) {
      console.error(error);
    }
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset currentPage when perPage changes
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-cyan-200">
      <section className="w-full h-[50%]">
        <HomeComponent />
      </section>
      <div className="w-full  flex flex-row justify-center mt-2">
        <h1 className="text-[2rem] w-[90%] mt-2 px-4 bg-cyan-50 rounded-md py-2">All Products</h1>
      </div>
      <div className="h-auto py-4 px-2  w-[90%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4">
        {products.map((product: any, index: number) => (
          <CardProductComponent
            key={index}
            onClick={() => router.push(`/${product.id}`)}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center my-4">
        <Pagination
          theme={customTheme.pagination}
          layout="pagination"
          className="h-[40px]"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
        <div className="flex items-center mx-0 md:mx-4 mt-4">
          <label htmlFor="perPage" className="mr-2 text-gray-500">
            Carts:
          </label>
          <select
            className="rounded-xl h-[40px]"
            id="perPage"
            value={perPage}
            onChange={handlePerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
          </select>
        </div>
      </div>
    </div>
  );
}
