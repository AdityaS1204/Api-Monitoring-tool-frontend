import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="py-20 border-t border-border/40">
            <div className="container mx-auto px-6 max-w-[1240px]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">I</span>
                        </div>
                        <span className="font-bold text-foreground">InsightX</span>
                    </div>


                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
                        <Link to="/docs" className="hover:text-foreground transition-colors">Docs</Link>
                        <a href="#" className="hover:text-foreground transition-colors">SDKs</a>
                        <a href="https://github.com" className="hover:text-foreground transition-colors">GitHub</a>
                        <a href="#" className="hover:text-foreground transition-colors">Status</a>
                        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                        <a href="#" className="hover:text-foreground transition-colors">Contact</a>
                    </div>
                </div>

                <div className="mt-12 text-center text-xs text-muted-foreground/40 font-medium">
                    © {new Date().getFullYear()} InsightX. Built for developers by developers.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
