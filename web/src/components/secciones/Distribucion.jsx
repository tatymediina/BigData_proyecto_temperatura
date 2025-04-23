function Distribucion() {
    

    return (
        <section
       
        className="bg-gray-100 py-24 px-4"
        >
        <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
        Distribución Anual de Focos de Calor por Jurisdicción
        </h2>
        <p className="text-gray-700 text-center mb-8">
        El siguiente gráfico de mapa de calor muestra la cantidad anual de focos de calor registrados en cada jurisdicción. 
        Los distintos tonos de color reflejan la intensidad de los focos: a mayor concentración, más oscuro es el color. 
        Esta visualización permite identificar patrones espaciales y temporales en la ocurrencia de incendios a lo largo del tiempo.
        </p> 
        <div className="bg-white shadow-md rounded-xl p-6">
        <iframe 
    src="/focos_prov_año.html" 
    title="Focos de Calor por Año y Jurisdicción"
    style={{ width: '100%', height: '700px', border: 'none' }}
  />
        </div>

        
    </div>
    </section>
    )
}

export default Distribucion
