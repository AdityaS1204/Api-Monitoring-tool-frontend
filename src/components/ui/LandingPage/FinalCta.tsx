import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const FinalCta = () => {
    return (
        <section className="py-32 lg:py-48 bg-secondary/30 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1240px] text-center relative z-10">
                <div className="max-w-3xl mx-auto flex flex-col gap-8">
                    <h2 className="text-5xl lg:text-7xl font-bold text-foreground tracking-tight">
                        Stop debugging APIs blindly
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Get real-time monitoring, AI-powered insights, and documentation in one place.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto w-full mt-4">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="h-12 bg-background/50 border-white/10"
                        />
                        <Link to="/signup" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full h-12 px-8">
                                Get Early Access
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>



            {/* Background Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
        </section>
    );
};

export default FinalCta;
