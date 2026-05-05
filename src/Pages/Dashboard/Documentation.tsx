import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
    Terminal, 
    Copy, 
    Check, 
    Code, 
    ArrowRight,
    ExternalLink
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Documentation() {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <DashboardLayout>
            <div className="p-8 max-w-4xl mx-auto space-y-10">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Documentation</h1>
                    <p className="text-muted-foreground text-lg">
                        Learn how to integrate the InsightX SDK and start monitoring your application.
                    </p>
                    <Link 
                        to="/docs" 
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                    >
                        View Full Public Docs <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                </div>

                {/* Installation Section */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/50 flex items-center justify-center border border-border/50">
                            <Terminal className="w-4 h-4" />
                        </div>
                        <h2 className="text-xl font-bold">1. Install the SDK</h2>
                    </div>
                    <div className="relative group">
                        <pre className="bg-[#111] text-white p-5 rounded-xl font-mono text-[13px] overflow-x-auto shadow-sm">
                            <code>npm install @insightx/sdk</code>
                        </pre>
                        <button 
                            onClick={() => copyToClipboard('npm install @insightx/sdk', 'npm')}
                            className="absolute top-3 right-3 p-2 rounded-md bg-white/5 hover:bg-white/10 text-white transition-colors"
                        >
                            {copied === 'npm' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                    </div>
                </section>

                {/* Integration Section */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/50 flex items-center justify-center border border-border/50">
                            <Code className="w-4 h-4" />
                        </div>
                        <h2 className="text-xl font-bold">2. Integrate Middleware</h2>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Add the InsightX middleware to your Express app. This automatically captures latency, status codes, and discovers routes.
                    </p>
                    <div className="relative group">
                        <pre className="bg-accent/20 border border-border/50 p-5 rounded-xl font-mono text-[13px] overflow-x-auto text-foreground">
                            <code>{`import express from 'express';
import { InsightX } from '@insightx/sdk';

const app = express();

const ix = new InsightX({
  apiKey: 'YOUR_API_KEY_HERE', // Get this from API Keys tab
});

app.use(ix.middleware());

app.listen(3000);`}</code>
                        </pre>
                        <button 
                            onClick={() => copyToClipboard('import express from ...', 'code')}
                            className="absolute top-3 right-3 p-2 rounded-md bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors"
                        >
                            {copied === 'code' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                    </div>
                </section>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="p-5 rounded-xl border border-border/40 bg-card/50">
                        <h4 className="font-bold text-[14px] mb-2 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            Route Discovery
                        </h4>
                        <p className="text-[13px] text-muted-foreground leading-relaxed">
                            Automatically maps all your API endpoints and displays them in the APIs tab.
                        </p>
                    </div>
                    <div className="p-5 rounded-xl border border-border/40 bg-card/50">
                        <h4 className="font-bold text-[14px] mb-2 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            Performance Tracking
                        </h4>
                        <p className="text-[13px] text-muted-foreground leading-relaxed">
                            Zero-overhead monitoring of p95 latency and throughput.
                        </p>
                    </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 flex items-center justify-between">
                    <div>
                        <h3 className="font-bold text-foreground">Need an API Key?</h3>
                        <p className="text-[13px] text-muted-foreground">Head over to the API Keys section to generate your first key.</p>
                    </div>
                    <Link to="/dashboard/api-keys">
                        <button className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all flex items-center gap-2 group">
                            Generate Key <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>
        </DashboardLayout>
    );
}
