import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

export default function Contacts() {
  return (
    <main className="flex min-h-screen flex-col justify-between overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="pr-32">
            <h2 className="uppercase text-3xl lg:text-[50px] font-extralight mb-4 mt-8">
              Наши контакты
            </h2>
            <div className="text-2xl uppercase mb-10">
              Купите свет прямо сейчас
            </div>
            <Link
              href="tel:000000000"
              className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full mb-10 flex items-center justify-center shadow-lg shadow-black/30 text-white mx-auto uppercase font-normal"
            >
              <span>Позвонить: </span>
              <span>+7 (000) 000-00-00</span>
            </Link>
            <Link
              href="mailto:sales@fslight.net"
              className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full mb-10 flex items-center justify-center shadow-lg shadow-black/30 text-white mx-auto font-normal"
            >
              <span>Написать email: </span>
              <span>sales@fslight.net</span>
            </Link>
            <div className="flex gap-5">
              <Link
                href="/"
                className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full flex items-center justify-center shadow-md shadow-black/30 text-white mx-auto font-normal relative"
              >
                <span>Telegram</span>
              </Link>
              <Link
                href="/"
                className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full flex items-center justify-center shadow-md shadow-black/30 text-white mx-auto font-normal relative"
              >
                <span>Whatsapp</span>
              </Link>
              <Link
                href="/"
                className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full flex items-center justify-center shadow-md shadow-black/30 text-white mx-auto font-normal relative"
              >
                <span>Pinterest</span>
              </Link>
            </div>
            <div className="text-2xl leading-[50px] mt-10">
              Адрес: город Санкт-Петербург <br /> Гражданский проспект, дом 84{" "}
              <br />
              литера А, помещение 33-н к. №2
            </div>
          </div>
          <div className="bg-[#323232] py-10 px-14 rounded-l-xl relative after:bg-[#323232] after:top-0 after:-right-[170px] after:h-full after:absolute after:w-[170px]">
            <div className="font-extralight mb-7 text-[50px] text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_80%)]">
              ОБСУДИТЬ ВАШ ПРОЕКТ
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: "url('map.png')" }}
        className="pt-10 h-screen bg-cover max-h-[860px] mt-[70px]"
      >
        <div className="container">
          <div className="grid grid-cols-2 gap-5 max-w-4xl mx-auto">
            <Link
              href="tel:000000000"
              className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full mb-10 flex items-center justify-center shadow-lg shadow-black/30 text-white mx-auto uppercase font-normal"
            >
              <span>Открыть в Яндекс Картах</span>
            </Link>
            <Link
              href="tel:000000000"
              className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full mb-10 flex items-center justify-center shadow-lg shadow-black/30 text-white mx-auto uppercase font-normal"
            >
              <span>Открыть в Google Maps</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
