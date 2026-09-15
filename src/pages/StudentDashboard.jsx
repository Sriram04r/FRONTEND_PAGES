import { Link } from 'react-router-dom';
import { LayoutDashboard, CheckCircle2, Clock, XCircle, ArrowRight, Bus, Stethoscope, Home, Briefcase, Calendar, BookOpen, UserMinus, MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const StudentDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative overflow-hidden rounded-2xl p-8 text-white bg-[url('/campus-bg.png')] bg-cover bg-center shadow-lg">
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm z-0"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Hello, Siva Kumar!</h1>
          <p className="text-white/80 text-lg">Manage your permissions and stay updated.</p>
          <div className="mt-6 inline-block bg-white text-primary px-4 py-2 rounded-lg font-bold shadow-sm">
            LEARN â€¢ GROW â€¢ BELONG
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-xl text-primary">
              <LayoutDashboard className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">5</h3>
              <p className="text-sm text-slate-500 font-medium">Total Requests</p>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-emerald-500/10 p-4 rounded-xl text-emerald-500">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">3</h3>
              <p className="text-sm text-slate-500 font-medium">Approved</p>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-amber-500/10 p-4 rounded-xl text-amber-500">
              <Clock className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">1</h3>
              <p className="text-sm text-slate-500 font-medium">Pending</p>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-destructive/10 p-4 rounded-xl text-destructive">
              <XCircle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">1</h3>
              <p className="text-sm text-slate-500 font-medium">Rejected</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none shadow-md bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-slate-100">
              <CardTitle className="text-xl">Request a Permission</CardTitle>
              <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary-foreground hover:bg-primary">
                <Link to="/student/permission-request">View All <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[ 
                  { icon: Bus, label: 'Bus', color: 'text-blue-500', bg: 'bg-blue-500/10' },
                  { icon: Stethoscope, label: 'Medical', color: 'text-rose-500', bg: 'bg-rose-500/10' },
                  { icon: Home, label: 'Hostel', color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
                  { icon: Briefcase, label: 'Internship', color: 'text-amber-500', bg: 'bg-amber-500/10' },
                  { icon: Calendar, label: 'Event', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
                  { icon: BookOpen, label: 'Library', color: 'text-cyan-500', bg: 'bg-cyan-500/10', link: '/student/library-permission' },
                  { icon: UserMinus, label: 'Outpass', color: 'text-violet-500', bg: 'bg-violet-500/10' },
                  { icon: MoreHorizontal, label: 'Other', color: 'text-slate-500', bg: 'bg-slate-500/10' },
                ].map((item, index) => {
                  const content = (
                    <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group bg-slate-50 hover:bg-white text-center gap-3">
                      <div className={`${item.bg} ${item.color} p-3 rounded-full group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">{item.label}</span>
                    </div>
                  );
                  return item.link ? (
                    <Link to={item.link} key={index} className="block">{content}</Link>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-slate-100">
              <CardTitle className="text-xl">Recent Requests</CardTitle>
              <Button variant="ghost" size="sm" asChild className="text-primary">
                <Link to="/student/my-requests">View All</Link>
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
                    <TableHead className="w-16 pl-6">#</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right pr-6">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium pl-6">1</TableCell>
                    <TableCell>Library</TableCell>
                    <TableCell className="text-slate-500">10 Sep 2025</TableCell>
                    <TableCell className="text-right pr-6"><Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600">Approved</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium pl-6">2</TableCell>
                    <TableCell>Outpass</TableCell>
                    <TableCell className="text-slate-500">08 Sep 2025</TableCell>
                    <TableCell className="text-right pr-6"><Badge variant="secondary" className="bg-amber-500/20 text-amber-700 hover:bg-amber-500/30">Pending</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium pl-6">3</TableCell>
                    <TableCell>Medical</TableCell>
                    <TableCell className="text-slate-500">05 Sep 2025</TableCell>
                    <TableCell className="text-right pr-6"><Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600">Approved</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <Card className="border-none shadow-md bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-slate-100">
              <CardTitle className="text-xl">Announcements</CardTitle>
              <Button variant="link" size="sm" asChild className="text-primary px-0">
                <Link to="/student/notifications">View All</Link>
              </Button>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {[
                  { title: 'Campus Fest registrations are open!', date: 'Sep 12, 2025', color: 'bg-primary' },
                  { title: 'Library will be closed on 16th Sep', date: 'Sep 10, 2025', color: 'bg-destructive' },
                  { title: 'Submit your internship details early', date: 'Sep 09, 2025', color: 'bg-amber-500' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 shadow-sm ${item.color}`}></div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 leading-tight mb-1">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

