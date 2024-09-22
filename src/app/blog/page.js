import Articulo from "@/components/blog/Articulo";
import HeaderTop from "@/components/blog/HeaderTop";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center">
    <HeaderTop />
      <Articulo />
    </div>
  );
};

export default page;
