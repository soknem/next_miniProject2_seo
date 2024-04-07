"use client"
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { ProductType } from "@/components/libs/difinition";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default rows per page
  const router = useRouter();
  const url = `https://store.istad.co/api/products/?page=${currentPage}&page_size=${rowsPerPage}`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results);
        setTotalPages(Math.ceil(data.total / rowsPerPage));
        setLoading(false);
      });
  }, [currentPage, rowsPerPage]);

  const columns: TableColumn<ProductType>[] = [
    {
      name: "Product Name",
      selector: (row) => row.name,
      
    },
    {
      name: "Price",
      selector: (row) => `${row.price}$`,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
    },
    {
      name: "Category",
      selector: (row) => row.category,
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
        <div className="w-[300px]">
          <button
            onClick={() => handleView(row)}
            className=" text-gray-100 bg-blue-500 w-12 h-8 text-[1.2rem] hover:bg-blue-600 mx-1 rounded-sm"
          >
            view
          </button>
          <button
            onClick={() => handleUpdate(row)}
            className="text-gray-100 bg-yellow-400 w-12 h-8 text-[1.2rem] hover:bg-orange-500 mx-1 rounded-sm"
          >
            edit
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="text-gray-100 bg-red-500 w-14 h-8 text-[1.2rem] hover:bg-red-600 mx-1 rounded-sm"
          >
            delete
          </button>
        </div>
      ),
    },
  ];

  const handleView = (product: ProductType) => {
    router.push(`/${product.id}`);
  };

  const handleDelete = (product: ProductType) => {
    router.push(`/delete/${product.id}`);
  };

  const handleUpdate = (product: ProductType) => {
    router.push(`/update/${product.id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
  };
  const customStyles = {
    head: {
      style: {
        fontSize: '18px', 
      },
    },
    rows: {
      style: {
        fontSize: "16px",
      },
    },
  };

  return (
    <div className="w-full  ">
      <DataTable
      customStyles={customStyles}
        columns={columns}
        data={products}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalPages * rowsPerPage}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleRowsPerPageChange} 
        paginationRowsPerPageOptions={[10,15, 20,25, 30,35,40]}
        pointerOnHover
        highlightOnHover
        striped
      />
    </div>
  );
}
