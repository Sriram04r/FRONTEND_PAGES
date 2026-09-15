import { ChevronDown, Download, FileSpreadsheet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const HODReports = () => {
  const handleDownload = (filename) => {
    const content = "This is a simulated document download for: " + filename;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const branchData = [
    { name: 'CSEM', requests: 12 },
    { name: 'CAI', requests: 6 },
    { name: 'CSD', requests: 9 },
    { name: 'AID', requests: 7 },
    { name: 'Cyber', requests: 10 },
  ];

  const typeData = [
    { name: 'Hostel', value: 42, color: '#8b5cf6' },
    { name: 'Day Scholar', value: 26, color: '#cbd5e1' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Department Reports</h1>
          <p className="text-slate-500 mt-1">View and analyze permission data across all branches.</p>
        </div>
      </div>

      <Card className="shadow-sm border-slate-200">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end mb-8">
            <div>
              <label className="text-sm font-semibold text-slate-600 block mb-2">From Date</label>
              <Input type="date" defaultValue="2025-09-01" className="h-10 bg-slate-50 border-slate-200" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600 block mb-2">To Date</label>
              <Input type="date" defaultValue="2025-09-30" className="h-10 bg-slate-50 border-slate-200" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600 block mb-2">Branch</label>
              <div className="relative">
                <select className="w-full pl-3 pr-10 h-10 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 appearance-none">
                  <option>All Branches</option>
                  <option>CSEM</option>
                  <option>CAI</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600 block mb-2">Permission Type</label>
              <div className="relative">
                <select className="w-full pl-3 pr-10 h-10 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 appearance-none">
                  <option>All Types</option>
                  <option>Hostel</option>
                  <option>Day Scholar</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
            <Button className="h-10 bg-purple-700 hover:bg-purple-800 text-white w-full">
              Generate Report
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="border-slate-100 shadow-none bg-slate-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold text-slate-800">Branch-wise Requests</CardTitle>
              </CardHeader>
              <CardContent className="h-48 pt-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={branchData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <Tooltip 
                      cursor={{ fill: '#f1f5f9' }}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="requests" fill="#a855f7" radius={[4, 4, 0, 0]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card className="border-slate-100 shadow-none bg-slate-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold text-slate-800">Permission Type Distribution</CardTitle>
              </CardHeader>
              <CardContent className="h-48 pt-0 pb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none flex-col pl-4 mt-2">
                  <span className="text-2xl font-bold text-slate-900">68</span>
                  <span className="text-xs text-slate-500 font-medium">Total</span>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={typeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="none"
                    >
                      {typeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      itemStyle={{ color: '#1e293b', fontWeight: 500 }}
                    />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#64748b' }} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card className="border-slate-100 shadow-none bg-slate-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold text-slate-800">Status Overview</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                      <span className="font-medium text-slate-700">Approved</span>
                    </div>
                    <span className="font-semibold text-slate-900">40 <span className="text-slate-400 text-sm font-normal">(59%)</span></span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                      <span className="font-medium text-slate-700">Pending</span>
                    </div>
                    <span className="font-semibold text-slate-900">20 <span className="text-slate-400 text-sm font-normal">(29%)</span></span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                      <span className="font-medium text-slate-700">Rejected</span>
                    </div>
                    <span className="font-semibold text-slate-900">8 <span className="text-slate-400 text-sm font-normal">(12%)</span></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 h-11 px-6" onClick={() => handleDownload('HOD_Permission_Report.pdf')}>
              <Download className="w-4 h-4 mr-2" /> Download PDF
            </Button>
            <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 h-11 px-6" onClick={() => handleDownload('HOD_Permission_Data.xlsx')}>
              <FileSpreadsheet className="w-4 h-4 mr-2" /> Export Excel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HODReports;

