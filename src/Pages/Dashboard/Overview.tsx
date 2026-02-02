import { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';
import { TrendingUp, AlertTriangle, RefreshCw, Sparkles } from 'lucide-react';

// Mock data
const trafficData = [
    { time: '00:00', requests: 12400 },
    { time: '04:00', requests: 8200 },
    { time: '08:00', requests: 18900 },
    { time: '12:00', requests: 24300 },
    { time: '16:00', requests: 21700 },
    { time: '20:00', requests: 15600 },
];

const errorDistribution = [
    { name: '2xx Success', value: 96.4, color: '#10B981' },
    { name: '4xx Client', value: 2.1, color: '#F59E0B' },
    { name: '5xx Server', value: 1.5, color: '#EF4444' },
];

const slowestEndpoints = [
    { endpoint: 'POST /checkout', avgLatency: '840 ms', p95Latency: '1.9 s' },
    { endpoint: 'GET /products', avgLatency: '520 ms', p95Latency: '1.2 s' },
    { endpoint: 'POST /auth/login', avgLatency: '480 ms', p95Latency: '980 ms' },
    { endpoint: 'GET /user/profile', avgLatency: '320 ms', p95Latency: '720 ms' },
    { endpoint: 'PUT /cart/update', avgLatency: '290 ms', p95Latency: '650 ms' },
];

const aiInsights = [
    'Error rate increased by 18% after 14:30',
    'Most failures from POST /checkout endpoint',
    'Latency spike correlates with traffic surge',
    'Recommendation: review database connection pool',
];

export default function Overview() {
    const [timeRange, setTimeRange] = useState('24h');
    const [lastUpdated] = useState(new Date());

    const getTimeSinceUpdate = () => {
        const seconds = Math.floor((new Date().getTime() - lastUpdated.getTime()) / 1000);
        return seconds < 60 ? `${seconds} seconds ago` : `${Math.floor(seconds / 60)} minutes ago`;
    };

    return (
        <div className="p-6 lg:p-8 space-y-6">
            {/* Page Header */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
                    <p className="text-sm text-muted-foreground mt-1">API health summary</p>
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-[180px] bg-card">
                        <SelectValue placeholder="Select time range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1h">Last 1 hour</SelectItem>
                        <SelectItem value="24h">Last 24 hours</SelectItem>
                        <SelectItem value="7d">last 7 days</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Top Summary Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Total Requests */}
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Total Requests</p>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-3xl font-bold">1,248,932</h3>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-green-500">
                            <TrendingUp className="w-4 h-4" />
                            <span>+12% vs previous period</span>
                        </div>
                    </div>
                </Card>

                {/* Error Rate */}
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Error Rate</p>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-3xl font-bold text-yellow-500">1.8%</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            5xx: 0.6% · 4xx: 1.2%
                        </p>
                    </div>
                </Card>

                {/* Avg Response Time */}
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Avg Response Time</p>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-3xl font-bold text-green-500">243 ms</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">P95: 712 ms</p>
                    </div>
                </Card>

                {/* Active Endpoints */}
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Active Endpoints</p>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-3xl font-bold">42</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">3 endpoints inactive</p>
                    </div>
                </Card>
            </div>

            {/* Traffic Over Time */}
            <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold">Traffic</h3>
                        <p className="text-sm text-muted-foreground">Requests over time</p>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={trafficData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                <XAxis
                                    dataKey="time"
                                    stroke="#94A3B8"
                                    style={{ fontSize: '12px' }}
                                />
                                <YAxis
                                    stroke="#94A3B8"
                                    style={{ fontSize: '12px' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#000000',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '8px',
                                        color: '#FFFFFF',
                                    }}
                                    labelStyle={{ color: '#FFFFFF' }}
                                    itemStyle={{ color: '#FFFFFF' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="requests"
                                    stroke="#6366F1"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </Card>

            {/* Error Distribution & Slowest Endpoints */}
            <div className="grid gap-4 lg:grid-cols-2">
                {/* Error Distribution */}
                <Card className="p-6 bg-card border-border">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Error Distribution</h3>
                        <div className="h-[280px] flex items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={errorDistribution}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={90}
                                        paddingAngle={2}
                                        dataKey="value"
                                    >
                                        {errorDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#000000',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: '8px',
                                            color: '#FFFFFF',
                                        }}
                                        labelStyle={{ color: '#FFFFFF' }}
                                        itemStyle={{ color: '#FFFFFF' }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="space-y-2">
                            {errorDistribution.map((item, index) => (
                                <div key={index} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-3 h-3 rounded-full"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <span className="text-muted-foreground">{item.name}</span>
                                    </div>
                                    <span className="font-medium">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* Slowest Endpoints */}
                <Card className="p-6 bg-card border-border">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Slowest Endpoints</h3>
                        <div className="border border-border rounded-lg overflow-hidden">
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-transparent border-border">
                                        <TableHead className="text-muted-foreground">Endpoint</TableHead>
                                        <TableHead className="text-muted-foreground">Avg</TableHead>
                                        <TableHead className="text-muted-foreground">P95</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {slowestEndpoints.map((endpoint, index) => (
                                        <TableRow
                                            key={index}
                                            className="border-border hover:bg-accent cursor-pointer transition-colors"
                                        >
                                            <TableCell className="font-mono text-sm">{endpoint.endpoint}</TableCell>
                                            <TableCell className="text-yellow-500">{endpoint.avgLatency}</TableCell>
                                            <TableCell className="text-red-500">{endpoint.p95Latency}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Error Spikes & AI Insights */}
            <div className="grid gap-4 lg:grid-cols-2">
                {/* Error Spikes Detector */}
                <Card className="p-6 bg-card border-l-4 border-l-red-500">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-red-500" />
                            <h3 className="text-lg font-semibold">Recent Error Spikes</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                                <div className="flex items-start justify-between mb-2">
                                    <p className="font-mono text-sm font-medium">POST /login</p>
                                    <Badge variant="destructive" className="text-xs">High</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Error rate jumped from 0.4% to 3.1% at 14:32
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">2 minutes ago</p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* AI Insight Summary */}
                <Card className="p-6 bg-card border-border">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-primary" />
                                <h3 className="text-lg font-semibold">AI Summary</h3>
                            </div>
                            <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                                <RefreshCw className="w-4 h-4 text-muted-foreground" />
                            </button>
                        </div>
                        <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg">
                            <ul className="space-y-3">
                                {aiInsights.map((insight, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                        <span className="text-foreground">{insight}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 pt-3 border-t border-primary/10">
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" />
                                    AI generated
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Footer Metadata */}
            <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                <p>Last updated: {getTimeSinceUpdate()}</p>
                <p>Data source: Live traffic</p>
            </div>
        </div>
    );
}
