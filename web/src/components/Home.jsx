import Header from './Header.jsx'
import Evolucion from './secciones/Evolucion.jsx'
import Distribucion from './secciones/Distribucion.jsx'
import Regiones from './secciones/Regiones.jsx'
import Superficie from './secciones/Superficie.jsx'
import Mapa from './secciones/Mapa.jsx'
import Footer from './Footer.jsx'
import IncendiosMes from './secciones/IncendiosMes.jsx'
import IncendiosProv from './secciones/IncendiosProv.jsx'
function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <section id="inicio" className="min-h-screen pt-32 bg-red-100 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Incendios Forestales en Argentina
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
                    Explorá visualmente cómo evolucionaron los focos de calor y los incendios forestales en el país
                    entre 2017 y 2024. Este sitio interactivo te permite conocer patrones, estacionalidades y el
                    impacto ambiental según región.
                </p>
                <button
                    onClick={() => document.getElementById("incendios").scrollIntoView({ behavior: "smooth" })}
                    className="boton-naranja"
                >
                    Ver análisis
                </button>
            </section>
            
            <section id="incendios" className="bg-gray-100 py-24 px-4">
                <IncendiosMes />
                <IncendiosProv />
                <Regiones />
            </section>
            

            <section id="focosCalor" className="bg-gray-100 py-24 px-4">
        
                <Evolucion />
                <Distribucion />
                <Mapa />
            </section>
            <section id="superficie" className="bg-gray-100 py-24 px-4 min-h-screen">
                < Superficie />
            </section>
            <section>
            <Footer />
            </section>
        </div>
    )
}

export default Home