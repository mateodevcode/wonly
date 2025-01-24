import NewFooter from "@/components/footer/NewFooter";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";

export const metadata = {
  title: "Películas - Wonly",
  description:
    "Disfruta de una amplia variedad de películas en Wonly. Encuentra tus películas favoritas y descúbrelas gratis.",
  keywords: "películas, gratis, streaming, Wonly, entretenimiento",
  author: "Wonly Developers",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* Metadatos básicos */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      {children}
      <NewFooter />
    </>
  );
}
