import Plot from "react-plotly.js"

function Mapa() {
    const provincias = [
        "Córdoba", "Salta", "Chaco", "Buenos Aires", "Formosa",
        "Santa Fe", "Jujuy", "San Luis", "La Pampa", "Mendoza",
    ]

    const meses = [
        "Ene", "Feb", "Mar", "Abr", "May", "Jun",
        "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ]

    // Datos inventados: filas = provincias, columnas = meses
    const z = [
        [120, 80, 60, 40, 30, 20, 25, 110, 130, 150, 160, 180], // Córdoba
        [90, 60, 50, 30, 20, 15, 20, 70, 90, 100, 110, 130], // Salta
        [100, 70, 60, 35, 25, 18, 22, 85, 95, 110, 120, 140], // Chaco
        [70, 50, 40, 25, 20, 10, 15, 60, 75, 80, 85, 100], // Bs As
        [60, 45, 30, 20, 15, 8, 10, 50, 65, 70, 75, 90], // Formosa
        [55, 35, 25, 15, 10, 5, 8, 40, 55, 65, 70, 85], // Santa Fe
        [65, 50, 35, 25, 18, 10, 12, 48, 60, 68, 72, 88], // Jujuy
        [50, 30, 20, 12, 8, 5, 6, 38, 50, 58, 62, 75], // San Luis
        [45, 28, 18, 10, 7, 4, 5, 30, 40, 50, 55, 70], // La Pampa
        [40, 25, 15, 8, 5, 3, 4, 25, 35, 45, 50, 65], // Mendoza
    ]

    const data = [
        {
        z: z,
        x: meses,
        y: provincias,
        type: "heatmap",
        colorscale: "YlOrRd",
        hoverongaps: false,
        },
    ]

    const layout = {
        title: "Mapa de Calor Mensual por Provincia",
        xaxis: { title: "Mes" },
        yaxis: { title: "Provincia" },
        plot_bgcolor: "#F9FAFB",
        paper_bgcolor: "#F9FAFB",
    }

    return (
        <section id="mapa" className="bg-gray-100 py-24 px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
            Mapa de Calor Mensual por Provincia
            </h2>
            <p className="text-gray-700 text-center mb-8">
            El heatmap permite visualizar cuándo y dónde se concentran más los incendios.
            Es ideal para detectar combinaciones críticas de provincia y mes que requieren
            atención y prevención especial.
            </p>
            <div className="bg-white shadow-md rounded-xl p-6 overflow-x-auto">
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

export default Mapa
