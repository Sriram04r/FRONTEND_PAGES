import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
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

const AdminUserManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const usersData = [
    { id: 1, name: 'Admin User', email: 'admin@system.edu', role: 'Super Admin', college: 'System Wide', status: 'Active' },
    { id: 2, name: 'Dr. R. Sharma', email: 'rsharma@kied.edu', role: 'HOD', college: 'KIED', status: 'Active' },
    { id: 3, name: 'Ms. V. Priya', email: 'vpriya@kiek.edu', role: 'Faculty', college: 'KIEK', status: 'Active' },
    { id: 4, name: 'A. Tejaswi', email: 'atejaswi@kied.edu', role: 'Student', college: 'KIED', status: 'Active' },
    { id: 5, name: 'Dr. K. Rao', email: 'krao@kiew.edu', role: 'HOD', college: 'KIEW', status: 'Inactive' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">User Management</h1>
        <p className="text-sm text-slate-500 mt-1">Manage all system users and their roles.</p>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden bg-white">
        
        {/* Controls */}
        <div className="p-4 bg-white border-b border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64 lg:w-72">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">Search Users</label>
              <Search className="w-4 h-4 absolute left-3 top-9 text-slate-400" />
              <Input 
                placeholder="Search by name, email..." 
                className="pl-9 h-9 bg-slate-50 border-slate-200 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-48">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">Role</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-slate-50 border-slate-200 h-9 text-xs">
                  <SelectValue placeholder="All Roles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="admin">Super Admin</SelectItem>
                  <SelectItem value="hod">HOD</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
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
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6 shrink-0 shadow-sm h-9 w-full md:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold text-slate-600 w-[50px]">#</TableHead>
                <TableHead className="font-semibold text-slate-600">Name</TableHead>
                <TableHead className="font-semibold text-slate-600">Email</TableHead>
                <TableHead className="font-semibold text-slate-600">Role</TableHead>
                <TableHead className="font-semibold text-slate-600">College</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">Status</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersData.map((user) => (
                <TableRow key={user.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-500">{user.id}</TableCell>
                  <TableCell className="font-semibold text-indigo-900">{user.name}</TableCell>
                  <TableCell className="text-slate-600 font-medium">{user.email}</TableCell>
                  <TableCell className="font-medium text-slate-700">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider 
                      ${user.role === 'Super Admin' ? 'bg-purple-100 text-purple-700' : 
                        user.role === 'HOD' ? 'bg-blue-100 text-blue-700' :
                        user.role === 'Faculty' ? 'bg-indigo-100 text-indigo-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                      {user.role}
                    </span>
                  </TableCell>
                  <TableCell className="font-medium text-slate-700">{user.college}</TableCell>
                  <TableCell className="text-center">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border
                      ${user.status === 'Active' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                      {user.status}
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

export default AdminUserManagement;
