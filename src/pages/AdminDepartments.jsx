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

const AdminDepartments = () => {
  const [selectedCollege, setSelectedCollege] = useState('kied');

  const departmentsData = [
    { id: 1, code: 'CSE', name: 'Computer Science & Engineering', hod: 'Dr. R. Sharma', faculty: 9, students: 120, status: 'Active' },
    { id: 2, code: 'AID', name: 'Artificial Intelligence & Data Science', hod: 'Dr. L. Meena', faculty: 6, students: 85, status: 'Active' },
    { id: 3, code: 'Cyber', name: 'Cyber Security', hod: 'Dr. P. Rao', faculty: 7, students: 72, status: 'Active' },
    { id: 4, code: 'CAI', name: 'Computer Applications', hod: 'Dr. S. Naik', faculty: 7, students: 65, status: 'Active' },
  ];

  const branchesData = [
    { id: 1, name: 'CSE-A', hod: 'Dr. R. Sharma', faculty: 3, students: 40, status: 'Active' },
    { id: 2, name: 'CSE-B', hod: 'Dr. M. Reddy', faculty: 3, students: 38, status: 'Active' },
    { id: 3, name: 'CSE-C', hod: 'Dr. N. Iyer', faculty: 3, students: 42, status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Departments Management</h1>
        <p className="text-sm text-slate-500 mt-1">Manage departments for each college.</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="w-full sm:w-96">
          <label className="text-xs font-semibold text-slate-500 uppercase mb-1.5 block">College</label>
          <Select value={selectedCollege} onValueChange={setSelectedCollege}>
            <SelectTrigger className="w-full bg-slate-50 border-slate-200 h-10">
              <SelectValue placeholder="Select College" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kied">KIED - Kakinada Institute Of Engineering & Technology - I</SelectItem>
              <SelectItem value="kiek">KIEK - Kakinada Institute Of Engineering & Technology - II</SelectItem>
              <SelectItem value="kiew">KIEW - Kakinada Institute Of Engineering & Technology - Womens</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6 shrink-0 shadow-sm mt-auto w-full sm:w-auto h-10">
          <Plus className="w-4 h-4 mr-2" />
          Add Department
        </Button>
      </div>

      {/* Departments Table */}
      <Card className="shadow-sm border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-indigo-50/50">
              <TableRow className="hover:bg-transparent border-b-indigo-100">
                <TableHead className="font-semibold text-slate-700 w-[50px]">#</TableHead>
                <TableHead className="font-semibold text-slate-700">Department Code</TableHead>
                <TableHead className="font-semibold text-slate-700 min-w-[250px]">Department Name</TableHead>
                <TableHead className="font-semibold text-slate-700">HOD Name</TableHead>
                <TableHead className="font-semibold text-slate-700 text-center">No. of Faculty</TableHead>
                <TableHead className="font-semibold text-slate-700 text-center">No. of Students</TableHead>
                <TableHead className="font-semibold text-slate-700 text-center">Status</TableHead>
                <TableHead className="font-semibold text-slate-700 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {departmentsData.map((dept) => (
                <TableRow key={dept.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-500">{dept.id}</TableCell>
                  <TableCell className="font-semibold text-indigo-900">{dept.code}</TableCell>
                  <TableCell className="font-medium text-slate-700">{dept.name}</TableCell>
                  <TableCell className="text-slate-600 font-medium">{dept.hod}</TableCell>
                  <TableCell className="text-center font-medium text-slate-700">{dept.faculty}</TableCell>
                  <TableCell className="text-center font-medium text-slate-700">{dept.students}</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">
                      {dept.status}
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

      {/* Branches Header */}
      <div className="pt-2">
        <h2 className="text-lg font-bold text-slate-800 tracking-tight">Branches under CSE</h2>
      </div>

      {/* Branches Table */}
      <Card className="shadow-sm border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50/80">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold text-slate-600 w-[50px]">#</TableHead>
                <TableHead className="font-semibold text-slate-600">Branch Name</TableHead>
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
                  <TableCell className="text-slate-600 font-medium">{branch.hod}</TableCell>
                  <TableCell className="text-center font-medium text-slate-700">{branch.faculty}</TableCell>
                  <TableCell className="text-center font-medium text-slate-700">{branch.students}</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">
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

export default AdminDepartments;
