import React, { useState } from 'react';
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

const AdminFacultyRegistrations = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const tabs = [
    { id: 'pending', label: 'Pending', count: 48 },
    { id: 'approved', label: 'Approved', count: 256 },
    { id: 'rejected', label: 'Rejected', count: 12 },
    { id: 'all', label: 'All', count: 316 },
  ];

  const facultyData = [
    { id: 1, name: 'Dr. S. Kumar', college: 'KIED', dept: 'CSE', branch: 'CSE-A', role: 'Approved', date: '10 Sep 2025', status: 'Approved', statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    { id: 2, name: 'Dr. L. Meena', college: 'KIEK', dept: 'AID', branch: 'AID-B', role: 'Approved', date: '10 Sep 2025', status: 'Approved', statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    { id: 3, name: 'Mr. P. Reddy', college: 'KIEW', dept: 'Cyber', branch: 'Cyber-A', role: 'Pending', date: '09 Sep 2025', status: 'Pending', statusColor: 'bg-amber-100 text-amber-700 border-amber-200' },
    { id: 4, name: 'Dr. K. Rao', college: 'KIED', dept: 'CE', branch: 'CE-B', role: 'Pending', date: '08 Sep 2025', status: 'Pending', statusColor: 'bg-amber-100 text-amber-700 border-amber-200' },
    { id: 5, name: 'Ms. V. Priya', college: 'KIEK', dept: 'CSE', branch: 'CSE-B', role: 'Pending', date: '08 Sep 2025', status: 'Pending', statusColor: 'bg-amber-100 text-amber-700 border-amber-200' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Faculty Registrations & Approvals</h1>
        <p className="text-sm text-slate-500 mt-1">Review and approve faculty registrations.</p>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden bg-white">
        
        {/* Tabs */}
        <div className="flex border-b border-slate-200 px-4 pt-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === tab.id 
                  ? 'border-indigo-600 text-indigo-700' 
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase mb-1.5 block">College</label>
            <Select defaultValue="all">
              <SelectTrigger className="bg-white border-slate-200">
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
            <label className="text-xs font-semibold text-slate-500 uppercase mb-1.5 block">Department</label>
            <Select defaultValue="all">
              <SelectTrigger className="bg-white border-slate-200">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="cse">CSE</SelectItem>
                <SelectItem value="aid">AID</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase mb-1.5 block">Branch</label>
            <Select defaultValue="all">
              <SelectTrigger className="bg-white border-slate-200">
                <SelectValue placeholder="All Branches" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="cse-a">CSE-A</SelectItem>
                <SelectItem value="cse-b">CSE-B</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase mb-1.5 block">Status</label>
            <Select defaultValue="all">
              <SelectTrigger className="bg-white border-slate-200">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-white">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold text-slate-600 w-[50px]">#</TableHead>
                <TableHead className="font-semibold text-slate-600">Name</TableHead>
                <TableHead className="font-semibold text-slate-600">College</TableHead>
                <TableHead className="font-semibold text-slate-600">Department</TableHead>
                <TableHead className="font-semibold text-slate-600">Branch</TableHead>
                <TableHead className="font-semibold text-slate-600">Role</TableHead>
                <TableHead className="font-semibold text-slate-600">Registered On</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center min-w-[200px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {facultyData.map((faculty) => (
                <TableRow key={faculty.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-500">{faculty.id}</TableCell>
                  <TableCell className="font-semibold text-indigo-900">{faculty.name}</TableCell>
                  <TableCell className="font-medium text-slate-700">{faculty.college}</TableCell>
                  <TableCell className="font-medium text-slate-700">{faculty.dept}</TableCell>
                  <TableCell className="font-medium text-slate-700">{faculty.branch}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${faculty.statusColor}`}>
                      {faculty.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-slate-600 font-medium">{faculty.date}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Button variant="outline" size="sm" className="h-7 px-3 text-xs bg-indigo-50 text-indigo-700 hover:text-indigo-800 border-indigo-200 hover:bg-indigo-100">View</Button>
                      <Button size="sm" className="h-7 px-3 text-xs bg-emerald-500 hover:bg-emerald-600 text-white">Approve</Button>
                      <Button size="sm" className="h-7 px-3 text-xs bg-rose-500 hover:bg-rose-600 text-white">Reject</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <select className="border border-slate-200 rounded p-1">
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

export default AdminFacultyRegistrations;
