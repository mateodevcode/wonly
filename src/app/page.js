import Navbar from "@/components/navbar/Navbar";
import Principal from "@/components/homepage/Principal";
import CarruselCards from "@/components/sliders/CarruselCards";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="w-full flex-col justify-center items-center bg-black">
      <Navbar />
      <Principal />
      <CarruselCards />
      <Footer />
    </main>
  );
}
