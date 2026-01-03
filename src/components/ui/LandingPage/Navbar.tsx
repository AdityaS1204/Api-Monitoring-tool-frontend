import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Github } from "lucide-react"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
            }`}>
            <div className="flex items-center gap-2">
                <Link to="/" className="text-xl font-bold text-foreground flex items-center gap-1">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">A</span>
                    </div>
                    <span>ApiMon</span>
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                <Link to="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Docs</Link>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                    <Github size={16} />
                    GitHub
                </a>
            </div>

            <div className="flex items-center gap-4">
                <button className="px-5 py-2 text-sm font-semibold text-white bg-primary rounded-md hover:opacity-90 transition-all">
                    Start Monitoring
                </button>
            </div>
        </nav>
    )
};

export default Navbar