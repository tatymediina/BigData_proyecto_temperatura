import Header from './Header.jsx'
import Evolucion from './secciones/Evolucion.jsx'
import Distribucion from './secciones/Distribucion.jsx'
import Regiones from './secciones/Regiones.jsx'
import Superficie from './secciones/Superficie.jsx'
import Mapa from './secciones/Mapa.jsx'
import Footer from './Footer.jsx'
function Home() {
    return (
        <div className="min-h-screen">
            <Header />

            {/* Secciones para la navegación / insertar los gráficos acá */}
            <section id="inicio" className="min-h-screen pt-32 bg-inicio flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Incendios Forestales en Argentina
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
                    Explorá visualmente cómo evolucionaron los focos de calor y los incendios forestales en el país
                    entre 2017 y 2024. Este sitio interactivo te permite conocer patrones, estacionalidades y el
                    impacto ambiental según región.
                </p>
                <button
                    onClick={() => document.getElementById("evolucion").scrollIntoView({ behavior: "smooth" })}
                    className="boton-naranja"
                >
                    Ver análisis
                </button>
            </section>


            <section id="evolucion" className="bg-gray-100 py-24 px-4">
                {/**<h2 className="text-4xl font-bold">Evolución</h2>*/}
                <Evolucion />
            </section>

            <section id="distribucion" className="bg-gray-100 py-24 px-4">
                <Distribucion />
            </section>

            <section id="regiones" className="bg-gray-100 py-24 px-4">
                <Regiones />
            </section>

            <section id="superficie" className="bg-gray-100 py-24 px-4">
                < Superficie />
            </section>

            <section id="mapa" className="bg-gray-100 py-24 px-4">
                <Mapa />
            </section>

            <Footer />
        </div>
    )
}

export default Home