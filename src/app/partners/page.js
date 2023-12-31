import Link from "next/link";
import Image from "next/image";

async function getPartners() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_PATH}/partner?populate=*`,
    {
      next: { revalidate: 60 },
    }
  );
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_PATH}/contact`,
  //   { cache: "no-store" }
  // );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Partners() {
  const partnerResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_PATH}/partner?populate=*`
  );
  const responseData = await partnerResponse.json();

  const {
    designersTitle,
    designersSubtitle,
    designersContent,
    dealersTitle,
    dealersSubtitle,
    dealersContent,
    optTitle,
    optSubtitle,
    optContent,
    designersImage,
    dealersImage,
    optImage,
  } = responseData.data.attributes;

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-5 max-lg:px-4">
        <div className="lg:col-span-3 lg:pl-36 max-lg:order-2">
          <h2 className="uppercase text-2xl lg:text-3xl lg:text-[50px] font-extralight mb-2 mt-5 lg:mt-8">
            {designersTitle}
          </h2>
          <div className="text-lg lg:text-2xl uppercase mb-5 lg:mb-10">
            {designersSubtitle}
          </div>

          <div>
            {designersContent.map((paragraph, index) => (
              <p key={index} className="mb-5 lg:mb-10 max-w-4xl break-words">
                {paragraph.children.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </p>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <Image
            src={"/partn1.png"}
            width={740}
            height={550}
            alt=""
            className="ml-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 mt-5 lg:mt-20 max-lg:px-4">
        <div className="lg:col-span-2">
          <Image
            src={"/partn2.png"}
            width={740}
            height={550}
            alt=""
            className="mr-auto"
          />
        </div>
        <div className="lg:col-span-3 lg:pl-36 lg:pr-36">
          <h2 className="uppercase text-2xl lg:text-3xl lg:text-[50px] font-extralight mb-2 mt-5 lg:mt-8">
            {dealersTitle}
          </h2>
          <div className="text-lg lg:text-2xl uppercase mb-5 lg:mb-10">
            {dealersSubtitle}
          </div>

          <div>
            {dealersContent.map((paragraph, index) => (
              <p key={index} className="mb-5 lg:mb-10 max-w-4xl break-words">
                {paragraph.children.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 max-lg:px-4 mt-10 lg:mt-20">
        <div className="lg:col-span-3 lg:pl-36 max-lg:order-2">
          <h2 className="uppercase text-2xl lg:text-3xl lg:text-[50px] font-extralight mb-2 mt-5 lg:mt-8">
            {optTitle}
          </h2>
          <div className="text-lg lg:text-2xl uppercase mb-5 lg:mb-10">
            {optSubtitle}
          </div>

          <div>
            {optContent.map((paragraph, index) => (
              <p key={index} className="mb-5 lg:mb-10 max-w-4xl break-words">
                {paragraph.children.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </p>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <Image
            src={"/partn3.png"}
            width={740}
            height={550}
            alt=""
            className="ml-auto"
          />
        </div>
      </div>
    </main>
  );
}
