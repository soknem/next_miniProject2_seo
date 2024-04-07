"use client";
import { useRouter } from "next/navigation";
type PropsType = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
const BaseUrl = "https://store.istad.co";
const AccessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NDgzNjAxLCJpYXQiOjE3MTIzMjM2MDEsImp0aSI6ImEyNjkwZWZmNzg4MjRjMzY5ZmRmY2E5ZGViYjdlMTUzIiwidXNlcl9pZCI6NjJ9.DJi9nb0tYz4yZ_BvueLBEMQuq-FzFdo059_aIzBwQUM";

async function handleDelete(productId: string) {
  try {
    const res = await fetch(`${BaseUrl}/api/products/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${AccessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to delete product");
    }

    console.log("Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}
const DeleteProductById = async (props:PropsType) => {
  const id=props.params.id;
  const router = useRouter();
  return (
    <div className="delete-confirmation-dialog">
      <p>Are you sure you want to delete this product?</p>
      <button
        onClick={() => {
          handleDelete(id);
          router.push("/dashboard")
        }}
      >
        Yes
      </button>
      <button onClick={() => router.push("/dashboard")}>No</button>
    </div>
  );
};

export default DeleteProductById;
