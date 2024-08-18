// import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wonly - Peliculas y series en un solo lugar",
  description: "Peliculas y series gratis en un solo lugar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="dark">
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
