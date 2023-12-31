"use client";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import OrderForm from "./OrderForm";

export default function OrderPopup(product) {
  return (
    <Popup
      trigger={
        <button className="button bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full mb-4 lg:mb-7 flex items-center justify-center shadow-lg shadow-black/30 transition-all hover:shadow-xl hover:scale-[1.02] hover:shadow-yellow-500 text-white mx-auto font-normal gap-1 uppercase mt-7 lg:mt-14">
          {" "}
          Заказать{" "}
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
            Заказ товара {product.product}
          </div>
          <div className="content">
            <OrderForm product={product} />
          </div>
        </div>
      )}
    </Popup>
  );
}
