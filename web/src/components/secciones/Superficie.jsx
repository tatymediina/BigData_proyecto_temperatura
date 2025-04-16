import Plot from "react-plotly.js"

function Superficie() {
    const anios = [2018, 2019, 2020, 2021, 2022, 2023]
    const provincias = ["Córdoba", "Salta", "Chaco", "Buenos Aires"]
    const datos = {
        "Córdoba": [15000, 18000, 20000, 21000, 19000, 17000],
        "Salta": [8000, 9500, 10000, 9700, 8800, 9200],
        "Chaco": [6000, 7000, 7500, 7200, 6800, 6600],
        "Buenos Aires": [4000, 4200, 4500, 4700, 4400, 4600],
    }

    const data = provincias.map((provincia) => ({
        x: anios,
        y: datos[provincia],
        type: "scatter",
        mode: "lines",
        stackgroup: "one",
        name: provincia,
    }))

    const layout = {
        title: "Superficie Afectada por Jurisdicción",
        xaxis: { title: "Año" },
        yaxis: { title: "Hectáreas quemadas" },
        plot_bgcolor: "#F9FAFB",
        paper_bgcolor: "#F9FAFB",
    }

    return (
        <section id="superficie" className="bg-gray-50 py-24 px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
            Superficie Afectada por Jurisdicción
            </h2>
            <p className="text-gray-700 text-center mb-8">
            El gráfico de área apilada muestra cuántas hectáreas fueron afectadas por incendios
            en distintas provincias del país. Permite comparar magnitudes y observar el impacto
            total acumulado por año.
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

export default Superficie
