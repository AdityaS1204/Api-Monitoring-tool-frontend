const HowItWorks = () => {
    const steps = [
        {
            title: "Install SDK",
            description: "Add the SDK and deploy."
        },
        {
            title: "Track APIs",
            description: "Requests, errors, and latency are captured automatically."
        },
        {
            title: "Get Insights",
            description: "AI highlights anomalies and your dashboard shows what broke and why."
        }
    ];

    return (
        <section className="py-32 lg:py-48 bg-background">
            <div className="container mx-auto px-6 max-w-[1240px]">
                <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-6">
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">How it works</h2>
                    <p className="text-lg text-muted-foreground font-medium">Minimal design. No complex setup. Three steps to total visibility.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connection Line */}
                    <div className="absolute top-[32px] left-[15%] right-[15%] h-[1px] bg-border hidden md:block -z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center gap-6 relative z-10 text-center">
                            <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center text-2xl font-bold text-primary shadow-xl">
                                {index + 1}
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed max-w-[280px]">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
