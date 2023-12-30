import Image from "next/image";
import Link from "next/link";

export default function SiteFooter({
  phone,
  phoneCode,
  email,
  telegram,
  whatsapp,
  pinterest,
}) {
  return (
    <>
      <div className="bg-[#323232] text-white pt-11 pb-11 mt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[200px]">
            <div className="flex max-md:flex-col gap-5">
              <Link
                href={`tel:${phoneCode}`}
                className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full max-w-[760px] flex items-center justify-center shadow-lg shadow-yellow-500 text-white mx-auto uppercase font-normal"
              >
                <span>{phone}</span>
              </Link>
              <Link
                href="mailto:sales@fslight.net"
                className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full max-w-[760px] flex items-center justify-center shadow-lg shadow-yellow-500 text-white mx-auto font-normal"
              >
                <span>{email}</span>
              </Link>
            </div>
            <div className="flex max-md:flex-col gap-5">
              <Link
                href={telegram}
                className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full flex items-center justify-center shadow-lg shadow-yellow-500 text-white mx-auto font-normal relative pl-6"
              >
                <Image
                  src={"/icons/telegram-y.svg"}
                  width={25}
                  height={20}
                  alt=""
                  className="absolute top-1/2 -mt-[10px] left-4"
                />

                <span>Telegram</span>
              </Link>
              <Link
                href={whatsapp}
                className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full flex items-center justify-center shadow-lg shadow-yellow-500 text-white mx-auto font-normal relative pl-6"
              >
                <Image
                  src={"/icons/whatsapp-y.svg"}
                  width={25}
                  height={25}
                  className="absolute top-1/2 -mt-[13px] left-4"
                  alt=""
                />
                <span>Whatsapp</span>
              </Link>
              <Link
                href={pinterest}
                className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full flex items-center justify-center shadow-lg shadow-yellow-500 text-white mx-auto font-normal relative pl-6"
              >
                <Image
                  src={"/icons/pinterest-y.svg"}
                  width={25}
                  height={25}
                  alt=""
                  className="absolute top-1/2 -mt-[13px] left-4"
                />
                <span>Pinterest</span>
              </Link>
            </div>
          </div>
          <div className="flex max-xl:flex-col justify-between gap-5 mt-10">
            <Link href="/" className="text-[#FFFBC6]">
              Политика Конфиденциальности
            </Link>
            <Link href="https://paxcore.com.au">
              Сайт создан в <span className="text-[#FFFBC6]">Paxcore</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
