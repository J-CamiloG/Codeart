import Buttons from "../components/Buttons";
import Buttondisponible from "../components/Buttondisponible";
import Secionescontenido from "../components/Secionescontenido"
import Htmlicon from "../components/Htmlicon";

export default function sectionhtml(params) {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start p-44 gap-20 ">
            <article className="flex gap-5 justify-center items-center text-center w-full ">
                <Htmlicon width="4em" height="5em" />
                <h2 className="text-5xl font-bold text-orange-600">HTML5</h2>
            </article>
            <Secionescontenido
                title='Introducion'
                description='el mejor curso de la historia' 
                stateDisponible= {<Buttondisponible text='Disponible'/>} 
                conocerMas= {<Buttons text='conocer mas'/>}
            />

            <Secionescontenido
                title='Primeros pasos'
                description='estos son los primeros pasos de nuestra maqutacion' 
                stateDisponible= {<Buttondisponible text='Disponible'/>} 
                conocerMas= {<Buttons text='conocer mas'/>}
            />
            
            <Secionescontenido
                title='Maquetacion'
                description='proximamente...' 
                stateDisponible= {<Buttondisponible text='No Disponible'/>} 
                conocerMas= {<Buttons text='proximamente'/>}
            />
        </main>
    );
}
