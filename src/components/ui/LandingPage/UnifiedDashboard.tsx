const UnifiedDashboard = () => {
    return (
        <section className="py-32 lg:py-48 bg-background relative overflow-hidden text-center">
            <div className="container mx-auto px-6 max-w-[1240px]">
                <div className="flex flex-col gap-12 items-center mb-16">
                    <div className="max-w-3xl flex flex-col gap-6">
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                            All your APIs. One dashboard.
                        </h2>
                        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                            Monitor every service, endpoint, and environment from a single, clean interface.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {[
                            "Real-time latency and uptime",
                            "Error rate trends",
                            "Environment-wise filtering",
                            "Endpoint-level visibility"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-sm font-medium text-muted-foreground">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative mx-auto max-w-[1000px] border border-border rounded-2xl bg-card overflow-hidden shadow-2xl group">
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=2000"
                        alt="Unified API Dashboard"
                        className="w-full h-auto grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />

                    {/* Callouts */}
                    <div className="absolute top-[20%] left-[10%] p-3 bg-background/80 backdrop-blur-md border border-border rounded-lg shadow-xl text-left hidden md:block">
                        <div className="text-[10px] font-bold text-primary uppercase mb-1">Live Latency</div>
                        <div className="text-sm font-bold">24ms avg.</div>
                    </div>

                    <div className="absolute bottom-[30%] right-[15%] p-3 bg-background/80 backdrop-blur-md border border-border rounded-lg shadow-xl text-left hidden md:block">
                        <div className="text-[10px] font-bold text-green-500 uppercase mb-1">Uptime</div>
                        <div className="text-sm font-bold">99.98%</div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
                </div>
            </div>

            {/* Background Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] -z-0 pointer-events-none" />
        </section>
    );
};

export default UnifiedDashboard;
