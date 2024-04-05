'use client';
import { useState } from 'react';
import { FormDataCreate } from '@/components/libs/difinition';
import { useRouter } from 'next/navigation';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import  {Yup} from 'yub';
import style from './style.module.css';

const BaseUrl = "https://store.istad.co/api/";
const AccessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NDA2ODE2LCJpYXQiOjE3MTIyNDY4MTYsImp0aSI6IjUwMWFlNzBiZTRmMjQyNWNhZGYwNGFiNWYyODBkY2Y1IiwidXNlcl9pZCI6NjJ9.J_31fHKb_mhR-d9y8P7R5DYKuzXwOEzGFLXqUqGs8oU"
const initialValues: FormDataCreate = {
    category: {
        name: '',
        icon: '',
    },
    name: '',
    desc: '',
    image: '',
    price: '',
    quantity: '',
};

const validationSchema = Yup.object().shape({
    category: Yup.object().shape({
        name: Yup.string().required('Required'),
        icon: Yup.string().required('Required'),
    }),
    name: Yup.string().required('Required'),
    desc: Yup.string().required('Required'),
    image: Yup.string().required('Required'),
    price: Yup.string().required('Required'),
    quantity: Yup.string().required('Required'),
});

const CreatePage = () => {
    const [formData, setFormData] = useState(initialValues);
    const router = useRouter();

    const handleSubmit = async (values: FormDataCreate) => {
        try {
            const response = await fetch(`${BaseUrl}products/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${AccessToken}`,
                },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                router.push('/');
            } else {
                // Handle error
            }
        } catch (error) {
            console.error('Error during product creation:', error);
        }
    };

    return (
        <main className={style.container}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <Form className="bg-gray-100 p-4 rounded-lg w-96">
                    <h1 className={`${style.title}`}>Register</h1>
                    {/* Category */}
                    <div className="mb-5">
                        <label className={`${style.label}`} htmlFor="category.name">
                            Category
                        </label>
                        <Field
                            type="text"
                            placeholder="Category"
                            name="category.name"
                            id="category.name"
                            className={`${style.input}`}
                        />
                        <ErrorMessage name="category.name" component="div" className={`${style.error}`} />
                    </div>
                    <div className="mb-5">
                        <label className={`${style.label}`} htmlFor="category.icon">
                            Icon
                        </label>
                        <Field
                            type="text"
                            placeholder="Icon"
                            name="category.icon"
                            id="category.icon"
                            className={`${style.input}`}
                        />
                        <ErrorMessage name="category.icon" component="div" className={`${style.error}`} />
                    </div>
                    {/* Name */}
                    <div className="mb-5">
                        <label className={`${style.label}`} htmlFor="name">
                            Name
                        </label>
                        <Field type="text" placeholder="Name" name="name" id="name" className={`${style.input}`} />
                        <ErrorMessage name="name" component="div" className={`${style.error}`} />
                    </div>
                    {/* Description */}
                    <div className="mb-5">
                        <label className={`${style.label}`} htmlFor="desc">
                            Description
                        </label>
                        <Field type="text" placeholder="Description" name="desc" id="desc" className={`${style.input}`} />
                        <ErrorMessage name="desc" component="div" className={`${style.error}`} />
                    </div>
                    {/* Image */}
                    <div className="mb-5">
                        <label className={`${style.label}`} htmlFor="image">
                            Image
                        </label>
                        <Field type="text" placeholder="Image" name="image" id="image" className={`${style.input}`} />
                        <ErrorMessage name="image" component="div" className={`${style.error}`} />
                    </div>
                    {/* Price */}
                    <div className="mb-5">
                        <label className={`${style.label}`} htmlFor="price">
                            Price
                        </label>
                        <Field type="text" placeholder="Price" name="price" id="price" className={`${style.input}`} />
                        <ErrorMessage name="price" component="div" className={`${style.error}`} />
                    </div>
                    {/* Quantity */}
                    <div className="mb-5">
                        <label className={`${style.label}`} htmlFor="quantity">
                            Quantity
                        </label>
                        <Field type="text" placeholder="Quantity" name="quantity" id="quantity" className={`${style.input}`} />
                        <ErrorMessage name="quantity" component="div" className={`${style.error}`} />
                    </div>
                    <div className="sm:col-span-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create
                        </button>
                    </div>
                </Form>
            </Formik>
        </main>
    );
};
export default CreatePage;
