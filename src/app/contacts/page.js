import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

async function getContacts() {
  const res = await fetch(
    `https://fsladmin.paxcore.ru/wp-json/wp/v2/pages/61`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Contacts() {
  const contactsResponse = await getContacts();
  const {
    phone,
    phone_code,
    email,
    telegram,
    whatsapp,
    pinterest,
    address,
    yandex_map,
    google_map,
    map_image,
  } = contactsResponse.acf;

  return (
    <main className="flex min-h-screen flex-col justify-between overflow-hidden -mb-20">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-8">
          <div className="xl:pr-32">
            <h2 className="uppercase text-2xl lg:text-[50px] font-extralight mb-1 mt-1 xl:mb-4 xl:mt-8">
              Наши контакты
            </h2>

            <div className="text-lg lg:text-2xl uppercase mb-4 lg:mb-10">
              Купите свет прямо сейчас
            </div>
            <Link
              href={`tel:${phone_code}`}
              className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full mb-4 lg:mb-10 flex items-center justify-center shadow-lg shadow-black/30 text-white transition-all hover:shadow-xl hover:scale-[1.02] hover:shadow-yellow-500 mx-auto uppercase font-normal gap-1"
            >
              <span className="max-lg:hidden">Позвонить: </span>
              <span>{phone}</span>
            </Link>
            <Link
              href="mailto:sales@fslight.net"
              className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full mb-4 lg:mb-10 flex items-center justify-center shadow-lg shadow-black/30 transition-all hover:shadow-xl hover:scale-[1.02] hover:shadow-yellow-500 text-white mx-auto font-normal gap-1 uppercase"
            >
              <span className="max-lg:hidden">Написать email: </span>
              <span>{email}</span>
            </Link>
            <div className="flex max-md:flex-col gap-5">
              <Link
                href={telegram}
                target="_blank"
                className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full flex items-center justify-center shadow-md shadow-black/30 text-white mx-auto font-normal relative transition-all hover:shadow-xl hover:scale-[1.02] hover:shadow-yellow-500"
              >
                <span>Telegram</span>
              </Link>
              <Link
                href={whatsapp}
                target="_blank"
                className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full flex items-center justify-center shadow-md shadow-black/30 transition-all hover:shadow-xl hover:scale-[1.02] hover:shadow-yellow-500 text-white mx-auto font-normal relative"
              >
                <span>Whatsapp</span>
              </Link>
              <Link
                href={pinterest}
                target="_blank"
                className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full flex items-center justify-center shadow-md shadow-black/30 transition-all hover:shadow-xl hover:scale-[1.02] hover:shadow-yellow-500 text-white mx-auto font-normal relative"
              >
                <span>Pinterest</span>
              </Link>
            </div>
            <div className="lg:text-2xl lg:leading-[50px] mt-5 lg:mt-10">
              Адрес: {address}
            </div>
          </div>
          <div className="bg-[#323232] py-4 px-4 lg:py-10 lg:px-14 max-lg:rounded-xl lg:rounded-l-xl relative after:bg-[#323232] after:top-0 after:-right-[170px] after:h-full after:absolute after:w-[170px] max-lg:after:hidden">
            <div className="font-extralight mb-4 lg:mb-7 text-2xl lg:text-4xl 2xl:text-[50px] text-white [text-shadow:_0_1px_10px_rgb(255_255_255_/_80%)]">
              ОБСУДИТЬ ВАШ ПРОЕКТ
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: "url('map.png')" }}
        className="pt-5 lg:pt-10 h-[400px] lg:h-screen bg-cover max-h-[860px] mt-[70px] bg-center"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 max-w-4xl mx-auto">
            <Link
              href={yandex_map}
              target="_blank"
              className="bg-[#202526] border text-center max-md:text-sm border-[#FFFBC6] rounded-[10px] h-[50px] w-full mb-3 flex items-center justify-center shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] hover:shadow-yellow-500 shadow-black/30 text-white mx-auto uppercase font-normal"
            >
              <span>Открыть в Яндекс Картах</span>
            </Link>
            <Link
              href={google_map}
              target="_blank"
              className="bg-[#202526] border text-center max-md:text-sm border-[#FFFBC6] rounded-[10px] h-[50px] w-full mb-10 flex items-center justify-center shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] hover:shadow-yellow-500 shadow-black/30 text-white mx-auto uppercase font-normal"
            >
              <span>Открыть в Google Maps</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
