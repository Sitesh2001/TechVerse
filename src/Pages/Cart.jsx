import React from "react";
import CartLeft from "../Components/Cart/CartLeft";
import CartRight from "../Components/Cart/CartRight";
import { Layout } from "../Components/Layout/Layout";

export default function Cart() {
  return (
    <Layout>
      <div className=" w-full flex justify-center mt-10 ">
        <div className=" flex w-[90%] gap-x-10 flex-wrap mx-4 ">
          <CartLeft />
          <CartRight />
        </div>
      </div>
    </Layout>
  );
}
