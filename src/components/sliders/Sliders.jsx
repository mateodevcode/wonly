import TrendingSection from "../TrendingSection";
import { SlidersData } from "@/data/SlidersData";

const Sliders = () => {
  const data1 = SlidersData[0];
  const data2 = SlidersData[1];
  const data3 = SlidersData[2];

  return (
    <div className="mb-10">
      <TrendingSection contenido={data1} />
      <TrendingSection contenido={data2} />
      <TrendingSection contenido={data3} />
    </div>
  );
};

export default Sliders;
