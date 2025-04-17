import region from '../../assets/region.svg'

function Regiones() {
    

    return (
        <section id="regiones" className="bg-gray-100 py-24 px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
            Comparación Regional de Incendios
            </h2>
            <p className="text-gray-700 text-center mb-8">
            Este gráfico permite comparar el número de incendios registrados por región
            a lo largo de los últimos años. Sirve para detectar zonas críticas y evaluar
            cambios en el comportamiento del fuego en distintas partes del país.
            </p>
            <div className="bg-white shadow-md rounded-xl p-6">
            <img src={region} alt="" />
            </div>
        </div>
        </section>
    )
}

export default Regiones
