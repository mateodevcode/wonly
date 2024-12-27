import SlideCard from "../videos/SlideCard";

const Videos = ({titulo, cards, Url}) => {
  return (
    <>
      <h1 className="text-white xl:text-5xl lg:text-4xl md:text-4xl sm:text-xl font-bold lg:px-20 md:px-20 sm:px-5 lg:mb-10 sm:mb-5 text-left w-full">
        {titulo}
      </h1>
      <div className="w-11/12 xl:flex flex-col justify-center items-center p-1 md:hidden sm:hidden lg:hidden smd:hidden">
        <SlideCard cards={cards} Url={Url} size={4} />
      </div>
      <div className="w-10/12 smd:hidden sm:hidden xl:hidden md:hidden flex-col justify-center items-center p-1 lg:flex">
        <SlideCard cards={cards} Url={Url} size={3} />
      </div>
      <div className="w-10/12 smd:flex sm:hidden xl:hidden flex-col justify-center items-center p-1 lg:hidden md:flex">
        <SlideCard cards={cards} Url={Url} size={3} />
      </div>
      <div className="w-10/12 smd:hidden sm:flex xl:hidden flex-col justify-center items-center p-1 lg:hidden md:flex">
        <SlideCard cards={cards} Url={Url} size={2} />
      </div>
    </>
  );
};

export default Videos;
