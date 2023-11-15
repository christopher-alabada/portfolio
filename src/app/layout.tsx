import { lato, openSans } from "@/utils/fonts";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Christopher Alabada - Software Engineer",
  description: "Christopher Alabada Portfolio",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${openSans.variable}`}>
      <body className="text-xl font-[195] bg-mainBg">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
