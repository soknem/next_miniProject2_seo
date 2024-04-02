export type FormDataRegister = {
    email: string;
    password1: string;
    password2: string;
    first_name: string;
    last_name: string;
}
export type FormDataLogin = {
    email: string;
    password: string;

}
export type ProductType = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  };
  