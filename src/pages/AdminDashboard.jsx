import React from 'react';
import {
  Building2, Users, GraduationCap, FileText, Clock,
  MoreVertical, CheckCircle, XCircle, AlertCircle, UserCheck, Settings
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const AdminDashboard = () => {
  const collegeData = [
    {
      id: 'KIET',
      name: 'Kakinada Institute Of Engineering & Technology - I',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=300&h=150',
      stats: { depts: 4, hods: 5, faculty: 28, students: 342 },
      color: 'bg-indigo-50 border-indigo-100'
    },
    {
      id: 'KIEK',
      name: 'Kakinada Institute Of Engineering & Technology - II',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=300&h=150',
      stats: { depts: 4, hods: 4, faculty: 26, students: 318 },
      color: 'bg-blue-50 border-blue-100'
    },
    {
      id: 'KIEW',
      name: 'Kakinada Institute Of Engineering & Technology - Womens',
      image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=300&h=150',
      stats: { depts: 4, hods: 5, faculty: 30, students: 356 },
      color: 'bg-emerald-50 border-emerald-100'
    }
  ];

  const facultyData = [
    { name: 'KIED', HOD: 5, Faculty: 28 },
    { name: 'KIEK', HOD: 4, Faculty: 26 },
    { name: 'KIEW', HOD: 5, Faculty: 30 },
  ];

  const requestStatusData = [
    { name: 'Approved', value: 256, color: '#10b981' },
    { name: 'Pending', value: 48, color: '#f59e0b' },
    { name: 'Rejected', value: 32, color: '#ef4444' },
    { name: 'In Progress', value: 132, color: '#3b82f6' },
  ];

  const recentActivities = [
    { id: 1, type: 'registration', title: 'New Faculty Registration - Dr. S. Kumar (KIET)', time: '10:25 AM', icon: UserCheck, color: 'text-emerald-500 bg-emerald-100' },
    { id: 2, type: 'approval', title: 'HOD Approval Request - CSE (KIEK)', time: '09:40 AM', icon: FileText, color: 'text-amber-500 bg-amber-100' },
    { id: 3, type: 'request', title: 'Student Leave Request', time: '08:15 AM', icon: Clock, color: 'text-blue-500 bg-blue-100' },
    { id: 4, type: 'system', title: 'New Department Added - DS (KIEW)', time: '07:30 AM', icon: Building2, color: 'text-indigo-500 bg-indigo-100' },
    { id: 5, type: 'system', title: 'System Update', time: '06:30 AM', icon: Settings, color: 'text-slate-500 bg-slate-100' },
  ];

  // Needs UserCheck, Settings to be imported from lucide-react if used in recent activities
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Welcome, Admin!</h1>
        <p className="text-sm text-slate-500 mt-1">Manage all colleges, departments, users and requests from one place.</p>
      </div>

      {/* College Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collegeData.map((college) => (
          <Card key={college.id} className={`overflow-hidden border-2 shadow-sm hover:shadow-md transition-shadow ${college.color}`}>
            <div className="h-32 w-full relative">
              <img src={college.image} alt={college.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-4 text-white">
                <h3 className="font-bold text-lg leading-tight">{college.id}</h3>
                <p className="text-xs opacity-90 line-clamp-1">{college.name}</p>
              </div>
            </div>
            <CardContent className="p-4 bg-white/60 backdrop-blur-sm">
              <div className="grid grid-cols-4 gap-2 text-center divide-x divide-slate-200">
                <div>
                  <div className="text-lg font-bold text-slate-800">{college.stats.depts}</div>
                  <div className="text-[10px] uppercase font-semibold text-slate-500 mt-0.5">Departments</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-800">{college.stats.hods}</div>
                  <div className="text-[10px] uppercase font-semibold text-slate-500 mt-0.5">HODs</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-800">{college.stats.faculty}</div>
                  <div className="text-[10px] uppercase font-semibold text-slate-500 mt-0.5">Faculty</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-800">{college.stats.students}</div>
                  <div className="text-[10px] uppercase font-semibold text-slate-500 mt-0.5">Students</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="shadow-sm border-emerald-100 bg-emerald-50/30">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">84</div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Total HODs</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-amber-100 bg-amber-50/30">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">286</div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Total Faculty</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-rose-100 bg-rose-50/30">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">1,016</div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Total Students</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-indigo-100 bg-indigo-50/30">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">468</div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Total Requests</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-orange-100 bg-orange-50/30">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">48</div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Pending Approvals</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* College-wise Faculty Count */}
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center justify-between">
              College-wise Faculty Count
              <Button variant="ghost" size="icon" className="h-6 w-6"><MoreVertical className="w-4 h-4 text-slate-400" /></Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={facultyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <RechartsTooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar dataKey="HOD" fill="#4f46e5" radius={[4, 4, 0, 0]} maxBarSize={40} />
                  <Bar dataKey="Faculty" fill="#0ea5e9" radius={[4, 4, 0, 0]} maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Request Status */}
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center justify-between">
              Request Status
              <Button variant="ghost" size="icon" className="h-6 w-6"><MoreVertical className="w-4 h-4 text-slate-400" /></Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="h-[200px] w-full relative flex items-center justify-center mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={requestStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {requestStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-bold text-slate-800">468</span>
                <span className="text-xs text-slate-500 font-medium">Requests</span>
              </div>
            </div>

            <div className="w-full mt-6 grid grid-cols-2 gap-y-3 gap-x-2">
              {requestStatusData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-slate-600">{item.name}</span>
                  </div>
                  <span className="font-semibold text-slate-800">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center justify-between">
              Recent Activities
              <Button variant="ghost" size="sm" className="h-8 text-xs text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100">View All</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mt-2">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className={`mt-0.5 p-1.5 rounded-md shrink-0 ${activity.color}`}>
                    <activity.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 leading-tight">
                      {activity.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default AdminDashboard;
