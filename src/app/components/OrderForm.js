"use client";

import { useForm } from "react-hook-form";
import { sendOrder } from "../utils/send-order";

export default function OrderForm(product) {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendOrder(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-x-5 gap-y-3 mb-3 lg:mb-7">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Имя"
          className="w-full bg-white text-black rounded-xl h-12 text-center"
          {...register("name", { required: true })}
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="w-full bg-white text-black rounded-xl h-12 text-center"
          {...register("email", { required: true })}
        />

        <input
          type="hidden"
          name="product"
          value={product.product.product}
          {...register("product", { required: true })}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-x-5 gap-y-4 mt-7 items-center">
        <button
          type="submit"
          className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full flex items-center justify-center shadow-md shadow-yellow-400 text-white mx-auto font-normal relative"
        >
          Отправить
        </button>
      </div>
    </form>
  );
}
