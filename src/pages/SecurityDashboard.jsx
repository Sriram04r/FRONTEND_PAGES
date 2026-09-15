import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Users, LogOut, FileCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

const SecurityDashboard = () => {
  const navigate = useNavigate();

  const approvedOutpassData = [
    { id: 1, name: 'Ravi Teja', roll: '23K1A0501', purpose: 'Library', outTime: '10:00 AM' },
    { id: 2, name: 'Anjali', roll: '23K1A0123', purpose: 'Medical', outTime: '11:00 AM' },
    { id: 3, name: 'Kiran', roll: '23K1A0345', purpose: 'Personal', outTime: '01:00 PM' },
    { id: 4, name: 'Deepika', roll: '23K1A0678', purpose: 'Library', outTime: '02:00 PM' },
    { id: 5, name: 'Mahesh', roll: '23K1A0789', purpose: 'Other', outTime: '04:00 PM' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="shadow-sm border-slate-200">
          <CardContent className="p-6 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">8</div>
              <div className="text-sm font-semibold text-slate-700">Approved Outpass</div>
              <div className="text-xs text-slate-500">(To be Verified)</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardContent className="p-6 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
              <LogOut className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">6</div>
              <div className="text-sm font-semibold text-slate-700">Exited Today</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardContent className="p-6 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
              <FileCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">2</div>
              <div className="text-sm font-semibold text-slate-700">Inside (Approved)</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Approved Outpass Table */}
      <Card className="shadow-sm border-slate-200 bg-white">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800">Today's Approved Outpass</h2>
          <Button variant="link" className="text-indigo-600 hover:text-indigo-700 h-auto p-0" onClick={() => navigate('/security/approved-outpass')}>
            View All &rarr;
          </Button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-bold text-slate-700 w-[50px]">#</TableHead>
                <TableHead className="font-bold text-slate-700">Student Name</TableHead>
                <TableHead className="font-bold text-slate-700">Roll No</TableHead>
                <TableHead className="font-bold text-slate-700">Purpose</TableHead>
                <TableHead className="font-bold text-slate-700">Out Time</TableHead>
                <TableHead className="font-bold text-slate-700 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {approvedOutpassData.map((student, index) => (
                <TableRow key={student.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-500">{index + 1}</TableCell>
                  <TableCell className="font-semibold text-slate-800">{student.name}</TableCell>
                  <TableCell className="font-medium text-slate-600">{student.roll}</TableCell>
                  <TableCell className="text-slate-600">{student.purpose}</TableCell>
                  <TableCell className="text-slate-600 font-medium">{student.outTime}</TableCell>
                  <TableCell className="text-center">
                    <Button 
                      size="sm" 
                      className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold px-6"
                      onClick={() => navigate('/security/outpass-document')}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default SecurityDashboard;
