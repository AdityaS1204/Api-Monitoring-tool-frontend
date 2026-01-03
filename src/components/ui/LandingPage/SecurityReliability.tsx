import { Shield, Lock, Cpu } from "lucide-react";

const SecurityReliability = () => {
    return (
        <section className="py-32 bg-card border-y border-border/40">
            <div className="container mx-auto px-6 max-w-[1240px]">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                            Secure by default
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We prioritize data integrity and security above all. Minimal data collection, maximum protection.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8">
                        {[
                            { icon: <Lock size={20} />, title: "Encrypted data", desc: "Data is encrypted in transit and at rest." },
                            { icon: <Shield size={20} />, title: "Minimal data", desc: "We only collect what's necessary." },
                            { icon: <Cpu size={20} />, title: "Production-safe", desc: "Non-blocking SDKs for runtime safety." }
                        ].map((point, i) => (
                            <div key={i} className="flex flex-col gap-4">
                                <div className="text-primary">{point.icon}</div>
                                <div className="text-sm font-bold text-foreground">{point.title}</div>
                                <p className="text-xs text-muted-foreground leading-relaxed">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecurityReliability;
