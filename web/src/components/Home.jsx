import Header from './Header.jsx'
function Home() {
    return (
        <div className="min-h-screen">
        <Header />

        {/* Secciones para la navegación / insertar los gráficos acá */}
        <section id="inicio" className="h-screen pt-20 px-4 flex items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold">Inicio</h1>
        </section>

        <section id="evolucion" className="h-screen px-4 flex items-center justify-center bg-gray-100">
            <h2 className="text-4xl font-bold">Evolución</h2>
        </section>

        <section id="distribucion" className="h-screen px-4 flex items-center justify-center bg-gray-50">
            <h2 className="text-4xl font-bold">Distribución</h2>
        </section>

        <section id="regiones" className="h-screen px-4 flex items-center justify-center bg-gray-100">
            <h2 className="text-4xl font-bold">Regiones</h2>
        </section>

        <section id="superficie" className="h-screen px-4 flex items-center justify-center bg-gray-50">
            <h2 className="text-4xl font-bold">Superficie</h2>
        </section>

        <section id="mapa" className="h-screen px-4 flex items-center justify-center bg-gray-100">
            <h2 className="text-4xl font-bold">Mapa</h2>
        </section>
        </div>
    )
}

export default Home