import SlideCard from "../videos/SlideCard";

const Videos = () => {
  return (
    <div className="pb-20">
    <h1 className="text-white text-5xl font-semibold mt-10 mx-28">Tendencias</h1>
    <div className="flex flex-row justify-center items-center w-full mb-20 mt-10">
      <SlideCard />
    </div>
    </div>
  );
};

export default Videos;
