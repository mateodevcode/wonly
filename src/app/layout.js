import AgregarPeliculas from "@/components/agregarPeliculas/AgregarPeliculas";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MoviesProvider } from "@/context/MoviesContext";
import { AuthProvider } from "./Providers";
import Head from "next/head";

export const metadata = {
  title: "Wonly",
  description: "Disfruta de películas y series gratis en un solo lugar. Amplia variedad de contenido para todos los gustos.",
  keywords: "peliculas, series, gratis, online, estrenos, 2024, 2025, marvel, wonly",
  author: "Wonly developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="dark">
        <AuthProvider>
          <MoviesProvider>
            <AgregarPeliculas />
            <ChakraProvider>
              {children}
              <Analytics />
              <SpeedInsights />
            </ChakraProvider>
          </MoviesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
