import { AlertCircle, TrendingUp, Sparkles } from "lucide-react";

const AiDetection = () => {
    return (
        <section className="py-32 lg:py-48 bg-card border-y border-border/40">
            <div className="container mx-auto px-6 max-w-[1240px]">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Visual Component */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="bg-background rounded-2xl border border-border p-6 shadow-2xl relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Sparkles className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold">AI Analysis</div>
                                        <div className="text-xs text-muted-foreground">Real-time Anomaly Detection</div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold rounded-full uppercase tracking-wider animate-pulse">
                                    High Alert
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 border-l-4 border-l-red-500">
                                    <div className="flex gap-3">
                                        <AlertCircle className="text-red-500 shrink-0" size={18} />
                                        <p className="text-sm text-foreground/90 font-medium">
                                            Spike in 5xx errors detected on <code className="bg-muted px-1 rounded text-red-500">/auth/login</code> after latest deploy.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative h-40 w-full bg-muted/20 rounded-lg overflow-hidden flex items-end px-2 pb-2">
                                    {/* Mock timeline graph with spike */}
                                    <svg viewBox="0 0 400 100" className="w-full h-full text-primary overflow-visible">
                                        <path
                                            d="M0,80 L40,75 L80,78 L120,70 L160,82 L200,10 L240,75 L280,80 L320,78 L360,82 L400,75"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle cx="200" cy="10" r="5" fill="red" />
                                        <line x1="200" y1="10" x2="200" y2="100" stroke="red" strokeWidth="1" strokeDasharray="4 4" />
                                    </svg>

                                    <div className="absolute top-1/4 translate-y-[-50%] left-1/2 ml-4 p-2 bg-background border border-border rounded shadow-xl text-[10px] max-w-[120px]">
                                        <TrendingUp size={12} className="text-red-500 mb-1" />
                                        <span className="font-bold">422% Increase</span> in error rate compared to baseline.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Glow behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[120px] rounded-full" />
                    </div>

                    {/* Right: Text content */}
                    <div className="order-1 lg:order-2 flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                                AI that understands when your APIs behave weird
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our AI continuously analyzes traffic patterns, latency, and error rates to detect anomalies before users notice.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                "Detect unusual traffic spikes",
                                "Identify slow or degrading endpoints",
                                "Explain failures in plain English",
                                "Suggest possible causes"
                            ].map((cap, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                                    <span className="text-sm font-medium text-foreground/80">{cap}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiDetection;
