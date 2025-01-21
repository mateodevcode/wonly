import { SlidersData } from "@/data/SlidersData";
import SlidersCard from "./SlidersCard";

const Sliders = () => {
  return (
    <div className="pb-20">
      {SlidersData.map((data, index) => (
        <SlidersCard key={index} contenido={data} index={index} />
      ))}
    </div>
  );
};

export default Sliders;
