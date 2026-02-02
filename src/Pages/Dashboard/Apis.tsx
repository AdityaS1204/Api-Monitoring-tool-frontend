import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function Apis() {
    return (
        <DashboardLayout>
            <div className="p-6 lg:p-8">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">APIs</h1>
                <p className="text-muted-foreground mt-2">Manage and monitor your API endpoints.</p>
            </div>
        </DashboardLayout>
    );
}
