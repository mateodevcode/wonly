import Navbar from "@/components/navbar/Navbar";
import CarruselCards from "@/components/sliders/CarruselCards";
import Footer from "@/components/footer/Footer";
import Principal2 from "@/components/homepage/Principal2";

export default function Home() {
  return (
    <main className="w-full flex-col justify-center items-center bg-black">
      <Navbar />
      <Principal2 />
      <CarruselCards /> 
      <Footer />
    </main>
  );
}
