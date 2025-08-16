import { Playfair_Display, Karla, Nunito_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BtnToTop from "@/components/BtnToTop";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '900'], 
  variable: '--font-playfairDisplay',
})

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-karla',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-nunitoSans',
})

export const metadata = {
  title: "ElShamadan",
  description: "Egyptian local brand for wafer and biscuits",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${karla.variable} ${nunitoSans.variable} antialiased`}>
        <Navbar />
        <ScrollToTop />
        {children}
        <BtnToTop />
        <Footer />
      </body>
    </html>
  );
}
