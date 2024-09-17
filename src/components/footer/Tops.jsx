import { tops } from "@/data/tops";

const Tops = () => {
  return (
    <div className="lg:w-8/12 sm:w-full grid grid-cols-3 gap-4">
      {tops.map((top, i) => (
        <div
          key={i}
          className="sm:h-44 flex flex-col justify-between items-center"
        >
          <h3 className="lg:text-3xl sm:text-base mb-2 font-bold">
            {top.titulo}
          </h3>
          <div>
            {top.items.map((item, index) => (
              <p
                key={index}
                className="py-1 hover:text-green-600 lg:text-xl sm:text-sm cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tops;
