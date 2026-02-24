import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import CreateApiKeyModal from '@/components/dashboard/CreateApiKeyModal';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Copy, Trash2, Check, Edit2, Plus } from 'lucide-react';

interface ApiKeyData {
    id: string;
    projectName: string;
    apiKey: string;
    createdAt: string;
    expires: string;
    usage: string;
}

export default function ApiKeys() {
    const [apiKeys, setApiKeys] = useState<ApiKeyData[]>([
        {
            id: '1',
            projectName: 'docs-agent',
            apiKey: 'gsk_abc123defghijklmnopqrstuvwxyz88MD',
            createdAt: '2/21/2026',
            expires: 'Never',
            usage: '2 API Calls'
        },
        {
            id: '2',
            projectName: 'Rankflow-prod',
            apiKey: 'gsk_xyz789uvwabcdefghijklmnopqrstu5d',
            createdAt: '1/20/2026',
            expires: 'Never',
            usage: '0 API Calls'
        },
        {
            id: '3',
            projectName: 'sheet-agent',
            apiKey: 'gsk_mno456pqrstuvwxyzabcdefghijklMakz',
            createdAt: '2/9/2026',
            expires: 'Never',
            usage: '0 API Calls'
        }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopyApiKey = (apiKey: string, id: string) => {
        navigator.clipboard.writeText(apiKey);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const handleDeleteApiKey = (id: string) => {
        setApiKeys(apiKeys.filter(key => key.id !== id));
    };

    const handleCreateApiKey = (projectName: string) => {
        const newApiKey: ApiKeyData = {
            id: String(Date.now()),
            projectName,
            apiKey: `gsk_${Math.random().toString(36).substring(2, 37)}`,
            createdAt: new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }),
            expires: 'Never',
            usage: '0 API Calls'
        };
        setApiKeys([newApiKey, ...apiKeys]);
    };

    return (
        <DashboardLayout>
            <div className="p-6 lg:p-8">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">API Keys</h1>
                        <p className="text-muted-foreground mt-2">Manage your project API keys. Remember to keep your API keys safe to prevent unauthorized access.</p>
                    </div>
                    <Button onClick={() => setIsModalOpen(true)} variant="outline" className="gap-2 flex-shrink-0">
                        <Plus size={18} />
                        Generate API Key
                    </Button>
                </div>

                <div className="border border-border rounded-lg overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-muted/30">
                                <TableHead className="text-muted-foreground font-semibold uppercase text-xs px-6 py-4">Name</TableHead>
                                <TableHead className="text-muted-foreground font-semibold uppercase text-xs px-6 py-4">Secret Key</TableHead>
                                <TableHead className="text-muted-foreground font-semibold uppercase text-xs px-6 py-4">Created</TableHead>
                                <TableHead className="text-muted-foreground font-semibold uppercase text-xs px-6 py-4">Expires</TableHead>
                                <TableHead className="text-muted-foreground font-semibold uppercase text-xs px-6 py-4">Usage (24hrs)</TableHead>
                                <TableHead className="text-muted-foreground font-semibold uppercase text-xs px-6 py-4 text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {apiKeys.map((keyData) => (
                                <TableRow key={keyData.id} className="border-border">
                                    <TableCell className="px-6 py-4 text-foreground font-medium">{keyData.projectName}</TableCell>
                                    <TableCell className="px-6 py-4">
                                        <code className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                                            {keyData.apiKey.substring(0, 12)}...{keyData.apiKey.substring(keyData.apiKey.length - 4)}
                                        </code>
                                    </TableCell>
                                    <TableCell className="px-6 py-4 text-sm text-foreground">{keyData.createdAt}</TableCell>
                                    <TableCell className="px-6 py-4 text-sm text-foreground">{keyData.expires}</TableCell>
                                    <TableCell className="px-6 py-4 text-sm text-foreground">{keyData.usage}</TableCell>
                                    <TableCell className="px-6 py-4">
                                        <div className="flex items-center gap-2 justify-end">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleCopyApiKey(keyData.apiKey, keyData.id)}
                                                className="h-8 w-8 p-0"
                                                title={copiedId === keyData.id ? 'Copied!' : 'Copy API Key'}
                                            >
                                                {copiedId === keyData.id ? (
                                                    <Check size={16} className="text-green-600" />
                                                ) : (
                                                    <Copy size={16} />
                                                )}
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleDeleteApiKey(keyData.id)}
                                                className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                                                title="Delete API Key"
                                            >
                                                <Trash2 size={16} />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {apiKeys.length === 0 && (
                    <div className="text-center py-12 border border-border rounded-lg">
                        <p className="text-muted-foreground mb-4">No API keys yet. Create your first one!</p>
                        <Button onClick={() => setIsModalOpen(true)} className="gap-2">
                            <Plus size={18} />
                            Generate API Key
                        </Button>
                    </div>
                )}

                <CreateApiKeyModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onCreate={handleCreateApiKey}
                />
            </div>
        </DashboardLayout>
    );
}

