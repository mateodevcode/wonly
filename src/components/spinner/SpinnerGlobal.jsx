import { Spinner } from "@chakra-ui/react";
import Logo from "../navbar/logo/Logo";

const SpinnerGlobal = () => {
  return (
    <div className="my-40 flex flex-col justify-center items-center">
      <Spinner
        thickness="2px"
        speed="0.5s"
        emptyColor="gray.100"
        color="blue.900"
        size="lg"
      />
      <div>
        <h3 className="text-center text-white font-mono text-base my-3">
          Cargando...
        </h3>
        <Logo />
      </div>
    </div>
  );
};

export default SpinnerGlobal;
