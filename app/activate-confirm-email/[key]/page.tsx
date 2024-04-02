type Props = {
  params: { key: string };
  searchParam: any;
};
import style from "./style.module.css";
import Button from "./components/Button";
import { ConfirmIcon } from "@/components/icons/FontAwesome";
export default function page(props: Props) {
  return (
    <main className={style.container}>
      <section className="flex flex-col items-center">
        <ConfirmIcon color="#080" classname="h-44 w-44 mb-8" />
        <h1 className="text-6xl my-4">Email has been Confirmed!</h1>
        <p className="text-3xl">
          Your email comfirmed! you can go to login page by press below button!
        </p>
        <Button title="Login" classname="my-8" />
      </section>
    </main>
  );
}
