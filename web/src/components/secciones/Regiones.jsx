import Plot from "react-plotly.js"

function Regiones() {
    const regiones = ["Norte", "Centro", "Cuyo", "Patagonia"]
    const anios = [2020, 2021, 2022, 2023]
    const datos = {
        2020: [320, 400, 180, 220],
        2021: [300, 450, 210, 200],
        2022: [350, 420, 230, 250],
        2023: [400, 460, 250, 270],
    }

    const data = anios.map((anio) => ({
        x: regiones,
        y: datos[anio],
        type: "bar",
        name: anio.toString(),
    }))

    const layout = {
        title: "Comparación Regional de Incendios",
        barmode: "group",
        xaxis: { title: "Región" },
        yaxis: { title: "Cantidad de incendios" },
        plot_bgcolor: "#F9FAFB",
        paper_bgcolor: "#F9FAFB",
    }

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

export default Regiones
