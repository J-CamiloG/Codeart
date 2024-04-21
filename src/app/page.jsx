import HtmlIcon from "./components/Htmlicon"
import Cssicon from "./components/Cssicon"
import Jsicon from "./components/Jsicon"
import Link from "next/link";
import Buttons from "./components/buttons"
import Githubicon from "./components/Githubicon"
import Gmailicon from "./components/Gmailicon"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-44 gap-20">

      <section className="flex-col flex justify-center gap-5 w-full">
        <h2 className="text-6xl font-bold"><span className="text-purple-500">C</span>ode<span className="text-purple-500">A</span>rt</h2>
        <p className="text-gray">Curso para aprender paso a paso programacion. 100% gratis y práctico. Desde cero.</p>
        <div className="flex justify-start items-center gap-4">
          <Buttons img={<Githubicon width="2em" height="2em" />} text="Ingresar con GitHub" />
          <Buttons img={<Gmailicon width="2em" height="2em" />} text="Ingresar con Gmail" />
        </div>
      </section>
      
      <section className="flex flex-col justify-center items-start  w-full gap-6">
        <h2 className="text-2xl font-bold">Nuestros Cursos</h2>
        <article className="flex gap-20  w-full">
          <div className="flex flex-col justify-between  items-center w-auto">
            <HtmlIcon width="4em" height="5em"></HtmlIcon>
            <Link href="/cursehtml" className=" font-extrabold text-black hover:text-purple-400">HTML5</Link>
          </div>
          
          <div className="flex flex-col justify-between  items-center w-auto">
            <Cssicon width="4em" height="5em"></Cssicon>
            <Link href="/cursecss" className=" font-extrabold  text-black hover:text-purple-400">CSS</Link>
          </div>

          <div className="flex flex-col justify-between  items-center w-auto">
            <Jsicon width="4em" height="5em"></Jsicon>
            <Link href="/cursejs" className=" font-extrabold  text-black hover:text-purple-400">JavaScrpit</Link>
          </div>
        </article>
      </section>

    </main>
  );
}




