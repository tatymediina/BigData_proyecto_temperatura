
import FocosCalor from '../../assets/c_focos_año.svg'
function Evolucion() {
  
    return (
        <section
       
        className="bg-gray-100 py-24 px-4"
        >
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
            Evolución Anual de Focos de Calor
            </h2>
            <p className="text-gray-700 text-center mb-8">
            El siguiente gráfico muestra la evolución anual de focos de calor detectados en Argentina. Cada punto representa la cantidad total registrada en ese año. Los focos no confirman incendios, pero indican actividad térmica relevante
            </p>            
            <div className="bg-white shadow-md rounded-xl p-6">
                <img src={FocosCalor} alt="Focos de Calor por año" />
            </div>

            
        </div>
        </section>
    )
}

export default Evolucion
