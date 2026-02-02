import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Activity,
    Settings,
    FileText,
    BarChart3,
    Menu,
    X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const sidebarItems = [
    {
        title: 'Overview',
        href: '/dashboard/overview',
        icon: LayoutDashboard,
    },
    {
        title: 'Analytics',
        href: '/dashboard/analytics',
        icon: BarChart3,
    },
    {
        title: 'Activity',
        href: '/dashboard/activity',
        icon: Activity,
    },
    {
        title: 'Reports',
        href: '/dashboard/reports',
        icon: FileText,
    },
    {
        title: 'Settings',
        href: '/dashboard/settings',
        icon: Settings,
    },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="min-h-screen bg-background">
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 left-0 z-50 h-screen w-64 bg-card border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="flex items-center justify-between h-16 px-6 border-b border-border">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <BarChart3 className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="font-heading font-bold text-lg">API Monitor</span>
                        </Link>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden text-muted-foreground hover:text-foreground"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-1">
                        {sidebarItems.map((item) => {
                            const isActive = location.pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-primary text-primary-foreground"
                                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                    )}
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    <Icon className="w-5 h-5" />
                                    {item.title}
                                </Link>
                            );
                        })}
                    </nav>

                    <Separator />

                    {/* User section */}
                    <div className="p-4">
                        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-accent">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                                JD
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">John Doe</p>
                                <p className="text-xs text-muted-foreground truncate">john@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main content */}
            <div className="lg:pl-64">
                {/* Mobile header */}
                <header className="sticky top-0 z-30 h-16 bg-background border-b border-border lg:hidden">
                    <div className="flex items-center justify-between h-full px-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <BarChart3 className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="font-heading font-bold text-lg">API Monitor</span>
                        </Link>
                        <div className="w-6" /> {/* Spacer for centering */}
                    </div>
                </header>

                {/* Page content */}
                <main className="min-h-[calc(100vh-4rem)] lg:min-h-screen">
                    {children}
                </main>
            </div>
        </div>
    );
}
