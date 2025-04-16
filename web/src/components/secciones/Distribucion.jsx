import Plot from "react-plotly.js"

function Distribucion() {
    const data = [
        {
        y: [15, 20, 18, 25, 30, 28, 35, 33, 27, 20, 18, 22],
        type: "box",
        name: "Incendios por mes",
        marker: { color: "#F97316" },
        },
    ]

    const layout = {
        title: "Distribución Mensual de Incendios (Estacionalidad)",
        xaxis: {
        title: "Meses",
        tickvals: Array.from({ length: 12 }, (_, i) => i + 1),
        ticktext: [
            "Ene", "Feb", "Mar", "Abr", "May", "Jun",
            "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
        ],
        },
        yaxis: { title: "Cantidad de incendios" },
        plot_bgcolor: "#F9FAFB",
        paper_bgcolor: "#F9FAFB",
    }

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

export default Distribucion
