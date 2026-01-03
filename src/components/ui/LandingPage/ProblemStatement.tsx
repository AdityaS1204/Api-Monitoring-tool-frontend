const ProblemStatement = () => {
    const problems = [
        {
            title: "Silent failures",
            description: "Errors go unnoticed until customers report them."
        },
        {
            title: "No clear root cause",
            description: "Metrics exist, insights don’t."
        },
        {
            title: "Fragmented tooling",
            description: "Monitoring, logs, and docs live in different places."
        }
    ];

    return (
        <section className="py-32 lg:py-48 border-t border-border/40">
            <div className="container mx-auto px-6 max-w-[1240px]">
                <div className="flex flex-col gap-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground tracking-tight">
                            APIs fail quietly. Until users complain.
                        </h2>
                        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                            Latency spikes, silent failures, undocumented changes, and breaking deployments cost time and trust. Logs alone are not enough. You need visibility, context, and intelligence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {problems.map((problem, index) => (
                            <div key={index} className="p-8 rounded-xl bg-card border border-border flex flex-col gap-4">
                                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xl font-bold text-primary">
                                    0{index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-foreground">{problem.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemStatement;
