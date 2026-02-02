import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function Logs() {
    return (
        <DashboardLayout>
            <div className="p-6 lg:p-8">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Logs</h1>
                <p className="text-muted-foreground mt-2">View real-time API request and response logs.</p>
            </div>
        </DashboardLayout>
    );
}
