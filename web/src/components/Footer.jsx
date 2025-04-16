function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 px-4 mt-24">
            <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-lg font-semibold">Análisis de Incendios Forestales en Argentina (2017–2024)</p>
            <p className="text-sm text-gray-400">
                Proyecto realizado para la materia de Big Data — Tec. Superior en Desarrollo de Software Multiplataforma
            </p>
            <p className="text-sm text-gray-400">
                Datos oficiales:{" "}
                <a
                href="https://datos.gob.ar/dataset/ambiente-incendios-forestales"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
                >
                datos.gob.ar
                </a>
            </p>
            <p className="text-sm text-gray-400">
                Grupo: Fleitas Ezequiel, Medina Tatiana y Miño Ailín — Año 2025
            </p>
            </div>
        </footer>
    )
}

export default Footer
