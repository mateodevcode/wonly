import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

const PathToBlog = ({ Url1, Url2, Url3 }) => {
  return (
    <Breadcrumb
      spacing="8px"
      separator={<IoIosArrowForward className="text-xs" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink
          href="#"
          className="lg:text-base md:text-base sm:text-xs"
        >
          {Url1}
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink
          href="#"
          className="lg:text-base md:text-base sm:text-xs"
        >
          {Url2}
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink
          href="#"
          className="lg:text-base md:text-base sm:text-xs"
        >
          {Url3}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default PathToBlog;
