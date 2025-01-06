import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Principal from "@/components/homepage/Principal";
import Sliders from "@/components/sliders/Sliders";

export default function Home() {
  return (
    <main className="w-full flex-col justify-center items-center dark:bg-black">
      <Navbar />
      <Principal />
      <Sliders />
      <Footer />
    </main>
  );
}
