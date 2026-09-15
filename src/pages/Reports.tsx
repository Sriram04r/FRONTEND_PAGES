import { FileText, Download, FileSpreadsheet, Bus, Stethoscope, Home, Briefcase, Calendar, BookOpen, UserMinus, MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Reports = () => {
  const chartData = [
    { name: 'Bus', Total: 6, Approved: 4, Pending: 2, Rejected: 0 },
    { name: 'Medical', Total: 4, Approved: 3, Pending: 1, Rejected: 0 },
    { name: 'Hostel', Total: 5, Approved: 4, Pending: 1, Rejected: 0 },
    { name: 'Internship', Total: 3, Approved: 2, Pending: 1, Rejected: 0 },
    { name: 'Event', Total: 4, Approved: 2, Pending: 1, Rejected: 1 },
    { name: 'Library', Total: 4, Approved: 2, Pending: 2, Rejected: 0 },
    { name: 'Others', Total: 2, Approved: 1, Pending: 0, Rejected: 1 },
  ];

  const pieData = [
    { name: 'Approved', value: 18, color: '#10b981' },
    { name: 'Pending', value: 8, color: '#f59e0b' },
    { name: 'Rejected', value: 2, color: '#ef4444' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Permission Reports</h1>
        <p className="text-slate-500 mt-1">View and analyze permission data for CSM branch.</p>
      </div>

      <Card className="shadow-sm border-slate-200">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-end bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex-1 space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">From Date</label>
              <Input type="date" defaultValue="2025-09-01" className="bg-white" />
            </div>
            <div className="flex-1 space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">To Date</label>
              <Input type="date" defaultValue="2025-09-30" className="bg-white" />
            </div>
            <Button className="h-10 px-8">Generate Report</Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <div className="col-span-2 md:col-span-3 lg:col-span-1 bg-primary text-primary-foreground p-4 rounded-xl shadow-sm flex flex-col justify-center items-center gap-2">
              <FileText className="w-8 h-8 opacity-80" />
              <div className="text-center">
                <h3 className="text-3xl font-bold">28</h3>
                <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Total Requests</p>
              </div>
            </div>
            {[
              { icon: Bus, label: 'Bus', count: 6, color: 'text-blue-500', bg: 'bg-blue-500/10' },
              { icon: Stethoscope, label: 'Medical', count: 4, color: 'text-rose-500', bg: 'bg-rose-500/10' },
              { icon: Home, label: 'Hostel', count: 5, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
              { icon: Briefcase, label: 'Internship', count: 3, color: 'text-amber-500', bg: 'bg-amber-500/10' },
              { icon: Calendar, label: 'Event', count: 4, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
              { icon: BookOpen, label: 'Library', count: 4, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
              { icon: UserMinus, label: 'Outpass', count: 0, color: 'text-violet-500', bg: 'bg-violet-500/10' },
              { icon: MoreHorizontal, label: 'Others', count: 2, color: 'text-slate-500', bg: 'bg-slate-500/10' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-white shadow-sm">
                <div className={`${stat.bg} ${stat.color} p-2 rounded-lg`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-700 leading-tight">{stat.count}</h3>
                  <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="lg:col-span-2 shadow-none border border-slate-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Requests by Category</CardTitle>
                <CardDescription>Breakdown of approved, pending, and rejected requests</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                    <Legend iconType="circle" wrapperStyle={{fontSize: '12px', paddingTop: '10px'}} />
                    <Bar dataKey="Approved" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
                    <Bar dataKey="Pending" stackId="a" fill="#f59e0b" />
                    <Bar dataKey="Rejected" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="shadow-none border border-slate-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Overall Status</CardTitle>
                <CardDescription>Approval rate across all categories</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex flex-col items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                    <Legend iconType="circle" wrapperStyle={{fontSize: '12px'}} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Permission Type Summary Data</h3>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead className="font-semibold text-slate-900">Permission Type</TableHead>
                    <TableHead className="font-semibold text-slate-900 text-center">Total</TableHead>
                    <TableHead className="font-semibold text-emerald-600 text-center">Approved</TableHead>
                    <TableHead className="font-semibold text-amber-600 text-center">Pending</TableHead>
                    <TableHead className="font-semibold text-rose-600 text-center">Rejected</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {chartData.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell className="font-medium text-slate-700">{row.name}</TableCell>
                      <TableCell className="text-center font-semibold">{row.Total}</TableCell>
                      <TableCell className="text-center text-emerald-600">{row.Approved}</TableCell>
                      <TableCell className="text-center text-amber-600">{row.Pending}</TableCell>
                      <TableCell className="text-center text-rose-600">{row.Rejected}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 h-12 text-base shadow-md">
              <Download className="mr-2 w-5 h-5" /> Download PDF Report
            </Button>
            <Button variant="outline" className="flex-1 h-12 text-base text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700">
              <FileSpreadsheet className="mr-2 w-5 h-5" /> Export as Excel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
