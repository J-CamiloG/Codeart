import Htmlicon from "../components/Htmlicon";

export default function sectionhtml(params) {
    return (
        <>
            <main className="min-h-screen flex flex-col items-center justify-start p-44 gap-20">
                <section className="flex gap-5 justify-center items-center text-center w-full">
                    <Htmlicon width="4em" height="5em" />
                    <h2 className="text-5xl font-bold text-orange-600">HTML5</h2>
                </section>
                <article>
                    <h2 className="text-white text-xl font-bold">Introducion</h2>
                </article>
                {/* <section>
                    <article className="flex justify-center items-start flex-col gap-2 w-10/12 ">
                        <h3 className="font-bold text-xl text-orange-600">Que es Html ?</h3>
                        <p>
                            <span>HTML</span> es el lenguaje utilizado para crear páginas web. Es como el
                            esqueleto de una página, define la estructura básica y organiza el
                            contenido. Se usan etiquetas para marcar diferentes partes del
                            contenido, como encabezados, párrafos, imágenes, etc. Es el primer
                            paso para aprender a crear páginas web.
                        </p>

                        <img src="" alt="" />
                    </article>
                </section> */}
            </main>
        </>
    );
}
