import MenuHamburguer from "../navbar/menuResponsivo/MenuHamburguer";
import Logo from "../navbar/Logo";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="w-full flex flex-row justify-between items-center bg-black text-white h-16">
        <div className="flex flex-row justify-center items-center lg:w-40 md:w-40 sm:w-32 lg:mx-10 md:mx-10 sm:mx-2">
            <Logo />
        </div>
        <div className="flex flex-row lg:justify-center md:justify-end sm:justify-center items-center mx-4 lg:w-40 md:w-40 sm:w-10">
          {/* <Tooltip
            label="Menu"
            fontSize="md"
            color={"white"}
            bg={"rebeccapurple"}
            px={5}
          >
            <FiMenu className="text-2xl cursor-pointer" />
          </Tooltip> */}
          <MenuHamburguer />
        </div>
      </nav>
    </header>
  );
};

export default Header;
