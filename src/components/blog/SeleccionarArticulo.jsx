"use client";
import VerHarryPotter from "./articulos/VerHarryPotter";
import VerIronMan from "./articulos/VerIronMan";
import VerJohnWick from "./articulos/VerJohnWick";
import { useParams } from "next/navigation";

const SeleccionarArticulo = () => {
  const params = useParams();

  switch (params.id) {
    case "ver-harry-potter":
      return <VerHarryPotter />;
    case "ver-john-wick":
      return <VerJohnWick />;
    case "ver-iron-man":
      return <VerIronMan />;

    default:
      return <p>Artículo no encontrado</p>;
  }
};

export default SeleccionarArticulo;
