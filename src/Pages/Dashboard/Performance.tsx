import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function Performance() {
    return (
        <DashboardLayout>
            <div className="p-6 lg:p-8">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Performance</h1>
                <p className="text-muted-foreground mt-2">In-depth performance metrics and latency breakdown.</p>
            </div>
        </DashboardLayout>
    );
}
