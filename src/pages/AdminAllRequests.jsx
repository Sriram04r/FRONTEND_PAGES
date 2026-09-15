import React, { useState } from 'react';
import { Search } from 'lucide-react';
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

const AdminAllRequests = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const requestsData = [
    { id: 1, type: 'Hostel Permission', by: 'A. Tejaswi', college: 'KIED', date: '10 Sep 2025', status: 'Pending', statusColor: 'bg-amber-100 text-amber-700 border-amber-200' },
    { id: 2, type: 'Scholarship', by: 'B. Kiran', college: 'KIEK', date: '12 Sep 2025', status: 'Approved', statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    { id: 3, type: 'Event Permission', by: 'C. Meghana', college: 'KIEW', date: '09 Sep 2025', status: 'Pending', statusColor: 'bg-amber-100 text-amber-700 border-amber-200' },
    { id: 4, type: 'Internship', by: 'D. Pavan', college: 'KIED', date: '09 Sep 2025', status: 'Pending', statusColor: 'bg-amber-100 text-amber-700 border-amber-200' },
    { id: 5, type: 'Leave Request', by: 'E. Sneha', college: 'KIEK', date: '08 Sep 2025', status: 'Rejected', statusColor: 'bg-rose-100 text-rose-700 border-rose-200' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">All Requests</h1>
        <p className="text-sm text-slate-500 mt-1">Manage various requests from faculty, HODs and students.</p>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden bg-white">
        
        {/* Filters */}
        <div className="p-4 bg-white border-b border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
            <div className="w-full sm:w-48">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 block">Request Type</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-slate-50 border-slate-200 h-9 text-xs">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="hostel">Hostel</SelectItem>
                  <SelectItem value="leave">Leave</SelectItem>
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
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input 
              placeholder="Search..." 
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
                <TableHead className="font-semibold text-slate-600">Request Type</TableHead>
                <TableHead className="font-semibold text-slate-600">Requested By</TableHead>
                <TableHead className="font-semibold text-slate-600">College</TableHead>
                <TableHead className="font-semibold text-slate-600">Date</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">Status</TableHead>
                <TableHead className="font-semibold text-slate-600 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requestsData.map((req) => (
                <TableRow key={req.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-500">{req.id}</TableCell>
                  <TableCell className="font-semibold text-indigo-900">{req.type}</TableCell>
                  <TableCell className="font-medium text-slate-700">{req.by}</TableCell>
                  <TableCell className="font-medium text-slate-700">{req.college}</TableCell>
                  <TableCell className="text-slate-600 font-medium">{req.date}</TableCell>
                  <TableCell className="text-center">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${req.statusColor}`}>
                      {req.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button variant="outline" size="sm" className="h-7 px-4 text-xs bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100">View</Button>
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

export default AdminAllRequests;
