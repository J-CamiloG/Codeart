import HtmlIcon from "./components/Htmlicon"
import Cssicon from "./components/Cssicon"
import Jsicon from "./components/Jsicon"
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-44 gap-20">

      <section className="flex-col justify-center items-center text-center w-full">
        <h2 className="text-6xl font-bold"><span className="text-amber-500">C</span>ode<span className="text-amber-500">A</span>rt</h2>
        <p className="text-gray-300">Aprende a programar con nuestros cursos 100% gratiutos</p>
      </section>
      
      <section className="flex justify-around items-center  w-full">
        <div className="flex flex-col justify-between  items-center w-auto">
          <HtmlIcon width="4em" height="5em"></HtmlIcon>
          <Link href="/cursehtml" className="text-gray-400 font-bol hover:text-amber-500">Html</Link>
        </div>
        
        <div className="flex flex-col justify-between  items-center w-auto">
          <Cssicon width="4em" height="5em"></Cssicon>
          <Link href="/cursecss" className="text-gray-400 font-bol hover:text-amber-500">css</Link>
        </div>

        <div className="flex flex-col justify-between  items-center w-auto">
          <Jsicon width="4em" height="5em"></Jsicon>
          <Link href="/cursejs" className="text-gray-400 font-bol hover:text-amber-500">JavaScrpit</Link>
        </div>
      </section>

      <section className="flez justify-between"></section>
    </main>
  );
}
