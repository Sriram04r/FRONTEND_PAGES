import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

const AdminMyApprovals = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const tabs = [
    { id: 'pending', label: 'Pending', count: 26 },
    { id: 'approved', label: 'Approved', count: 0 },
    { id: 'rejected', label: 'Rejected', count: 0 },
  ];

  const approvalsData = [
    { id: 1, type: 'Faculty Registration', by: 'Dr. S. Kumar', college: 'KIED', date: '10 Sep 2025' },
    { id: 2, type: 'HOD Forward Request', by: 'Dr. L. Meena', college: 'KIEK', date: '09 Sep 2025' },
    { id: 3, type: 'Department Addition', by: 'HOD - CSE', college: 'KIED', date: '09 Sep 2025' },
    { id: 4, type: 'Branch Creation', by: 'HOD - AID', college: 'KIEK', date: '08 Sep 2025' },
    { id: 5, type: 'Student Leave', by: 'E. Sneha', college: 'KIEW', date: '08 Sep 2025' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">My Approvals</h1>
        <p className="text-sm text-slate-500 mt-1">Requests pending for your approval.</p>
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
              {tab.label} {tab.count > 0 && `(${tab.count})`}
            </button>
          ))}
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
                <TableHead className="font-semibold text-slate-600 text-center min-w-[200px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {approvalsData.map((app) => (
                <TableRow key={app.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-500">{app.id}</TableCell>
                  <TableCell className="font-semibold text-indigo-900">{app.type}</TableCell>
                  <TableCell className="font-medium text-slate-700">{app.by}</TableCell>
                  <TableCell className="font-medium text-slate-700">{app.college}</TableCell>
                  <TableCell className="text-slate-600 font-medium">{app.date}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Button size="sm" className="h-8 px-4 text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-white">Approve</Button>
                      <Button size="sm" className="h-8 px-4 text-xs font-semibold bg-rose-500 hover:bg-rose-600 text-white">Reject</Button>
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

export default AdminMyApprovals;
