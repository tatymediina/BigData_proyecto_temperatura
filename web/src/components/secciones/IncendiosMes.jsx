
function IncendiosMes() {
    

    return (
        <section  className="bg-gray-50 py-24 px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
            Evolución Mensual de Incendios Reportados
            </h2>
            <p className="text-gray-700 text-center mb-8">
            El siguiente gráfico  muestra la cantidad de incendios reportados por mes durante el período analizado. Permite visualizar variaciones estacionales y tendencias a lo largo del tiempo.
            </p>
            <div className="bg-white shadow-md rounded-xl p-6">
            <iframe 
    src="/incendios_mes.html" 
    title="Evolución Mensual de Incendios Reportados"
    style={{ width: '100%', height: '600px', border: 'none' }}
  />
            </div>
        </div>
        </section>
    )
}

export default IncendiosMes
