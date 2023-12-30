"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email";
import { useState } from "react";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(data) {
    setIsSubmitting(true);
    sendEmail(data, (message) => {
      setResponseMessage(message);
      reset(); // Очистка формы после отправки
      setIsSubmitting(false);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Имя"
        className="w-full bg-white rounded-xl h-12 text-center mb-3 lg:mb-7 text-black"
        {...register("name", { required: true })}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-3 mb-3 lg:mb-7">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="w-full bg-white rounded-xl h-12 text-center text-black"
          {...register("email", { required: true })}
        />

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Телефон"
          className="w-full bg-white rounded-xl h-12 text-center text-black"
          {...register("phone", { required: true })}
        />
      </div>

      <textarea
        id="message"
        name="message"
        placeholder="Сообщение"
        className="w-full bg-white rounded-xl h-40 text-center p-5 text-black"
        {...register("message", { required: true })}
      />

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-x-5 gap-y-4 mt-7 items-center">
        {/* <input
          type="file"
          id="file"
          name="file"
          multiple
          className="block w-full text-sm text-white
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-yellow-50 file:text-yellow-700
      hover:file:bg-yellow-200 cursor-pointer"
        /> */}

        <button
          type="submit"
          className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full flex items-center justify-center shadow-md shadow-yellow-400 text-white mx-auto font-normal relative"
        >
          {isSubmitting ? "Отправка..." : "Отправить"}
        </button>

        {responseMessage && (
          <div className="response-message bg-green-800 border border-green-600 rounded-xl px-4 py-3 text-center">
            {responseMessage}
          </div>
        )}
      </div>
    </form>
  );
}
