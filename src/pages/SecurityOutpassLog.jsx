import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Search, CalendarDays } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

const SecurityOutpassLog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const logData = [
    { id: 1, name: 'Ravi Teja', roll: '23K1A0501', purpose: 'Library', exitTime: '10 Sep 2025, 10:05 AM', verifiedBy: 'Ramesh' },
    { id: 2, name: 'Anjali', roll: '23K1A0123', purpose: 'Medical', exitTime: '10 Sep 2025, 09:50 AM', verifiedBy: 'Ramesh' },
    { id: 3, name: 'Kiran', roll: '23K1A0345', purpose: 'Personal', exitTime: '09 Sep 2025, 04:20 PM', verifiedBy: 'Ramesh' },
    { id: 4, name: 'Mahesh', roll: '23K1A0789', purpose: 'Other', exitTime: '09 Sep 2025, 03:10 PM', verifiedBy: 'Ramesh' },
    { id: 5, name: 'Neha', roll: '23K1A0987', purpose: 'Medical', exitTime: '09 Sep 2025, 01:15 PM', verifiedBy: 'Ramesh' },
    { id: 6, name: 'Pooja', roll: '23K1A0654', purpose: 'Library', exitTime: '09 Sep 2025, 11:40 AM', verifiedBy: 'Ramesh' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Security Portal</h1>
        <p className="text-sm text-slate-500 mt-1">View all exit records (Approved Outpass only)</p>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden bg-white">
        
        {/* Filters */}
        <div className="p-4 border-b border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">From Date</label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input type="date" defaultValue="2025-09-09" className="pl-9 bg-slate-50 border-slate-200" />
            </div>
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">To Date</label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input type="date" defaultValue="2025-09-10" className="pl-9 bg-slate-50 border-slate-200" />
            </div>
          </div>

          <div className="space-y-1.5 relative">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input 
                type="text" 
                placeholder="Search by name or roll number..." 
                className="pl-9 bg-slate-50 border-slate-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-bold text-slate-700 w-[50px]">#</TableHead>
                <TableHead className="font-bold text-slate-700">Student Name</TableHead>
                <TableHead className="font-bold text-slate-700">Roll No</TableHead>
                <TableHead className="font-bold text-slate-700">Purpose</TableHead>
                <TableHead className="font-bold text-slate-700">Exit Time</TableHead>
                <TableHead className="font-bold text-slate-700 text-center">Verified By</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logData.map((record, index) => (
                <TableRow key={record.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-500">{index + 1}</TableCell>
                  <TableCell className="font-semibold text-slate-800">{record.name}</TableCell>
                  <TableCell className="font-medium text-slate-600">{record.roll}</TableCell>
                  <TableCell className="text-slate-600">{record.purpose}</TableCell>
                  <TableCell className="text-slate-600 font-medium">{record.exitTime}</TableCell>
                  <TableCell className="text-center font-medium text-slate-600">{record.verifiedBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
      
    </div>
  );
};

export default SecurityOutpassLog;
