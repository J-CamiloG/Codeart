import HtmlIcon from "./components/Htmlicon"
import Cssicon from "./components/Cssicon"
import Jsicon from "./components/Jsicon"
import Link from "next/link";
import Buttons from "./components/buttons"
import Githubicon from "./components/Githubicon"
import Gmailicon from "./components/Gmailicon"
import Bootstrapicon from "./components/Bootstrapicon"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-44 gap-40">
      <section className="flex-col flex justify-center gap-5 w-full">
        <h2 className="text-6xl font-bold text-white"><span className="text-purple-500">C</span>ode<span className="text-purple-500">A</span>rt</h2>
        <p className="text-white">Curso para aprender paso a paso programacion. 100% gratis y práctico. Desde cero.</p>
        <div className="flex justify-start items-center gap-4">
          <Buttons img={<Githubicon width="2em" height="2em" />} text="Ingresar con GitHub" />
          <Buttons img={<Gmailicon width="2em" height="2em" />} text="Ingresar con Gmail" />
        </div>
      </section>
      
      <section className="flex-col justify-center items-start  w-full gap-10">
        <article className="flex  gap-20  w-full flex-row">
          <Link href="/cursehtml" className="p-5 w-60 justify-center flex flex-col rounded-xl items-center bg-white border border-gray-200  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <HtmlIcon className="" width="3em" height="4em"></HtmlIcon>
              <div className="border-b-2 border-purple-500 flex flex-col items-center justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Html</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">HyperText Markup Language</p>
              </div>
          </Link>

          <Link href="/cursecss" className="p-5 w-60 justify-center flex flex-col rounded-xl items-center bg-white border border-gray-200  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Cssicon className=" " width="3em" height="4em"></Cssicon>
              <div className="border-b-2 border-purple-500 flex flex-col items-center justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Css</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Cascading Style Sheets</p>
              </div>
          </Link>

          <Link href="/cursejs" className="p-5 w-60 justify-center flex flex-col rounded-xl items-center bg-white border border-gray-200  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Jsicon className="" width="3em" height="4em"></Jsicon>
              <div className="border-b-2 border-purple-500 flex flex-col items-center justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">JavaScript</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">high-level programming language</p>
              </div>
          </Link>

          <Link href="/cursebootstrap" className="p-5 w-60 justify-center flex flex-col rounded-xl items-center bg-white border border-gray-200  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Bootstrapicon className="" width="3em" height="4em"></Bootstrapicon>
              <div className="border-b-2 border-purple-500 flex flex-col items-center justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bootstrap</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">high-level programming language</p>
              </div>
          </Link>
        </article>
      </section>

    </main>
  );
}




