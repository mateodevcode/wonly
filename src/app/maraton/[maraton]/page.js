import Footer from "@/components/footer/Footer";
import SwitchMaraton from "@/components/maraton/SwitchMaraton";
import Navbar from "@/components/navbar/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <SwitchMaraton />
      <Footer />
    </div>
  );
};

export default page;
