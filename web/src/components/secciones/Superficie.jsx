import jurisdiccion from '../../assets/comparacion_jurisdiccion.svg'

function Superficie() {
    

    return (
        <section id="superficie" className="bg-gray-50 py-24 px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
            Incendios por Jurisdicción
            </h2>
            <p className="text-gray-700 text-center mb-8">
            El gráfico muestra qué provincias fueron afectadas por incendios. Permite comparar magnitudes y observar el impacto
            total acumulado por año.
            </p>
            <div className="bg-white shadow-md rounded-xl p-6">
            <img src={jurisdiccion} alt="" />
            </div>
        </div>
        </section>
    )
}

export default Superficie
