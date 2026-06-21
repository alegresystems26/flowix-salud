import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flowix Salud — Gestión para centros de salud y bienestar",
  description: "Sistema de gestión para kinesiólogos y quiroprácticos. Historia clínica digital, planes de tratamiento, agenda y caja en un solo lugar.",
  keywords: ["sistema gestion kinesiologia", "software quiropraxia", "historia clinica digital", "gestion centro salud", "flowix salud"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, background: "#050508", fontFamily: "'Outfit', system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
