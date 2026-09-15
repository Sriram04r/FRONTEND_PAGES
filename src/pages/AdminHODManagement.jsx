import React from 'react';
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

const AdminHODManagement = () => {
  const hodsData = [
    { id: 1, name: 'Dr. R. Sharma', college: 'KIED', dept: 'CSE', branch: 'CSE-A', email: 'rsharma@kied.edu', status: 'Active' },
    { id: 2, name: 'Dr. L. Meena', college: 'KIEK', dept: 'AID', branch: 'AID-B', email: 'lmeena@kiek.edu', status: 'Active' },
    { id: 3, name: 'Dr. P. Rao', college: 'KIEW', dept: 'Cyber', branch: 'Cyber-A', email: 'prao@kiew.edu', status: 'Active' },
    { id: 4, name: 'Dr. S. Naik', college: 'KIED', dept: 'CAI', branch: 'CAI-B', email: 'snaik@kied.edu', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">HOD Management</h1>
        <p className="text-sm text-slate-500 mt-1">View and manage HODs across all colleges.</p>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden bg-white">
        
        {/* Filters */}
        <div className="p-4 bg-white border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="w-full sm:w-48">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">College</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-slate-50 border-slate-200 h-9">
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
            <div className="w-full sm:w-48">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">Department</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-slate-50 border-slate-200 h-9">
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="cse">CSE</SelectItem>
                  <SelectItem value="aid">AID</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6 shrink-0 shadow-sm mt-auto h-9 w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Add HOD
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold text-slate-600 w-[50px]">#</TableHead>
                <TableHead className="font-semibold text-slate-600">Name</TableHead>
                <TableHead className="font-semibold text-slate-600">College</TableHead>
                <TableHead className="font-semibold text-slate-600">Department</TableHead>
                <TableHead className="font-semibold text-slate-600">Branch</TableHead>
                <TableHead className="font-semibold text-slate-600">Email</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">Status</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hodsData.map((hod) => (
                <TableRow key={hod.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-500">{hod.id}</TableCell>
                  <TableCell className="font-semibold text-indigo-900">{hod.name}</TableCell>
                  <TableCell className="font-medium text-slate-700">{hod.college}</TableCell>
                  <TableCell className="font-medium text-slate-700">{hod.dept}</TableCell>
                  <TableCell className="font-medium text-slate-700">{hod.branch}</TableCell>
                  <TableCell className="text-slate-500 font-medium">{hod.email}</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-200">
                      {hod.status}
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

export default AdminHODManagement;
