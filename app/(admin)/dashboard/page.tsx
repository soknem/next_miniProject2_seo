"use client";

import React, { useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component"
import { ProductType } from "@/components/libs/difinition";
import { useState } from "react";
export default function page() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const ENDPOINT = "https://fakestoreapi.com/products/";
  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const columns: TableColumn<ProductType>[] = [
    {
      name: "Product Title",
      selector: (row) => row.title,
    },
    {
      name: "Product Price",
      selector: (row) => row.price,
    },
    {
      name: "Image",
      selector: (row): any => (
        <img src={row.image} className="w-16 h-16" alt={row.image} />
      ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row): any => (
        <div>
          <button className="text-gray-100 bg-blue-500 w-16 h-8 text-[1.2rem] hover:bg-blue-600 mx-1 rounded-sm">
            view
          </button>
          <button className="text-gray-100 bg-yellow-400 w-16 h-8 text-[1.2rem] hover:bg-orange-500 mx-1 rounded-sm">
            edit
          </button>
          <button className="text-gray-100 bg-red-500 w-16 h-8 text-[1.2rem] hover:bg-red-600 mx-1 rounded-sm">
            delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-auto min-h-full ">
      <DataTable
        columns={columns}
        data={products}
        progressPending={loading}
        pagination={true}
        pointerOnHover
        highlightOnHover
        striped
      />
    </div>
  );
}
