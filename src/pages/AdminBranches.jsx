import React, { useState } from 'react';
import { Plus } from 'lucide-react';
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

const AdminBranches = () => {
  const [selectedCollege, setSelectedCollege] = useState('kiet');
  const [selectedDept, setSelectedDept] = useState('all');

  const branchesData = [
    { id: 1, name: 'CSE-A', dept: 'CSE', hod: 'Dr. R. Sharma', faculty: 3, students: 40, status: 'Active' },
    { id: 2, name: 'CSE-B', dept: 'CSE', hod: 'Dr. M. Reddy', faculty: 3, students: 38, status: 'Active' },
    { id: 3, name: 'CSE-C', dept: 'CSE', hod: 'Dr. N. Iyer', faculty: 3, students: 42, status: 'Active' },
    { id: 4, name: 'AID-A', dept: 'AID', hod: 'Dr. L. Meena', faculty: 3, students: 45, status: 'Active' },
    { id: 5, name: 'Cyber-A', dept: 'Cyber', hod: 'Dr. P. Rao', faculty: 4, students: 30, status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Branches Management</h1>
        <p className="text-sm text-slate-500 mt-1">Manage branches for each department across colleges.</p>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden bg-white">
        {/* Controls */}
        <div className="p-4 bg-white border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="w-full sm:w-64">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">College</label>
              <Select value={selectedCollege} onValueChange={setSelectedCollege}>
                <SelectTrigger className="bg-slate-50 border-slate-200 h-9 text-xs">
                  <SelectValue placeholder="Select College" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kiet">Kakinada Institute Of Engineering & Technology - I</SelectItem>
                  <SelectItem value="kiet2">Kakinada Institute Of Engineering & Technology - II</SelectItem>
                  <SelectItem value="kietw">Kakinada Institute Of Engineering & Technology - Womens</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-48">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">Department</label>
              <Select value={selectedDept} onValueChange={setSelectedDept}>
                <SelectTrigger className="bg-slate-50 border-slate-200 h-9 text-xs">
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="cse">CSE</SelectItem>
                  <SelectItem value="aid">AID</SelectItem>
                  <SelectItem value="cyber">Cyber Security</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6 shrink-0 shadow-sm mt-auto h-9 w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Add Branch
          </Button>
        </div>

        {/* Branches Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50/80">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold text-slate-600 w-[50px]">#</TableHead>
                <TableHead className="font-semibold text-slate-600">Branch Name</TableHead>
                <TableHead className="font-semibold text-slate-600">Department</TableHead>
                <TableHead className="font-semibold text-slate-600">HOD Name</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">No. of Faculty</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">No. of Students</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">Status</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {branchesData.map((branch) => (
                <TableRow key={branch.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-500">{branch.id}</TableCell>
                  <TableCell className="font-semibold text-indigo-900">{branch.name}</TableCell>
                  <TableCell className="font-medium text-slate-700">{branch.dept}</TableCell>
                  <TableCell className="text-slate-600 font-medium">{branch.hod}</TableCell>
                  <TableCell className="text-center font-medium text-slate-700">{branch.faculty}</TableCell>
                  <TableCell className="text-center font-medium text-slate-700">{branch.students}</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-200">
                      {branch.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Button variant="outline" size="sm" className="h-7 px-3 text-xs bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100">View</Button>
                      <Button variant="outline" size="sm" className="h-7 px-3 text-xs text-slate-600 hover:text-indigo-600">Edit</Button>
                    </div>
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

export default AdminBranches;
