const ApiDocumentation = () => {
    return (
        <section className="py-32 lg:py-48 bg-card border-t border-border/40 overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1240px]">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Text content */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                                Documentation that stays in sync with your APIs
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Automatically generate and manage API documentation from live traffic. Share internal or public docs without extra effort.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                            {[
                                { title: "Endpoint discovery", desc: "Auto-discovery of new routes." },
                                { title: "Request & response", desc: "Real-world examples from traffic." },
                                { title: "Version tracking", desc: "Diffing between API versions." },
                                { title: "Access control", desc: "RBAC for internal/public docs." }
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <div className="text-sm font-bold text-foreground">{feature.title}</div>
                                    <div className="text-xs text-muted-foreground">{feature.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Docs UI preview */}
                    <div className="relative">
                        <div className="bg-background rounded-xl border border-border shadow-2xl overflow-hidden flex h-[400px]">
                            {/* Static Sidebar */}
                            <div className="w-48 border-r border-border bg-card p-4 space-y-6 hidden sm:block">
                                <div className="space-y-3">
                                    <div className="h-2 w-12 bg-muted rounded" />
                                    <div className="space-y-2">
                                        <div className="h-4 w-full bg-primary/10 rounded border border-primary/20" />
                                        <div className="h-4 w-[80%] bg-muted/40 rounded" />
                                        <div className="h-4 w-[90%] bg-muted/40 rounded" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 w-16 bg-muted rounded" />
                                    <div className="space-y-2">
                                        <div className="h-4 w-full bg-muted/40 rounded" />
                                        <div className="h-4 w-[70%] bg-muted/40 rounded" />
                                    </div>
                                </div>
                            </div>

                            {/* Static Content */}
                            <div className="flex-1 p-6 space-y-6 bg-background">
                                <div className="flex items-center gap-3">
                                    <div className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-bold rounded">POST</div>
                                    <div className="text-sm font-mono font-bold text-foreground">/api/v1/auth/login</div>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-4 w-1/2 bg-muted rounded" />
                                    <div className="h-24 w-full bg-card border border-border rounded-lg p-4 font-mono text-[10px] text-blue-300">
                                        {`{
  "email": "user@example.com",
  "password": "••••••••••••"
}`}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-4 w-1/3 bg-muted rounded" />
                                    <div className="h-16 w-full bg-card border border-border rounded-lg p-4 font-mono text-[10px] text-green-300">
                                        {`{
  "status": "success",
  "token": "eyJh..."
}`}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Gradient */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApiDocumentation;
