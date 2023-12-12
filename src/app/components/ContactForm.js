"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Создание объекта FormData для отправки файлов и значений формы
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    // Отправка данных формы на ваш API-эндпоинт
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        console.log("Сообщение отправлено");
        // Обработка успешной отправки
      } else {
        console.log("Ошибка при отправке сообщения");
        // Обработка ошибки отправки
      }
    } catch (error) {
      console.error("Произошла ошибка при отправке формы", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Имя"
        value={formData.name}
        onChange={handleChange}
        className="w-full bg-white rounded-xl h-12 text-center mb-7"
      />

      <div className="grid grid-cols-2 gap-x-5 gap-y-7 mb-7">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white rounded-xl h-12 text-center"
        />

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Телефон"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-white rounded-xl h-12 text-center"
        />
      </div>

      <textarea
        id="message"
        name="message"
        placeholder="Сообщение"
        value={formData.message}
        onChange={handleChange}
        className="w-full bg-white rounded-xl h-40 text-center p-5"
      />

      <div className="grid grid-cols-2 gap-x-5 gap-y-7 mt-7 items-center">
        <input
          type="file"
          id="file"
          name="file"
          multiple
          onChange={handleChange}
          className="block w-full text-sm text-white
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
        />

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
