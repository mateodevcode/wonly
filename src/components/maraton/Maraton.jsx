import { maraton } from "@/data/enlaces.maraton";
import { FaFilm } from "react-icons/fa";


function MarathonCard({ name, link, description }) {
  return (
    <div className="p-4 border-[1px] border-gray-300 rounded-md flex flex-col justify-between h-44">
      <div>
        <div className="flex flex-row justify-start items-center">
          <FaFilm className="text-4xl text-black mr-4" />
          <h2 className="text-xl font-bold mb-2">{name}</h2>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <a
        href={link}
        className="inline-block bg-black text-white rounded px-4 py-2 hover:bg-black/80 transition-colors w-full text-center"
      >
        Ver Maratón
      </a>
    </div>
  );
}

export default function MovieMarathonList() {
  return (
    <div className="mx-auto py-10 px-4 lg:w-11/12 md:w-11/12 sm:w-[98%]">
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold mb-6 text-center">
        Maratones de Películas y Series
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-[1px] border-gray-300 p-4 rounded-md">
        {maraton.map((item, index) => (
          <MarathonCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
