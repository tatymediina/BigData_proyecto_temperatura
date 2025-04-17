
import FocosCalor from '../../assets/focos_calor_por_anio.svg'
function Evolucion() {
  
    return (
        <section
        id="evolucion"
        className="bg-gray-100 py-24 px-4"
        >
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
            Evolución Anual de Focos de Calor
            </h2>
            <p className="text-gray-700 text-center mb-8">
            El gráfico de líneas permite visualizar cómo ha evolucionado la cantidad de focos
            de calor detectados año a año en Argentina. Esta visualización ayuda a identificar
            tendencias, detectar años críticos y observar el comportamiento del fuego a lo largo
            del tiempo.
            </p>            
            <div className="bg-white shadow-md rounded-xl p-6">
                <img src={FocosCalor} alt="Focos de Calor por año" />
            </div>

            
        </div>
        </section>
    )
}

export default Evolucion
