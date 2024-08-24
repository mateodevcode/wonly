import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title: "Series - Wonly",
  description: "Peliculas y series en un solo lugar",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
