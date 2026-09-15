import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
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

const AdminStudentManagement = () => {
  const studentsData = [
    { id: 1, roll: '22A91A0501', name: 'A. Tejaswi', dept: 'CSE', year: '3rd Year', email: 'atejaswi@kied.edu', status: 'Active' },
    { id: 2, roll: '22A91A0502', name: 'B. Kiran', dept: 'AID', year: '3rd Year', email: 'bkiran@kiek.edu', status: 'Active' },
    { id: 3, roll: '22A91A0503', name: 'C. Meghana', dept: 'Cyber', year: '3rd Year', email: 'cmeghana@kiew.edu', status: 'Active' },
    { id: 4, roll: '22A91A0504', name: 'D. Pavan', dept: 'CAI', year: '3rd Year', email: 'dpavan@kied.edu', status: 'Active' },
    { id: 5, roll: '22A91A0505', name: 'E. Sneha', dept: 'DS', year: '3rd Year', email: 'esneha@kiek.edu', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Student Management</h1>
        <p className="text-sm text-slate-500 mt-1">View students across all colleges.</p>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden bg-white">
        
        {/* Filters */}
        <div className="p-4 bg-white border-b border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">College</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-slate-50 border-slate-200 h-9 text-xs">
                  <SelectValue placeholder="All Colleges" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Colleges</SelectItem>
                  <SelectItem value="kied">KIED</SelectItem>
                  <SelectItem value="kiek">KIEK</SelectItem>
                  <SelectItem value="kiew">KIEW</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
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
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">Branch</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-slate-50 border-slate-200 h-9 text-xs">
                  <SelectValue placeholder="All Branches" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Branches</SelectItem>
                  <SelectItem value="csea">CSE-A</SelectItem>
                  <SelectItem value="cseb">CSE-B</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold text-slate-600 w-[50px]">#</TableHead>
                <TableHead className="font-semibold text-slate-600">Roll No.</TableHead>
                <TableHead className="font-semibold text-slate-600">Name</TableHead>
                <TableHead className="font-semibold text-slate-600">Department</TableHead>
                <TableHead className="font-semibold text-slate-600">Year</TableHead>
                <TableHead className="font-semibold text-slate-600">Email</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentsData.map((student) => (
                <TableRow key={student.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-500">{student.id}</TableCell>
                  <TableCell className="font-semibold text-indigo-900">{student.roll}</TableCell>
                  <TableCell className="font-medium text-slate-700">{student.name}</TableCell>
                  <TableCell className="font-medium text-slate-700">{student.dept}</TableCell>
                  <TableCell className="text-slate-600 font-medium">{student.year}</TableCell>
                  <TableCell className="text-slate-500 font-medium">{student.email}</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-200">
                      {student.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 bg-white">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <select className="border border-slate-200 rounded p-1 bg-slate-50">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>entries</span>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="w-7 h-7">&lt;</Button>
            <Button variant="default" size="icon" className="w-7 h-7 bg-indigo-600 text-white hover:bg-indigo-700">1</Button>
            <Button variant="outline" size="icon" className="w-7 h-7">2</Button>
            <Button variant="outline" size="icon" className="w-7 h-7">3</Button>
            <Button variant="outline" size="icon" className="w-7 h-7">4</Button>
            <Button variant="outline" size="icon" className="w-7 h-7">5</Button>
            <Button variant="outline" size="icon" className="w-7 h-7">&gt;</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminStudentManagement;
