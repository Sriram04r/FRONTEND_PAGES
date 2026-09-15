import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

const SecurityStudentRecords = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const recordsData = [
    { id: 1, name: 'Ravi Teja', roll: '23K1A0501', dept: 'CSE', year: '3rd Year', outpasses: 4, status: 'Inside' },
    { id: 2, name: 'Anjali', roll: '23K1A0123', dept: 'AID', year: '2nd Year', outpasses: 2, status: 'Inside' },
    { id: 3, name: 'Kiran', roll: '23K1A0345', dept: 'Cyber', year: '3rd Year', outpasses: 6, status: 'Exited' },
    { id: 4, name: 'Deepika', roll: '23K1A0678', dept: 'CAI', year: '1st Year', outpasses: 1, status: 'Inside' },
    { id: 5, name: 'Mahesh', roll: '23K1A0789', dept: 'DS', year: '4th Year', outpasses: 12, status: 'Inside' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Security Portal</h1>
        <p className="text-sm text-slate-500 mt-1">Search and view general student records</p>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden bg-white">
        
        {/* Filters */}
        <div className="p-4 bg-white border-b border-slate-200 flex flex-col md:flex-row justify-between gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
            <div className="w-full sm:w-48">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">Department</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-slate-50 border-slate-200 h-9 text-xs">
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="cse">CSE</SelectItem>
                  <SelectItem value="aid">AID</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-48">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">Status</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-slate-50 border-slate-200 h-9 text-xs">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="inside">Inside Campus</SelectItem>
                  <SelectItem value="exited">Exited</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="relative w-full md:w-64 mt-auto">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input 
              placeholder="Search student..." 
              className="pl-9 h-9 bg-slate-50 border-slate-200 text-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold text-slate-600 w-[50px]">#</TableHead>
                <TableHead className="font-semibold text-slate-600">Student Name</TableHead>
                <TableHead className="font-semibold text-slate-600">Roll No.</TableHead>
                <TableHead className="font-semibold text-slate-600">Department</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">Total Outpasses</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">Status</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recordsData.map((student) => (
                <TableRow key={student.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-500">{student.id}</TableCell>
                  <TableCell className="font-bold text-slate-800">{student.name}</TableCell>
                  <TableCell className="font-semibold text-slate-600">{student.roll}</TableCell>
                  <TableCell className="font-medium text-slate-600">{student.dept} ({student.year})</TableCell>
                  <TableCell className="text-center font-semibold text-slate-700">{student.outpasses}</TableCell>
                  <TableCell className="text-center">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border
                      ${student.status === 'Inside' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                      {student.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button variant="outline" size="sm" className="h-7 px-4 text-xs text-indigo-600 border-indigo-200 bg-indigo-50 hover:bg-indigo-100">
                      History
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

export default SecurityStudentRecords;
