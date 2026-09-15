import { Link } from 'react-router-dom';
import { FileText, Clock, CheckCircle2, XCircle, ArrowRight, GraduationCap, Monitor, Database, Cpu, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const HODDashboard = () => {
  const pieData = [
    { name: 'Hostel', value: 14, color: '#8b5cf6' },
    { name: 'Day Scholar', value: 10, color: '#e2e8f0' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-700 to-fuchsia-700 p-8 text-white shadow-lg">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2 text-white">Welcome, Dr. R. Sharma</h1>
          <p className="text-purple-100 max-w-md">Head of Department – Computer Science & Engineering</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { title: 'Total Requests', value: '24', icon: FileText, color: 'text-blue-600', bg: 'bg-white/90', border: 'border-transparent' },
              { title: 'Pending', value: '12', icon: Clock, color: 'text-amber-600', bg: 'bg-white/90', border: 'border-transparent' },
              { title: 'Approved', value: '9', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-white/90', border: 'border-transparent' },
              { title: 'Rejected', value: '3', icon: XCircle, color: 'text-rose-600', bg: 'bg-white/90', border: 'border-transparent' },
            ].map((stat, i) => (
              <Card key={i} className={`shadow-sm bg-white/10 backdrop-blur-md border-white/20 text-white ${stat.border}`}>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{stat.value}</h3>
                    <p className="text-[10px] font-semibold text-purple-100 uppercase tracking-wider">{stat.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 mb-4">
        <h3 className="text-xl font-bold text-slate-900">Branches under CSE Department</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {[
          { name: 'CSEM', desc: 'Computer Science & Engineering', icon: Monitor, color: 'text-blue-600', bg: 'bg-blue-100', count: 12, hostel: 8, day: 4 },
          { name: 'CAI', desc: 'Computer Applications & Informatics', icon: GraduationCap, color: 'text-emerald-600', bg: 'bg-emerald-100', count: 6, hostel: 4, day: 2 },
          { name: 'CSD', desc: 'Computer Science & Data Science', icon: Database, color: 'text-rose-600', bg: 'bg-rose-100', count: 9, hostel: 5, day: 4 },
          { name: 'AID', desc: 'Artificial Intelligence & Data', icon: Cpu, color: 'text-blue-500', bg: 'bg-blue-50', count: 7, hostel: 4, day: 3 },
          { name: 'Cyber', desc: 'Cyber Security', icon: Shield, color: 'text-fuchsia-600', bg: 'bg-fuchsia-100', count: 10, hostel: 6, day: 4 },
        ].map((branch, i) => (
          <Card key={i} className="shadow-sm border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-2 py-1 rounded-bl-lg z-10">
              {branch.count} Requests
            </div>
            <CardContent className="p-5 flex flex-col h-full pt-8">
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${branch.bg} ${branch.color}`}>
                  <branch.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg text-slate-900">{branch.name}</h4>
              </div>
              <p className="text-xs text-slate-500 font-medium mb-4 flex-1">{branch.desc}</p>
              
              <div className="flex gap-2 mb-4 bg-slate-50 p-2 rounded-lg border border-slate-100">
                <div className="flex-1 text-center border-r border-slate-200">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Hostel</div>
                  <div className="font-bold text-slate-700">{branch.hostel}</div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Day Scholar</div>
                  <div className="font-bold text-slate-700">{branch.day}</div>
                </div>
              </div>
              
              <Button asChild variant="outline" className="w-full text-xs font-semibold bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 hover:text-purple-800">
                <Link to="/hod/student-requests">View Requests <ArrowRight className="w-3 h-3 ml-1" /></Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Recent Requests (All Branches)</CardTitle>
            <Button asChild variant="ghost" size="sm" className="text-primary h-8 px-2">
              <Link to="/hod/student-requests">View All <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead className="font-semibold text-slate-900">Student Name</TableHead>
                    <TableHead className="font-semibold text-slate-900">Branch</TableHead>
                    <TableHead className="font-semibold text-slate-900">Type</TableHead>
                    <TableHead className="font-semibold text-slate-900">Date</TableHead>
                    <TableHead className="font-semibold text-slate-900">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { name: 'A. Tejaswi', branch: 'CSEM', type: 'Hostel', date: '10 Sep 2025', status: 'Pending' },
                    { name: 'B. Kiran', branch: 'CAI', type: 'Day Scholar', date: '10 Sep 2025', status: 'Pending' },
                    { name: 'C. Meghana', branch: 'CSD', type: 'Hostel', date: '09 Sep 2025', status: 'Approved' },
                    { name: 'M. Pavan', branch: 'AID', type: 'Day Scholar', date: '09 Sep 2025', status: 'Pending' },
                    { name: 'K. Divya', branch: 'Cyber', type: 'Hostel', date: '08 Sep 2025', status: 'Rejected' },
                  ].map((req, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-semibold text-slate-800">{req.name}</TableCell>
                      <TableCell><Badge variant="outline" className="font-mono text-xs">{req.branch}</Badge></TableCell>
                      <TableCell className="text-slate-600">{req.type}</TableCell>
                      <TableCell className="text-slate-500 text-sm">{req.date}</TableCell>
                      <TableCell>
                        {req.status === 'Approved' ? (
                          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none rounded-md px-2 py-0.5"><CheckCircle2 className="w-3 h-3 mr-1" /> {req.status}</Badge>
                        ) : req.status === 'Rejected' ? (
                          <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200 border-none rounded-md px-2 py-0.5"><XCircle className="w-3 h-3 mr-1" /> {req.status}</Badge>
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

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Permission Type Distribution</CardTitle>
            <CardDescription>Breakdown of request categories</CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={70} outerRadius={90} paddingAngle={5} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Legend iconType="circle" wrapperStyle={{fontSize: '12px'}} verticalAlign="bottom" height={36}/>
                {/* Center text for the donut chart */}
                <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" className="fill-slate-900 text-3xl font-bold">
                  24
                </text>
                <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" className="fill-slate-500 text-xs font-semibold uppercase tracking-wider">
                  Total
                </text>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HODDashboard;
