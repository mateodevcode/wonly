import { Spinner } from "@chakra-ui/react";

const SpinnerGlobal = () => {
  return (
    <Spinner
      thickness="4px"
      speed="1.65s"
      emptyColor="gray.100"
      color="green.500"
      size="xl"
      className="my-40"
    />
  );
};

export default SpinnerGlobal;
