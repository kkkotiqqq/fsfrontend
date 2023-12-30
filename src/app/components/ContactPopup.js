"use client";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ContactForm from "./ContactForm";

export default function ContactPopup() {
  return (
    <Popup
      trigger={
        <button className="button bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full mb-4 lg:mb-10 flex items-center justify-center shadow-lg shadow-black/30 text-white mx-auto font-normal gap-1 uppercase text-center max-lg:text-sm">
          <span>
            Есть вопросы? <br className="lg:hidden" /> Отправьте сообщение в 1
            клик
          </span>
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal bg-[#202526] text-white relative p-3 lg:p-7 max-w-2xl mx-auto">
          <button
            className="close w-9 h-9 rounded-full border-2 border-red-800 text-3xl flex items-center justify-center leading-7 absolute top-2 right-2 max-lg:-top-12 max-lg:bg-[#202526]"
            onClick={close}
          >
            <span className="relative -top-[2px] text-red-500 font-semibold">
              &times;
            </span>
          </button>
          <div className="header text-xl font-semibold text-center mb-5">
            ОБСУДИТЬ ВАШ ПРОЕКТ
          </div>
          <div className="content">
            <ContactForm />
          </div>
        </div>
      )}
    </Popup>
  );
}
