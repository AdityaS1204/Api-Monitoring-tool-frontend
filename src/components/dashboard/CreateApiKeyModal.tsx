import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';

interface CreateApiKeyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (projectName: string) => void;
}

export default function CreateApiKeyModal({
    isOpen,
    onClose,
    onCreate
}: CreateApiKeyModalProps) {
    const [projectName, setProjectName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!projectName.trim()) return;

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            onCreate(projectName);
            setProjectName('');
            setIsLoading(false);
            onClose();
        }, 500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center">
            <div className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md mx-4 backdrop-blur-2xl">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                    <h2 className="text-xl font-semibold text-foreground">Create New API Key</h2>
                    <button
                        onClick={onClose}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="projectName" className="text-foreground">
                            Project Name
                        </Label>
                        <Input
                            id="projectName"
                            placeholder="Enter project name (e.g., docs-agent)"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            className="bg-muted/50 border-border"
                            autoFocus
                        />
                    </div>

                    <p className="text-xs text-muted-foreground">
                        Give your API key a name to help you identify it later.
                    </p>

                    {/* Footer */}
                    <div className="flex gap-3 justify-end pt-4 border-t border-border">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            disabled={isLoading}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={!projectName.trim() || isLoading}
                            className="gap-2"
                        >
                            {isLoading ? 'Creating...' : 'Create API Key'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
