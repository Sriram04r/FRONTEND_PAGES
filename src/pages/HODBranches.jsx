import { Link } from 'react-router-dom';
import { ChevronDown, Monitor, GraduationCap, Database, Cpu, Shield, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const HODBranches = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Branches - CSE Department</h1>
          <p className="text-slate-500 mt-1">Select a branch to view student requests and details.</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-slate-600">Academic Year:</span>
          <div className="relative">
            <select className="pl-4 pr-10 h-10 rounded-lg border border-slate-200 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 appearance-none">
              <option>2025 - 2026</option>
              <option>2024 - 2025</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <Card className="shadow-sm border-slate-200">
        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow className="hover:bg-transparent border-slate-100">
                <TableHead className="w-16 font-semibold text-slate-600">#</TableHead>
                <TableHead className="font-semibold text-slate-600">Branch Code</TableHead>
                <TableHead className="font-semibold text-slate-600">Branch Name</TableHead>
                <TableHead className="text-center font-semibold text-slate-600">Hostel<br />Requests</TableHead>
                <TableHead className="text-center font-semibold text-slate-600">Day Scholar<br />Requests</TableHead>
                <TableHead className="text-center font-semibold text-slate-600">Total</TableHead>
                <TableHead className="text-center font-semibold text-slate-600">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-slate-50 border-slate-100">
                <TableCell className="font-medium text-slate-600">1</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3 font-semibold text-slate-900">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Monitor className="w-4 h-4" />
                    </div>
                    CSM
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">Artificial Intelligence & Machine Learning</TableCell>
                <TableCell className="text-center font-semibold text-blue-600">8</TableCell>
                <TableCell className="text-center font-semibold text-emerald-600">4</TableCell>
                <TableCell className="text-center font-bold text-rose-500">12</TableCell>
                <TableCell className="text-center">
                  <Button variant="secondary" size="sm" asChild className="h-8 bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <Link to="/hod/student-requests">View</Link>
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow className="hover:bg-slate-50 border-slate-100">
                <TableCell className="font-medium text-slate-600">2</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3 font-semibold text-slate-900">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    CAI
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">Artificial Intelligence</TableCell>
                <TableCell className="text-center font-semibold text-blue-600">4</TableCell>
                <TableCell className="text-center font-semibold text-emerald-600">2</TableCell>
                <TableCell className="text-center font-bold text-rose-500">6</TableCell>
                <TableCell className="text-center">
                  <Button variant="secondary" size="sm" asChild className="h-8 bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <Link to="/hod/student-requests">View</Link>
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow className="hover:bg-slate-50 border-slate-100">
                <TableCell className="font-medium text-slate-600">3</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3 font-semibold text-slate-900">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
                      <Database className="w-4 h-4" />
                    </div>
                    CSD
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">Data Science</TableCell>
                <TableCell className="text-center font-semibold text-blue-600">5</TableCell>
                <TableCell className="text-center font-semibold text-emerald-600">4</TableCell>
                <TableCell className="text-center font-bold text-rose-500">9</TableCell>
                <TableCell className="text-center">
                  <Button variant="secondary" size="sm" asChild className="h-8 bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <Link to="/hod/student-requests">View</Link>
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow className="hover:bg-slate-50 border-slate-100">
                <TableCell className="font-medium text-slate-600">4</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3 font-semibold text-slate-900">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Cpu className="w-4 h-4" />
                    </div>
                    AID
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">Artificial Intelligence & Data Science</TableCell>
                <TableCell className="text-center font-semibold text-blue-600">4</TableCell>
                <TableCell className="text-center font-semibold text-emerald-600">3</TableCell>
                <TableCell className="text-center font-bold text-rose-500">7</TableCell>
                <TableCell className="text-center">
                  <Button variant="secondary" size="sm" asChild className="h-8 bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <Link to="/hod/student-requests">View</Link>
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow className="hover:bg-slate-50 border-slate-100">
                <TableCell className="font-medium text-slate-600">5</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3 font-semibold text-slate-900">
                    <div className="w-8 h-8 rounded-lg bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center">
                      <Shield className="w-4 h-4" />
                    </div>
                    CSC
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">Cyber Security</TableCell>
                <TableCell className="text-center font-semibold text-blue-600">6</TableCell>
                <TableCell className="text-center font-semibold text-emerald-600">4</TableCell>
                <TableCell className="text-center font-bold text-rose-500">10</TableCell>
                <TableCell className="text-center">
                  <Button variant="secondary" size="sm" asChild className="h-8 bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <Link to="/hod/student-requests">View</Link>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center text-slate-500 flex items-center justify-center gap-2 text-sm font-medium">
        <Info className="w-4 h-4 text-slate-400" />
        <span>Click on <strong className="text-slate-700">View</strong> to see branch-wise detailed requests (Hostel & Day Scholar).</span>
      </div>
    </div>
  );
};

export default HODBranches;

