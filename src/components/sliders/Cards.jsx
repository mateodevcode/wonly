import SlideCard from "../videos/SlideCard";

const Videos = ({titulo, cards, Url}) => {
  return (
    <>
      <h1 className="text-white lg:text-5xl md:text-5xl sm:text-3xl font-bold mt-0 lg:px-20 md:px-20 sm:px-5 lg:mb-10 sm:mb-5 text-left w-full">
        {titulo}
      </h1>
      <div className="w-9/12 xl:flex flex-col justify-center items-center p-1 lg:flex md:hidden sm:hidden">
        <SlideCard cards={cards} Url={Url} size={5} />
      </div>
      <div className="w-9/12 sm:flex xl:hidden flex-col justify-center items-center p-1 lg:hidden md:flex">
        <SlideCard cards={cards} Url={Url} size={2} />
      </div>
    </>
  );
};

export default Videos;
