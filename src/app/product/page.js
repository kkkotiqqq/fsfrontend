import Link from "next/link";
import Image from "next/image";
import ThumbSlider from "../components/ThumbSlider";

export default function Product() {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <div className="max-w-[780px] mx-auto">
              <ThumbSlider />
            </div>
            <div className="text-[15px] mt-9 max-lg:hidden">
              В светильнике используется специально разработанная система
              теплоотвода обеспечивающая длительный срок службы светодиодов.
              Прямоугольные деревянные светильники серии «FSLWOOD» созданы
              изкачественных натуральных материалов и обладают оригинальным
              дизайном. Светильники прекрасно подойдут для организации основного
              освещения в современных интерьерах. Светильники могут быть
              выполнены из различных древесных материалов. Размеры, форма и
              дополнительные опции обсуждаются индивидуально.
            </div>
          </div>
          <div className="2xl:pl-40">
            <div className="text-2xl lg:text-[40px] lg:mb-3">
              Flex Line серии Quattro-W
            </div>
            <div className="text-lg lg:text-2xl">От 27 500 ₽</div>

            <div className="text-[15px] mt-3 lg:hidden">
              В светильнике используется специально разработанная система
              теплоотвода обеспечивающая длительный срок службы светодиодов.
              Прямоугольные деревянные светильники серии «FSLWOOD» созданы
              изкачественных натуральных материалов и обладают оригинальным
              дизайном. Светильники прекрасно подойдут для организации основного
              освещения в современных интерьерах. Светильники могут быть
              выполнены из различных древесных материалов. Размеры, форма и
              дополнительные опции обсуждаются индивидуально.
            </div>

            <div className="mt-8 lg:text-xl grid gap-3">
              <div className="flex gap-x-10 max-lg:flex-col">
                <span className="min-w-[200px] font-medium">Материал </span>
                <span>Латунь/сталь, стекло</span>
              </div>
              <div className="flex gap-x-10 max-lg:flex-col">
                <span className="min-w-[200px] font-medium">
                  Цветопередача{" "}
                </span>
                <span>
                  CRI {">"} 80 или CRI {">"} 90.
                </span>
              </div>
              <div className="flex gap-x-10 max-lg:flex-col">
                <span className="min-w-[200px] font-medium">
                  Температура цвета{" "}
                </span>
                <span>3000К, 4000К, 5000К</span>
              </div>
              <div className="flex gap-x-10 max-lg:flex-col">
                <span className="min-w-[200px] font-medium">Питание </span>
                <span>Выносной блок питания</span>
              </div>
            </div>

            <div className="mt-7 lg:mt-14 pt-3 lg:pt-7 border-t border-dashed border-[#C0C0C0]">
              <div className="lg:text-xl font-medium mb-4">
                Возможные дополнительные опции
              </div>

              <div className="lg:text-lg">
                RGB излучение. Использование биодинамического освещения.
                Управление интенсивностью света с помощью протоколов 0/1-10V
                ШИМ, DALI.
              </div>
            </div>

            <Link
              href="#"
              className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full mb-4 lg:mb-7 flex items-center justify-center shadow-lg shadow-black/30 text-white mx-auto font-normal gap-1 uppercase mt-7 lg:mt-14"
            >
              <span>Заказать</span>
            </Link>

            <Link
              href="#"
              className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full mb-4 lg:mb-10 flex items-center justify-center shadow-lg shadow-black/30 text-white mx-auto font-normal gap-1 uppercase text-center max-lg:text-sm"
            >
              <span>
                Есть вопросы? <br className="lg:hidden" /> Отправьте сообщение в
                1 клик
              </span>
            </Link>

            <div>
              Размер: 550 мм х 550 мм, высота 55 мм. <br />
              Потребляемая мощность: 28Вт — 56 Вт. <br />
              Световой поток: 4000 лм — 5500 лм.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
