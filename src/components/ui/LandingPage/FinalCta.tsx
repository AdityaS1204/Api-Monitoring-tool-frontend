const FinalCta = () => {
    return (
        <section className="py-32 lg:py-48 bg-secondary/30 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1240px] text-center relative z-10">
                <div className="max-w-3xl mx-auto flex flex-col gap-8">
                    <h2 className="text-5xl lg:text-7xl font-bold text-foreground tracking-tight">
                        Stop debugging APIs blind
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Get real-time monitoring, AI-powered insights, and documentation in one place.
                    </p>
                    <div className="mt-4">
                        <button className="px-10 py-5 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all text-lg shadow-2xl shadow-primary/20">
                            Start Monitoring APIs
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
        </section>
    );
};

export default FinalCta;
