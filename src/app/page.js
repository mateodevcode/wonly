import Navbar from "@/components/navbar/Navbar";
import Principal from "@/components/homepage/Principal";
import CarruselCards from "@/components/tendencias/CarruselCards";

export default function Home() {
  return (
    <main className="w-full flex-col justify-center items-center  bg-black">
      <Navbar />
      <Principal />
      <CarruselCards />
    </main>
  );
}
