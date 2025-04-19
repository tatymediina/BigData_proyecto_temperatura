import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("inicio")
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        // Comprobar si la pagina se está desplazando
        setIsScrolled(window.scrollY > 10)

        // Determinar la sección activa según la posición de desplazamiento
        const sections = ["inicio", "incendios", "focosCalor", "superficie"]

        for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 100 && rect.bottom >= 100) {
                setActiveSection(section)
                break
            }
            }
        }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        setIsMenuOpen(false)
        const element = document.getElementById(sectionId)
        if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const navItems = [
        { id: "inicio", label: "Inicio" },
        { id: "incendios", label: "Incendios Reportados" },
        { id: "focosCalor", label: "Focos de Calor" },
        { id: "superficie", label: "Superficie Afectada" },
        
    ]

    return (
        <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-custom-header ${
            isScrolled ? "shadow-md py-2" : "backdrop-blur-sm py-4"
        }`}
        >
        <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
            <img src="/logo1.png" alt="Logo" className="h-20 w-auto" />
            </div>

            {/* Navegación normal*/}
            <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
                <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-white border-b-2 border-white" : "text-white/70 hover:text-white"
                }`}
                >
                {item.label}
                </button>
            ))}
            </nav>

        {/* Menú para celus  */}
        <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
            {isMenuOpen ? <X className="h-6 w-6 text-white/90 hover:text-white" /> : <Menu className="h-6 w-6 text-white/90 hover:text-white" />}
            </button>
        </div>

        {/* Navegación movil */}
        {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <nav className="flex flex-col py-4">
                {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`py-3 px-6 text-left text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-primary border-l-4 border-primary" : "text-gray-600"
                    }`}
                >
                    {item.label}
                </button>
                ))}
            </nav>
            </div>
        )}
        </header>
    )
}

export default Header