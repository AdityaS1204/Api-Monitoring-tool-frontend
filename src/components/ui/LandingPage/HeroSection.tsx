import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1240px]">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6 max-w-xl">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">API Monitoring Platform</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
                            Monitor. Analyze. Fix. APIs, without guessing.
                        </h1>

                        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                            Real-time API monitoring with SDK-based integration, AI-powered anomaly detection, and a unified dashboard to keep every endpoint in check.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
                            <Link to="/signup" className="px-8 py-4 bg-primary text-white font-semibold rounded-md hover:opacity-90 transition-all flex items-center gap-2 text-base">
                                Start Monitoring APIs
                                <ArrowRight size={18} />
                            </Link>
                            <Link to="/docs" className="px-8 py-4 bg-secondary text-foreground font-semibold rounded-md hover:bg-muted transition-all text-base border border-border">
                                View Documentation
                            </Link>
                        </div>


                        <p className="text-sm text-muted-foreground/60 flex items-center gap-2">
                            <span className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-6 h-6 rounded-full bg-muted border-2 border-background" />
                                ))}
                            </span>
                            Used by developers shipping production APIs.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="relative">
                        <div className="relative z-10 p-4 bg-card border border-border rounded-xl shadow-2xl glass-panel overflow-hidden">
                            {/* Dashboard Mockup Content */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between border-b border-border pb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="text-xs text-muted-foreground font-mono">api.v1.monitoring/dashboard</div>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-24 bg-background/50 rounded-lg border border-border p-3 flex flex-col justify-between">
                                            <div className="w-12 h-2 bg-muted rounded" />
                                            <div className="w-20 h-4 bg-primary/20 rounded" />
                                        </div>
                                    ))}
                                </div>

                                <div className="h-48 bg-background/50 rounded-lg border border-border p-4 relative overflow-hidden">
                                    {/* Mock Chart */}
                                    <div className="absolute inset-0 flex items-end px-4 pb-4 gap-1">
                                        {[...Array(20)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`flex-1 rounded-t ${i === 12 ? 'bg-red-500 h-[80%]' : 'bg-primary/40 h-[' + (Math.random() * 40 + 20) + '%]'}`}
                                                style={{ height: `${i === 12 ? 80 : Math.random() * 40 + 20}%` }}
                                            />
                                        ))}
                                    </div>
                                    <div className="absolute top-4 left-4 p-2 bg-red-500/10 border border-red-500/20 rounded text-[10px] text-red-500 font-bold animate-pulse">
                                        ANOMALY DETECTED
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -z-0" />
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -z-0" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
