import distribucion from "../../assets/distribucion_mes.svg"
function Distribucion() {
    

    return (
        <section id="distribucion" className="bg-gray-50 py-24 px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
            Distribución Mensual de Incendios
            </h2>
            <p className="text-gray-700 text-center mb-8">
            El boxplot permite observar en qué meses del año ocurren más incendios, y cuánta
            variación hay entre años. Sirve para detectar estacionalidad y meses críticos.
            </p>
            <div className="bg-white shadow-md rounded-xl p-6">
            <img src={distribucion} alt="" />
            </div>
        </div>
        </section>
    )
}

export default Distribucion
