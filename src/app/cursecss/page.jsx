import Buttons from "../components/Buttons";
import Buttondisponible from "../components/Buttondisponible";
import Secionescontenido from "../components/Secionescontenido"
import Cssicon from "../components/Cssicon";

export default function sectioncss(params) {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start p-44 gap-20 ">
            <article className="flex gap-5 justify-center items-center text-center w-full ">
                <Cssicon width="4em" height="5em" />
                <h2 className="text-5xl font-bold text-blue-600">CSS</h2>
            </article>
            <Secionescontenido
                title='Introducion'
                description='el mejor curso de la historia' 
                stateDisponible= {<Buttondisponible text='Disponible'/>} 
                conocerMas= {<Buttons text='conocer mas'/>}
            />
            <Secionescontenido
                title='Selectores'
                description='estos son los primeros pasos de nuestra maqutacion' 
                stateDisponible= {<Buttondisponible text='Disponible'/>} 
                conocerMas= {<Buttons text='conocer mas'/>}
            />
            
            <Secionescontenido
                title='Imagenes, colores y Gradiantes'
                description='proximamente...' 
                stateDisponible= {<Buttondisponible text='No Disponible'/>} 
                conocerMas= {<Buttons text='proximamente'/>}
            />
            <Secionescontenido
                title='Unidades y Modelo de cajas'
                description='proximamente...' 
                stateDisponible= {<Buttondisponible text='No Disponible'/>} 
                conocerMas= {<Buttons text='proximamente'/>}
            />
            <Secionescontenido
                title='Reglas'
                description='proximamente...' 
                stateDisponible= {<Buttondisponible text='No Disponible'/>} 
                conocerMas= {<Buttons text='proximamente'/>}
            />
            <Secionescontenido
                title='Fuentes y Tipografias'
                description='proximamente...' 
                stateDisponible= {<Buttondisponible text='No Disponible'/>} 
                conocerMas= {<Buttons text='proximamente'/>}
            />
            <Secionescontenido
                title='Representacion de datos'
                description='proximamente...' 
                stateDisponible= {<Buttondisponible text='No Disponible'/>} 
                conocerMas= {<Buttons text='proximamente'/>}
            />
            <Secionescontenido
                title='Maquetacion y colocacion'
                description='proximamente...' 
                stateDisponible= {<Buttondisponible text='No Disponible'/>} 
                conocerMas= {<Buttons text='proximamente'/>}
            />
            <Secionescontenido
                title='Flex y Grid'
                description='proximamente...' 
                stateDisponible= {<Buttondisponible text='No Disponible'/>} 
                conocerMas= {<Buttons text='proximamente'/>}
            />
            <Secionescontenido
                title='Responsive'
                description='proximamente...' 
                stateDisponible= {<Buttondisponible text='No Disponible'/>} 
                conocerMas= {<Buttons text='proximamente'/>}
            />
        </main>
    );
}
