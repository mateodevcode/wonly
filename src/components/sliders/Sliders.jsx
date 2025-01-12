import { SlidersData } from "@/data/SlidersData";
import SlidersCard from "./SlidersCard";

const Sliders = () => {
  const data1 = SlidersData[0];
  const data2 = SlidersData[1];
  const data3 = SlidersData[2];
  const data4 = SlidersData[3];

  return (
    <div className="pb-20">
      <SlidersCard contenido={data1} />
      <SlidersCard contenido={data2} />
      <SlidersCard contenido={data3} />
      <SlidersCard contenido={data4} />
    </div>
  );
};

export default Sliders;
