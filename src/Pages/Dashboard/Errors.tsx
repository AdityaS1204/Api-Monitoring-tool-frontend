import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function Errors() {
    return (
        <DashboardLayout>
            <div className="p-6 lg:p-8">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Errors</h1>
                <p className="text-muted-foreground mt-2">Track and analyze API errors and 5xx/4xx spikes.</p>
            </div>
        </DashboardLayout>
    );
}
