import { Link } from 'react-router-dom';
import { FileText, Clock, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CTPODashboard = () => {
  const chartData = [
    { name: 'Bus', requests: 8 },
    { name: 'Medical', requests: 5 },
    { name: 'Hostel', requests: 6 },
    { name: 'Internship', requests: 4 },
    { name: 'Event', requests: 5 },
    { name: 'Library', requests: 2 },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 p-8 text-white shadow-lg">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Welcome, Dr. R. Sharma!</h1>
            <p className="text-violet-100 max-w-md">
              CTPO | CSM<br/>Manage and process permission requests from CSM students.
            </p>
          </div>
          <div className="hidden sm:block bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-right">
            <div className="font-bold text-sm tracking-wider uppercase">Empowering</div>
            <div className="font-bold text-sm tracking-wider uppercase text-violet-200">Students</div>
            <div className="font-bold text-sm tracking-wider uppercase mt-1">Enabling</div>
            <div className="font-bold text-sm tracking-wider uppercase text-violet-200">Opportunities</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: 'Total Requests', value: '28', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-200' },
          { title: 'Pending', value: '10', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-100', border: 'border-amber-200' },
          { title: 'Approved', value: '16', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-100', border: 'border-emerald-200' },
          { title: 'Rejected', value: '2', icon: XCircle, color: 'text-rose-600', bg: 'bg-rose-100', border: 'border-rose-200' },
        ].map((stat, i) => (
          <Card key={i} className={`shadow-sm border-2 ${stat.border}`}>
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg">Requests by Type</CardTitle>
              <CardDescription>Volume of requests this month</CardDescription>
            </div>
            <select className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-primary/20">
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="requests" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Recent Requests</CardTitle>
            <Button asChild variant="ghost" size="sm" className="text-primary h-8 px-2">
              <Link to="/ctpo/student-requests">View All <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead className="font-semibold text-slate-900">Student Name</TableHead>
                    <TableHead className="font-semibold text-slate-900">Type</TableHead>
                    <TableHead className="font-semibold text-slate-900">Date</TableHead>
                    <TableHead className="font-semibold text-slate-900">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { name: 'A. Tejaswi', type: 'Library', date: '10 Sep 2025', status: 'Pending' },
                    { name: 'B. Kiran', type: 'Outpass', date: '10 Sep 2025', status: 'Pending' },
                    { name: 'C. Meghana', type: 'Internship', date: '09 Sep 2025', status: 'Approved' },
                    { name: 'D. Sai Charan', type: 'Medical', date: '09 Sep 2025', status: 'Pending' },
                    { name: 'E. Vaishnavi', type: 'Event', date: '08 Sep 2025', status: 'Approved' },
                  ].map((req, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-semibold text-slate-800">{req.name}</TableCell>
                      <TableCell className="text-slate-600">{req.type}</TableCell>
                      <TableCell className="text-slate-500 text-sm">{req.date}</TableCell>
                      <TableCell>
                        {req.status === 'Approved' ? (
                          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none rounded-md px-2 py-0.5"><CheckCircle2 className="w-3 h-3 mr-1" /> {req.status}</Badge>
                        ) : (
                          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-none rounded-md px-2 py-0.5"><Clock className="w-3 h-3 mr-1" /> {req.status}</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CTPODashboard;

