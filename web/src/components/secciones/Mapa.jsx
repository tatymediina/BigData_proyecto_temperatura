import mapa from '../../assets/c_focos_prov_mes.svg'

function Mapa() {
    
    return (
        <section id="mapa" className="bg-gray-100 py-24 px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
            Distribución de Focos de Calor por Provincia y Mes
            </h2>
            <p className="text-gray-700 text-center mb-8">
            Este mapa de calor muestra la distribución mensual de focos de calor registrados en cada jurisdicción.
            Es ideal para detectar combinaciones críticas de provincia y mes que requieren
            atención y prevención especial.
            </p>
            <div className="bg-white shadow-md rounded-xl p-6 overflow-x-auto">
            <img src={mapa} alt="Mapa de calor" />
            </div>
        </div>
        </section>
    )
}

export default Mapa
