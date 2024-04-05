"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./style.module.css";
import { useReducer, useState } from "react";
import { Router, useRouter } from "next/navigation";

const BaseUrl = "https://store.istad.co";
const AccessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NDgzNjAxLCJpYXQiOjE3MTIzMjM2MDEsImp0aSI6ImEyNjkwZWZmNzg4MjRjMzY5ZmRmY2E5ZGViYjdlMTUzIiwidXNlcl9pZCI6NjJ9.DJi9nb0tYz4yZ_BvueLBEMQuq-FzFdo059_aIzBwQUM";

type CatageoryType = {
  name: string;
  icon: string;
};

type ProductPostType = {
  category: CatageoryType;
  name: string;
  desc: string;
  image: string;
  price: number;
  quantity: number;
};

const initialValues = {
  categoryName: "",
  categoryIcon: "",
  name: "",
  desc: "",
  image: "",
  price: 0,
  quantity: 0,
  fileIcon: null,
  fileProduct: null,
};

const FILE_SIZE = 1024 * 1024 * 2; // 2MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

const validationSchema = Yup.object().shape({
  categoryName: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  desc: Yup.string().nullable(),
  price: Yup.number().required("Required"),
  quantity: Yup.number().required("Required"),
  fileIcon: Yup.mixed()
    .test("fileFormat", "Unsupported Format", (value: any) => {
      if (!value) {
        return true;
      }
      return SUPPORTED_FORMATS.includes(value.type);
    })
    .test("fileSize", "File Size is too large", (value: any) => {
      if (!value) {
        true;
      }
      return value.size <= FILE_SIZE;
    })

    .required("Required"),
  fileProduct: Yup.mixed()
    .test("fileFormat", "Unsupported Format", (value: any) => {
      if (!value) {
        return true;
      }
      return SUPPORTED_FORMATS.includes(value.type);
    })
    .test("fileSize", "File Size is too large", (value: any) => {
      if (!value) {
        true;
      }
      return value.size <= FILE_SIZE;
    })

    .required("Required"),
});

export default function Product() {
    const router=useRouter();
  const handleUploadeIcon = async (
    file: any,
    name: any,
    typeFile: "category" | "product"
  ) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", file);

    const rest = await fetch(`${BaseUrl}/api/file/${typeFile}/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AccessToken}`,
      },
      body: formData,
    });

    const data = await rest.json();
    return data.image;
  };

  const handleSubmitProudct = async (value: ProductPostType) => {
    const res = await fetch(`${BaseUrl}/api/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AccessToken}`,
      },
      body: JSON.stringify(value),
    });

    const data = await res.json();

    console.log("product uploade: ", data);
  };

  return (
    <main className={`${style.container}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
        
          const fileIcon = values.fileIcon;
          const categoryIcon = await handleUploadeIcon(
            fileIcon,
            values.categoryName,
            "category"
          );

         
          const fileProduct = values.fileProduct;
          const productImage = await handleUploadeIcon(
            fileProduct,
            values.name,
            "product"
          );

      
          const productPost: ProductPostType = {
            category: {
              name: values.categoryName,
              icon: categoryIcon,
            },
            name: values.name,
            desc: values.desc,
            image: productImage,
            price: values.price,
            quantity: values.quantity,
          };

          handleSubmitProudct(productPost);
        }}
      >
        {({ setFieldValue }) => (
          <Form className={`${style.form}`}>
            <h1 className={`${style.title}`}>Create Product</h1>
            {/* Product Name */}
            <div className="mb-5">
              <label className={`${style.label}`} htmlFor="name">
                Product Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className={`${style.input}`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={`${style.error}`}
              />
            </div>

            <div className="mb-5">
              <label className={`${style.label}`} htmlFor="desc">
                Product Description
              </label>
              <Field
                type="text"
                name="desc"
                id="desc"
                component="textarea"
                className={`${style.input}`}
              />
              <ErrorMessage
                name="desc"
                component="div"
                className={`${style.error}`}
              />
            </div>

            {/* Product Price */}
            <div className="mb-5">
              <label className={`${style.label}`} htmlFor="price">
                Product Price
              </label>
              <Field
                type="number"
                name="price"
                id="price"
                className={`${style.input}`}
              />
              <ErrorMessage
                name="price"
                component="div"
                className={`${style.error}`}
              />
            </div>

            <div className="mb-5">
              <label className={`${style.label}`} htmlFor="price">
                Product Quantity
              </label>
              <Field
                type="number"
                name="quantity"
                id="quantity"
                className={`${style.input}`}
              />
              <ErrorMessage
                name="quantity"
                component="div"
                className={`${style.error}`}
              />
            </div>

            <div className="mb-5">
              <label className={`${style.label}`} htmlFor="categoryName">
                Product Category Name
              </label>
              <Field
                type="text"
                name="categoryName"
                id="categoryName"
                className={`${style.input}`}
              />
              <ErrorMessage
                name="categoryName"
                component="div"
                className={`${style.error}`}
              />
            </div>

            {/* Product Category Icon*/}
            <div className="mb-5">
              <label className={`${style.label}`} htmlFor="categoryIcon">
                Product Category Icon
              </label>
              <Field
                type="file"
                name="fileIcon"
                id="fileIcon"
                component={CustomInput}
                setFieldValue={setFieldValue}
                className={`${style.input}`}
              />
              <ErrorMessage
                name="fileIcon"
                component="div"
                className={`${style.error}`}
              />
            </div>

            {/* Product Image*/}
            <div className="mb-5">
              <label className={`${style.label}`} htmlFor="fileProduct">
                Product Image
              </label>
              <Field
                type="file"
                name="fileProduct"
                id="fileProduct"
                component={CustomInput}
                setFieldValue={setFieldValue}
                className={`${style.input}`}
              />
              <ErrorMessage
                name="fileProduct"
                component="div"
                className={`${style.error}`}
              />
            </div>

            <section className="flex justify-between mx-2">
            <button
                type="button"
                className={`${style.cancel}`}
                onClick={()=> router.push("/dashboard")}
              >
                Cancel
              </button>
              <button type="submit" className={`${style.button}`}>
                Submit
              </button>
             
            </section>
          </Form>
        )}
      </Formik>
    </main>
  );
}

const CustomInput = ({ field, form, setFieldValue }: any) => {
  const [imagePreview, setImagePreview] = useState("");

  const handleUploadeFile = (e: any) => {
    const file = e.target.files[0];
    const localUrl = URL.createObjectURL(file);
    console.log(localUrl);
    setImagePreview(localUrl);

    setFieldValue(field.name, file);
  };
  return (
    <div>
      <input onChange={(e) => handleUploadeFile(e)} type="file" />
      {imagePreview && <img src={imagePreview} alt="preview" />}
    </div>
  );
};
