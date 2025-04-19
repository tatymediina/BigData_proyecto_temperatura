import FocosCalor from "../../assets/c_focos_prov_año.svg"
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
        Este gráfico muestra la cantidad anual de focos de calor por jurisdicción. Las barras apiladas muestran el total por año y cómo se distribuye entre provincias o regiones.</p>            
        <div className="bg-white shadow-md rounded-xl p-6">
            <img src={FocosCalor} alt="Focos de Calor por año" />
        </div>

        
    </div>
    </section>
    )
}

export default Distribucion
