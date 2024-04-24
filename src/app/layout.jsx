import { Inter } from "next/font/google";
import Link from "next/link"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codeart",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <header className="flex justify-start gap-16 flex-col items-center p-5 absolute top-0 left-0 h-full z-10">
          <img className="w-10" src="/public/logo.png" alt="" />
          <nav className="flex">
            <ul className="flex flex-col gap-6 justify-center items-start font-bold">
              <li><Link href="#" className="text-white font-normal text-sm" >Home</Link></li>
              <li><Link href="#" className="text-white font-normal text-sm" >Compartir</Link></li>
              <li><Link href="#" className="text-white font-normal text-sm" >Cerrar Secion</Link></li>
            </ul>
          </nav>
        </header>
        
        {children}

        <footer className="absolute bottom-0 left-0 flex justify-center items-center p-2 w-full">
          <h1>este es el footer</h1>
        </footer>
      </body>
    </html>
  );
}
