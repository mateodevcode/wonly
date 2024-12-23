import NavbarRight from "./NavbarRight";
import NavbarLeft from "./NavbarLeft";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full fixed bg-zinc-900 z-40 h-16">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
