import Header from "@/components/blog/Header";
import HeaderTop from "@/components/blog/HeaderTop";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Noticias - Wonly Peliculas y Series",
  description: "Noticias de peliculas y series en Wonly",
};

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100 w-full">
      <Header />
      <div className="flex flex-row justify-center items-center w-full">
        {children}
      </div>
      <Footer />
    </div>
  );
}
