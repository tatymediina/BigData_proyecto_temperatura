import jurisdiccion from '../../assets/c_hect_prov_año.svg'

function Superficie() {
    

    return (
        <section className="bg-gray-50 py-24 px-4 ">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
            Superficie Afectada por los Incendios
            </h2>
            <p className="text-gray-700 text-center mb-8">
            Mapa de calor que muestra la superficie afectada por incendios reportados en cada jurisdicción entre los año 2020 y 2023. 
            Los colores indican la magnitud del área quemadas.
            </p>
            <div className="bg-white shadow-md rounded-xl p-6">
            <img src={jurisdiccion} alt="" />
            </div>
        </div>
        </section>
    )
}

export default Superficie
