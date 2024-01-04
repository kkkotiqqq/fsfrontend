import { Inter } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import Image from "next/image";

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FSLIGHT",
  description: "",
};

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

export default async function RootLayout({ children }) {
  const contactsResponse = await getContacts();
  const { phone, phone_code, email, telegram, whatsapp, pinterest } =
    contactsResponse.acf;

  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader phone={phone} phoneCode={phone_code} />

        <div className="pt-20 xl:pt-40">{children}</div>

        <SiteFooter
          phone={phone}
          phoneCode={phone_code}
          email={email}
          telegram={telegram}
          whatsapp={whatsapp}
          pinterest={pinterest}
        />
      </body>
    </html>
  );
}
