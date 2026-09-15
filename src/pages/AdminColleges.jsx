import React, { useState } from 'react';
import { Search, Plus, Filter, GraduationCap, Building2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

const AdminColleges = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const collegesData = [
    {
      id: 1,
      name: 'Kakinada Institute Of Engineering & Technology - I',
      code: 'KIET',
      location: 'Kakinada',
      depts: 4,
      hods: 5,
      faculty: 28,
      students: 342,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Kakinada Institute Of Engineering & Technology - II',
      code: 'KIEK',
      location: 'Kakinada',
      depts: 4,
      hods: 4,
      faculty: 26,
      students: 318,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Kakinada Institute Of Engineering & Technology - Womens',
      code: 'KIEW',
      location: 'Kakinada',
      depts: 4,
      hods: 5,
      faculty: 30,
      students: 356,
      status: 'Active'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Colleges Management</h1>
        <p className="text-sm text-slate-500 mt-1">Manage all colleges under the system.</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button variant="outline" size="icon" className="shrink-0 bg-emerald-50 border-emerald-200 text-emerald-600 hover:bg-emerald-100 hover:text-emerald-700 rounded-lg">
            <Filter className="w-4 h-4" />
          </Button>
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search college name or code..."
              className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500 rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6 shrink-0 shadow-sm w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Add College
        </Button>
      </div>

      {/* Table */}
      <Card className="shadow-sm border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50/80">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold text-slate-600 w-[50px]">#</TableHead>
                <TableHead className="font-semibold text-slate-600 min-w-[250px]">College Name</TableHead>
                <TableHead className="font-semibold text-slate-600">Code</TableHead>
                <TableHead className="font-semibold text-slate-600">Location</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">No. of<br />Departments</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">No. of<br />HODs</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">No. of<br />Faculty</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">No. of<br />Students</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {collegesData.map((college) => (
                <TableRow key={college.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-500">{college.id}</TableCell>
                  <TableCell className="font-medium text-indigo-900">{college.name}</TableCell>
                  <TableCell className="font-semibold text-slate-700">{college.code}</TableCell>
                  <TableCell className="text-slate-600 flex items-center gap-1.5 pt-4">
                    {/* Fake location pin just text to match style */}
                    <span className="text-indigo-600 font-bold text-lg leading-none mt-[-4px]">•</span>
                    {college.location}
                  </TableCell>
                  <TableCell className="text-center font-medium text-slate-700">{college.depts}</TableCell>
                  <TableCell className="text-center font-medium text-slate-700">{college.hods}</TableCell>
                  <TableCell className="text-center font-medium text-slate-700">{college.faculty}</TableCell>
                  <TableCell className="text-center font-medium text-slate-700">{college.students}</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">
                      {college.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* College-wise Summary Header */}
      <div>
        <h2 className="text-lg font-bold text-slate-800 tracking-tight">College-wise Summary</h2>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-sm border-indigo-100 bg-indigo-50/40 hover:shadow-md transition-shadow">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">KIET</div>
              <div className="text-sm font-medium text-slate-500">342 Students</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-blue-100 bg-blue-50/40 hover:shadow-md transition-shadow">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <Building2 className="w-7 h-7" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">KIEK</div>
              <div className="text-sm font-medium text-slate-500">318 Students</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-emerald-100 bg-emerald-50/40 hover:shadow-md transition-shadow">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <Building2 className="w-7 h-7" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">KIEW</div>
              <div className="text-sm font-medium text-slate-500">356 Students</div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
};

export default AdminColleges;
