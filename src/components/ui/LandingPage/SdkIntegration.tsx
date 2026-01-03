import { useState } from "react";
import { Copy, Check } from "lucide-react";

const SdkIntegration = () => {
    const [activeTab, setActiveTab] = useState("Node.js");
    const [copied, setCopied] = useState(false);

    const codeExamples: { [key: string]: string } = {
        "Node.js": `import { monitor } from "@apimon/sdk";

monitor.init({
  apiKey: "YOUR_API_KEY"
});`,
        "Python": `from apimon import monitor

monitor.init(
  api_key="YOUR_API_KEY"
)`,
        "Go": `import "github.com/apimon/sdk"

func main() {
    apimon.Init("YOUR_API_KEY")
}`
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(codeExamples[activeTab]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-32 lg:py-48 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1240px]">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Code Block */}
                    <div className="w-full">
                        <div className="rounded-xl overflow-hidden border border-border bg-[#0E1117] shadow-2xl">
                            <div className="flex items-center justify-between px-4 bg-[#161B22] border-b border-border">
                                <div className="flex">
                                    {Object.keys(codeExamples).map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => setActiveTab(lang)}
                                            className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 mt-[-2px] ${activeTab === lang
                                                    ? "text-primary border-primary bg-background/20"
                                                    : "text-muted-foreground border-transparent hover:text-foreground"
                                                }`}
                                        >
                                            {lang}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={handleCopy}
                                    className="p-2 hover:bg-white/5 rounded transition-all text-muted-foreground hover:text-foreground"
                                >
                                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                                </button>
                            </div>
                            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-blue-300">
                                <pre>
                                    <code>{codeExamples[activeTab]}</code>
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text content */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                                Plug-in monitoring with SDKs you already use
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Add monitoring in minutes using lightweight SDKs. No infrastructure changes. No performance overhead.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Supported SDKs</span>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-foreground font-medium text-lg">
                                <span>Node.js</span>
                                <span className="text-muted-foreground/20">·</span>
                                <span>Python</span>
                                <span className="text-muted-foreground/20">·</span>
                                <span>Java</span>
                                <span className="text-muted-foreground/20">·</span>
                                <span>Go</span>
                                <span className="text-muted-foreground/20">·</span>
                                <span>PHP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SdkIntegration;
