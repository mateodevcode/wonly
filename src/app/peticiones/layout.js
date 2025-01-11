import NewFooter from "@/components/footer/NewFooter";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title: "Peticiones - Wonly",
  description: "Peliculas y series en un solo lugar",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <NewFooter />
    </>
  );
}
