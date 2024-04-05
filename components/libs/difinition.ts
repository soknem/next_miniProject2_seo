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
    onClick?: () => void;
    category: {
        name: string;
        icon: string;
    };
    readonly id: string;
    name: string;
    desc: string;
    image ?: string;
    price: string;
    quantity: string;
    seller: string;
  }
  export type FormDataUpdate = {
    readonly id: number;
    category: {
        name: any;
    };
    name: string;
    desc: string;
    image ?: string;
    price: string;
    quantity: string;
    seller: string;
}
export type FormDataCreate = {
    category: {
        name: string;
        icon: string;
    };
    name: string;
    desc: string;
    image ?: string;
    price: string;
    quantity: string;
}

