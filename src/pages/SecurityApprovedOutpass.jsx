import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Search, Calendar } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

const SecurityApprovedOutpass = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const approvedOutpassData = [
    { id: 1, name: 'Ravi Teja', roll: '23K1A0501', purpose: 'Library', validTill: '10:00 AM' },
    { id: 2, name: 'Anjali', roll: '23K1A0123', purpose: 'Medical', validTill: '11:00 AM' },
    { id: 3, name: 'Kiran', roll: '23K1A0345', purpose: 'Personal', validTill: '01:00 PM' },
    { id: 4, name: 'Deepika', roll: '23K1A0678', purpose: 'Library', validTill: '02:00 PM' },
    { id: 5, name: 'Mahesh', roll: '23K1A0789', purpose: 'Other', validTill: '04:00 PM' },
    { id: 6, name: 'Neha', roll: '23K1A0987', purpose: 'Medical', validTill: '05:00 PM' },
    { id: 7, name: 'Sravan', roll: '23K1A0211', purpose: 'Personal', validTill: '06:00 PM' },
    { id: 8, name: 'Pooja', roll: '23K1A0654', purpose: 'Library', validTill: '06:30 PM' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Security Portal</h1>
        <p className="text-sm text-slate-500 mt-1">List of students with approved outpass</p>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden bg-white">
        
        {/* Search and Filter */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input 
              type="text" 
              placeholder="Search by name or roll number..." 
              className="pl-9 bg-slate-50 border-slate-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative w-full sm:w-auto shrink-0">
            <Button variant="outline" className="w-full sm:w-auto justify-start text-left font-normal border-slate-200 text-slate-700 bg-white hover:bg-slate-50">
              <Calendar className="mr-2 h-4 w-4 text-indigo-600" />
              10 Sep 2025
            </Button>
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
                <TableHead className="font-bold text-slate-700">Valid Till</TableHead>
                <TableHead className="font-bold text-slate-700 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {approvedOutpassData.map((student, index) => (
                <TableRow key={student.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-500">{index + 1}</TableCell>
                  <TableCell className="font-semibold text-slate-800">{student.name}</TableCell>
                  <TableCell className="font-medium text-slate-600">{student.roll}</TableCell>
                  <TableCell className="text-slate-600">{student.purpose}</TableCell>
                  <TableCell className="text-slate-600 font-medium">{student.validTill}</TableCell>
                  <TableCell className="text-center">
                    <Button 
                      size="sm" 
                      className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold px-6"
                      onClick={() => navigate('/security/outpass-document')}
                    >
                      View
                    </Button>
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

export default SecurityApprovedOutpass;
