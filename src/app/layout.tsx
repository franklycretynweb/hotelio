import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hotelio. — Strony internetowe Hoteli, Pensjonatów, Apartamentów",
  description:
    "Projektujemy i budujemy strony hotelowe, które sprzedają. Mniej OTA, więcej rezerwacji bezpośrednich.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-fg font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
