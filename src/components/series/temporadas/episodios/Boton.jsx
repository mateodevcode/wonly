import Link from "next/link";
import { useRouter } from "next/navigation";


const Boton = ({ nombre, episodio, Url }) => {
  const router = useRouter();
  
  return (
    <div id={episodio}
      onClick={(e) => {
        e.preventDefault();
        router.push(Url)
        
      }}
    className="bg-blue-600 hover:bg-blue-600/80 font-semibold px-4 py-2 lg:mt-4 md:mt-4 sm:mt-0 rounded-md cursor-pointer select-none lg:text-base md:text-base sm:text-[8px]">
      {nombre}
    </div>
  );
};

export default Boton;
