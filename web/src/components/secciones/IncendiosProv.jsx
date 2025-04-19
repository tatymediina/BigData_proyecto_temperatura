import incendios from '../../assets/in_prov_año.svg'

function IncendiosProv() {
    

    return (
        <section  className="bg-gray-50 py-24 px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
            Incendios Reportados por Provincia
            </h2>
            <p className="text-gray-700 text-center mb-8">
            El siguiente gráfico muestra la cantidad total de incendios reportados en cada provincia durante el período analizado. Permite comparar la magnitud del problema entre jurisdicciones.
            </p>
            <div className="bg-white shadow-md rounded-xl p-6">
            <img src={incendios} alt="" />
            </div>
        </div>
        </section>
    )
}

export default IncendiosProv
