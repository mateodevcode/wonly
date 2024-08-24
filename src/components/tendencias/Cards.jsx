import SlideCard from "../videos/SlideCard";

const Videos = ({titulo, cards, Url}) => {
  return (
    <>
      <h1 className="text-white lg:text-6xl md:text-6xl sm:text-4xl font-bold mt-0 lg:px-20 md:px-20 sm:px-5 mb-10 text-left w-full">
        {titulo}
      </h1>
      <div className="w-9/12 flex flex-col justify-center items-center p-1">
        <SlideCard cards={cards} Url={Url} />
      </div>
    </>
  );
};

export default Videos;
