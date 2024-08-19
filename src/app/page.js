import Navbar from "@/components/navbar/Navbar"
import Principal from "@/components/homepage/Principal";
import Videos from "@/components/tendencias/Videos";

export default function Home() {
  return (
    <main className="w-full flex-col justify-center items-center fondo_1 bg-black">
      <Navbar />
      <Principal />
      {/* <Videos /> */}
    </main>
  );
}
