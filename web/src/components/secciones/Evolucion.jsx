import Plot from "react-plotly.js"

function Evolucion() {
  // Datos inventados por ahora
    const data = [
        {
        x: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        y: [1200, 1350, 1100, 1600, 1900, 1700, 1500, 1800],
        type: "scatter",
        mode: "lines+markers",
        marker: { color: "#EF4444" },
        line: { shape: "linear" },
        name: "Focos de calor",
        },
    ]

    const layout = {
        title: "Evolución Anual de Focos de Calor",
        xaxis: { title: "Año" },
        yaxis: { title: "Cantidad de focos" },
        plot_bgcolor: "#F9FAFB",
        paper_bgcolor: "#F9FAFB",
        font: { family: "sans-serif", size: 14 },
    }

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
                <Plot
                    data={data}
                    layout={{ ...layout, autosize: true }}
                    config={{ responsive: true }}
                    useResizeHandler={true}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>

            
        </div>
        </section>
    )
}

export default Evolucion
