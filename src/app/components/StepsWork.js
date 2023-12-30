import Image from "next/image";
import Link from "next/link";

export default function FullSlider() {
  return (
    <>
      <section className="relative bg-[#323232] text-white pt-10 pb-10 lg:pb-20">
        <div className="container max-w-[1240px]">
          <div className="text-center xl:text-right font-extralight mb-5 xl:mb-8 text-2xl xl:text-[50px] [text-shadow:_0_1px_10px_rgb(255_255_255_/_80%)]">
            ИНДИВИДУАЛЬНЫЙ ЗАКАЗ
          </div>

          <div className="relative flex max-xl:flex-col max-xl:text-center items-center gap-5 max-xl:mb-8">
            <Image
              src={"/arrow.svg"}
              width={993}
              height={3}
              alt=""
              className="absolute top-0 right-0 max-xl:hidden"
            />
            <div className="shrink-0 border border-[#FFFFFF] rounded-xl w-[180px] h-20 xl:h-[230px] flex items-center justify-center">
              <Image
                src={"/question.svg"}
                width={92}
                height={92}
                alt=""
                className="max-xl:w-12"
              />
            </div>
            <div>
              <div className="font-light text-2xl xl:text-3xl uppercase [text-shadow:_0_1px_10px_rgb(255_255_255_/_80%)] mb-2">
                Запрос
              </div>
              <div className="xl:text-xl max-w-3xl xl:leading-10">
                Укажите размеры, материалы и количество изделий. Прикрепите
                эскиз, изображение или ссылки на продукцию, которую вы хотели бы
                заказать.
              </div>
            </div>
          </div>

          <div className="relative flex max-xl:flex-col max-xl:text-center flex-row-reverse items-center gap-5 text-right  max-xl:mb-8">
            <Image
              src={"/arrow-2.svg"}
              width={788}
              height={3}
              alt=""
              className="absolute top-0 right-[210px] rotate-180 max-xl:hidden"
            />
            <div className="shrink-0 border border-[#FFFFFF] rounded-xl w-[180px] h-20 xl:h-[230px] flex items-center justify-center">
              <Image
                src={"/best-price.svg"}
                width={92}
                height={92}
                alt=""
                className="max-xl:w-12"
              />
            </div>
            <div>
              <div className="font-light text-2xl xl:text-3xl uppercase [text-shadow:_0_1px_10px_rgb(255_255_255_/_80%)] mb-2">
                Оценка Стоимости
              </div>
              <div className="xl:text-xl max-w-3xl xl:leading-10">
                Мы вышлем вам полное коммерческое предложение, включая сроки
                выполнения и подробные комментарии к каждому изделию.
              </div>
            </div>
          </div>

          <div className="relative flex max-xl:flex-col max-xl:text-center  items-center gap-5  max-xl:mb-8">
            <Image
              src={"/arrow-2.svg"}
              width={788}
              height={3}
              alt=""
              className="absolute top-0 right-[210px] max-xl:hidden"
            />
            <div className="shrink-0 border border-[#FFFFFF] rounded-xl w-[180px] h-20 xl:h-[230px] flex items-center justify-center">
              <Image
                src={"/proekt.svg"}
                width={92}
                height={92}
                alt=""
                className="max-xl:w-12"
              />
            </div>
            <div>
              <div className="font-light text-2xl xl:text-3xl uppercase [text-shadow:_0_1px_10px_rgb(255_255_255_/_80%)] mb-2">
                Проектирование
              </div>
              <div className="xl:text-xl max-w-3xl xl:leading-10">
                Наш опытный инженер-конструктор предоставит вам полный комплект
                чертежей, необходимых для изготовления ваших заказанных изделий.
              </div>
            </div>
          </div>

          <div className="relative flex max-xl:flex-col max-xl:text-center flex-row-reverse items-center gap-5 text-right max-xl:mb-8">
            <Image
              src={"/arrow-2.svg"}
              width={788}
              height={3}
              alt=""
              className="absolute top-0 right-[210px] rotate-180 max-xl:hidden"
            />
            <div className="shrink-0 border border-[#FFFFFF] rounded-xl w-[180px] h-20 xl:h-[230px] flex items-center justify-center">
              <Image
                src={"/proizv.svg"}
                width={92}
                height={92}
                alt=""
                className="max-xl:w-12"
              />
            </div>
            <div>
              <div className="font-light text-2xl xl:text-3xl uppercase [text-shadow:_0_1px_10px_rgb(255_255_255_/_80%)] mb-2">
                Производство
              </div>
              <div className="xl:text-xl max-w-3xl xl:leading-10">
                После окончательного согласования всех технических деталей
                вашего заказа, он будет передан на производство и воплощен в
                жизнь.
              </div>
            </div>
          </div>

          <div className="relative flex max-xl:flex-col max-xl:text-center  items-center gap-5">
            <Image
              src={"/arrow-2.svg"}
              width={788}
              height={3}
              alt=""
              className="absolute top-0 right-[210px] max-xl:hidden"
            />
            <div className="shrink-0 border border-[#FFFFFF] rounded-xl w-[180px] h-20 xl:h-[230px] flex items-center justify-center">
              <Image
                src={"/delivery.svg"}
                width={92}
                height={92}
                alt=""
                className="max-xl:w-12"
              />
            </div>
            <div>
              <div className="font-light text-2xl xl:text-3xl uppercase [text-shadow:_0_1px_10px_rgb(255_255_255_/_80%)] mb-2">
                Доставка
              </div>
              <div className="xl:text-xl max-w-3xl xl:leading-10">
                Вы можете сами забрать изделия в нашей матерской или мы
                организуем доставку товара через надежную транспортную компанию.
              </div>
            </div>
          </div>

          <Link
            href="/contacts"
            className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[48px] w-full max-w-[760px] flex items-center justify-center shadow-lg shadow-yellow-500 text-white mx-auto mt-6 uppercase text-sm xl:text-xl text-center"
          >
            <span>ОФОРМИТЬ индивидуальный заказ</span>
          </Link>
        </div>

        <div className="absolute h-full p-8 tracking-[8px] [writing-mode:vertical-lr] text-[55px] right-0 top-0 leading-[67px] uppercase opacity-50 text-[#9C9C9C] font-thin [text-shadow:_0_1px_10px_rgb(255_255_255_/_80%)] origin-top-right max-2xl:hidden">
          Свет преображает пространство
        </div>
      </section>
    </>
  );
}
