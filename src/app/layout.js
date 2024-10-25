import AgregarPeliculas from "@/components/agregarPeliculas/AgregarPeliculas";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { MoviesProvider } from "@/context/MoviesContext";
import { AuthProvider } from "./Providers";

export const metadata = {
  title: "Wonly - Peliculas y Series",
  description: "Peliculas y series gratis en un solo lugar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="dark">
      <AuthProvider>
        <MoviesProvider>
          <AgregarPeliculas />
          <ChakraProvider>
            {children}
            <Analytics />
          </ChakraProvider>
        </MoviesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
