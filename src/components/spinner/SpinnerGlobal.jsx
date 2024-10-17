import { Spinner } from "@chakra-ui/react";
import Logo from "../navbar/Logo";

const SpinnerGlobal = () => {
  return (
    <div className="my-40 flex flex-col justify-center items-center">
      <Spinner
        thickness="4px"
        speed="1.65s"
        emptyColor="gray.100"
        color="green.500"
        size="xl"
        className=""
      />
      <div>
        <h3 className="text-center text-white font-mono text-xl my-5">
          Cargando...
        </h3>
        <Logo />
      </div>
    </div>
  );
};

export default SpinnerGlobal;
