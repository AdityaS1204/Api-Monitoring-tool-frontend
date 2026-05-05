import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    ChevronRight, 
    Copy, 
    Check, 
    Search, 
    Book, 
    Code, 
    Terminal, 
    Settings, 
    Activity,
    ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const sections = [
    {
        title: 'Getting Started',
        items: [
            { title: 'Introduction', id: 'intro' },
            { title: 'Quickstart', id: 'quickstart' },
        ]
    },
    {
        title: 'Installation',
        items: [
            { title: 'Node.js SDK', id: 'install-node' },
            { title: 'Python SDK (Coming Soon)', id: 'install-python' },
        ]
    },
    {
        title: 'Configuration',
        items: [
            { title: 'API Keys', id: 'config-keys' },
            { title: 'Environment Variables', id: 'config-env' },
        ]
    },
    {
        title: 'Monitoring',
        items: [
            { title: 'Route Discovery', id: 'monitor-discovery' },
            { title: 'Metrics Collection', id: 'monitor-metrics' },
            { title: 'Error Tracking', id: 'monitor-errors' },
        ]
    }
];

export default function DocsPage() {
    const [activeSection, setActiveSection] = useState('intro');
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="min-h-screen bg-white text-[#111] selection:bg-black selection:text-white">
            {/* Nav */}
            <nav className="fixed top-0 w-full h-16 border-b border-[#eaeaea] bg-white/80 backdrop-blur-md z-50 px-8 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                            <span className="text-white font-bold text-sm">IX</span>
                        </div>
                        <span className="font-bold text-[18px] tracking-tight">InsightX</span>
                    </Link>
                    <Separator orientation="vertical" className="h-6 bg-[#eaeaea]" />
                    <div className="hidden md:flex items-center gap-6 text-[14px] font-medium text-[#666]">
                        <Link to="/docs" className="text-black">Documentation</Link>
                        <Link to="/showcase" className="hover:text-black">Showcase</Link>
                        <Link to="/blog" className="hover:text-black">Blog</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#999] group-focus-within:text-black transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search documentation..." 
                            className="h-10 w-64 pl-10 pr-4 rounded-md border border-[#eaeaea] bg-[#fafafa] focus:bg-white focus:border-black transition-all text-sm outline-none"
                        />
                    </div>
                    <Link to="/dashboard" className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-[#333] transition-colors">
                        Go to Dashboard
                    </Link>
                </div>
            </nav>

            <div className="flex pt-16 max-w-7xl mx-auto min-h-screen">
                {/* Sidebar */}
                <aside className="w-64 border-r border-[#eaeaea] sticky top-16 h-[calc(100vh-4rem)] py-8 px-6 overflow-y-auto hidden lg:block">
                    {sections.map((section) => (
                        <div key={section.title} className="mb-8">
                            <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#666] mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.items.map((item) => (
                                    <li key={item.id}>
                                        <button 
                                            onClick={() => setActiveSection(item.id)}
                                            className={cn(
                                                "text-[14px] transition-colors hover:text-black",
                                                activeSection === item.id ? "text-black font-semibold" : "text-[#666]"
                                            )}
                                        >
                                            {item.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </aside>

                {/* Main Content */}
                <main className="flex-1 py-12 px-8 lg:px-16 max-w-4xl">
                    <div className="space-y-12">
                        {/* Header */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-primary font-medium text-sm">
                                <Book className="w-4 h-4" />
                                <span>Documentation</span>
                                <ChevronRight className="w-3 h-3 text-[#999]" />
                                <span className="text-[#666]">Introduction</span>
                            </div>
                            <h1 className="text-[40px] font-bold leading-tight tracking-tight">Quickstart Guide</h1>
                            <p className="text-[18px] text-[#666] leading-relaxed">
                                Learn how to integrate InsightX into your applications and start monitoring performance, errors, and insights in minutes.
                            </p>
                        </div>

                        <Separator className="bg-[#eaeaea]" />

                        {/* Installation */}
                        <section id="install-node" className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#fafafa] border border-[#eaeaea] flex items-center justify-center text-black">
                                    <Terminal className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold">Installation</h2>
                            </div>
                            <p className="text-[#666] text-[16px]">
                                First, install the InsightX Node.js SDK using your preferred package manager.
                            </p>
                            
                            <div className="relative group">
                                <pre className="bg-black text-white p-6 rounded-xl font-mono text-sm overflow-x-auto shadow-xl">
                                    <code>npm install @insightx/sdk</code>
                                </pre>
                                <button 
                                    onClick={() => copyToClipboard('npm install @insightx/sdk', 'npm')}
                                    className="absolute top-4 right-4 p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
                                >
                                    {copied === 'npm' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>
                        </section>

                        {/* Setup */}
                        <section id="setup" className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#fafafa] border border-[#eaeaea] flex items-center justify-center text-black">
                                    <Code className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold">Initialization</h2>
                            </div>
                            <p className="text-[#666] text-[16px]">
                                Add the InsightX middleware to your Express.js application to enable automatic route discovery and performance monitoring.
                            </p>
                            
                            <div className="relative group">
                                <pre className="bg-[#fafafa] border border-[#eaeaea] p-6 rounded-xl font-mono text-sm overflow-x-auto text-black">
                                    <code>{`import express from 'express';
import { InsightX } from '@insightx/sdk';

const app = express();

// Initialize InsightX
const ix = new InsightX({
  apiKey: process.env.INSIGHTX_API_KEY,
  debug: true
});

// Add middleware
app.use(ix.middleware());

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.listen(3000);`}</code>
                                </pre>
                                <button 
                                    onClick={() => copyToClipboard('import express from ...', 'code')}
                                    className="absolute top-4 right-4 p-2 rounded-md bg-black/5 hover:bg-black/10 text-black transition-colors"
                                >
                                    {copied === 'code' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>
                        </section>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
                            <div className="p-6 rounded-xl border border-[#eaeaea] hover:border-black transition-colors group cursor-pointer">
                                <Activity className="w-6 h-6 mb-4 text-black" />
                                <h4 className="font-bold mb-2">Real-time Metrics</h4>
                                <p className="text-sm text-[#666] leading-relaxed">
                                    Monitor latency, status codes, and throughput in real-time with zero configuration.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="p-6 rounded-xl border border-[#eaeaea] hover:border-black transition-colors group cursor-pointer">
                                <Settings className="w-6 h-6 mb-4 text-black" />
                                <h4 className="font-bold mb-2">Custom Configuration</h4>
                                <p className="text-sm text-[#666] leading-relaxed">
                                    Tailor the SDK to your needs with advanced filtering and sampling options.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        {/* Next Steps */}
                        <div className="bg-black text-white p-12 rounded-3xl relative overflow-hidden">
                            <div className="relative z-10 space-y-6">
                                <h3 className="text-3xl font-bold">Ready to scale?</h3>
                                <p className="text-white/60 text-lg max-w-md">
                                    Join thousands of developers using InsightX to ship reliable and fast APIs.
                                </p>
                                <div className="flex gap-4">
                                    <Link to="/signup" className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-[#eee] transition-colors">
                                        Get Started for Free
                                    </Link>
                                    <Link to="/contact" className="px-8 py-3 border border-white/20 rounded-full font-bold hover:bg-white/10 transition-colors">
                                        Talk to Sales
                                    </Link>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full -mr-48 -mt-48" />
                        </div>
                    </div>
                </main>

                {/* Right Sidebar - TOC */}
                <aside className="w-64 py-12 px-8 h-[calc(100vh-4rem)] sticky top-16 hidden xl:block">
                    <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#666] mb-4">On this page</h4>
                    <ul className="space-y-3 text-[13px]">
                        <li><a href="#intro" className="text-[#666] hover:text-black">Introduction</a></li>
                        <li><a href="#install-node" className="text-[#666] hover:text-black">Installation</a></li>
                        <li><a href="#setup" className="text-[#666] hover:text-black">Initialization</a></li>
                        <li><a href="#monitor-discovery" className="text-[#666] hover:text-black">Route Discovery</a></li>
                    </ul>
                </aside>
            </div>
        </div>
    );
}
