import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const StudentRequests = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Student Requests</h1>
          <p className="text-slate-500 mt-1">View and process permission requests from CSM students.</p>
        </div>
      </div>

      <Card className="shadow-sm border-slate-200">
        <div className="flex overflow-x-auto p-4 border-b border-slate-100 gap-2 hide-scrollbar">
          <Button variant="default" className="rounded-full bg-blue-600 hover:bg-blue-700 h-9 px-4">All (28)</Button>
          <Button variant="outline" className="rounded-full h-9 px-4 border-slate-200 text-slate-600 hover:bg-slate-50">Pending (10)</Button>
          <Button variant="outline" className="rounded-full h-9 px-4 border-slate-200 text-slate-600 hover:bg-slate-50">Approved (16)</Button>
          <Button variant="outline" className="rounded-full h-9 px-4 border-slate-200 text-slate-600 hover:bg-slate-50">Rejected (2)</Button>
        </div>

        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input className="pl-9 h-10 bg-white border-slate-200" placeholder="Search by student name or roll number..." />
          </div>
          <Button variant="outline" className="h-10 bg-white border-slate-200 text-slate-700 flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </Button>
        </div>

        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow className="hover:bg-transparent border-slate-100">
                <TableHead className="w-16 font-semibold text-slate-600">#</TableHead>
                <TableHead className="font-semibold text-slate-600">Student Name</TableHead>
                <TableHead className="font-semibold text-slate-600">Permission Type</TableHead>
                <TableHead className="font-semibold text-slate-600">Date</TableHead>
                <TableHead className="font-semibold text-slate-600">Status</TableHead>
                <TableHead className="text-right font-semibold text-slate-600">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { id: 1, name: 'A. Tejaswi', type: 'Library', date: '10 Sep 2025', status: 'Pending' },
                { id: 2, name: 'B. Kiran', type: 'Outpass', date: '10 Sep 2025', status: 'Pending' },
                { id: 3, name: 'C. Meghana', type: 'Internship', date: '09 Sep 2025', status: 'Approved' },
                { id: 4, name: 'D. Sai Charan', type: 'Medical', date: '09 Sep 2025', status: 'Pending' },
                { id: 5, name: 'E. Vaishnavi', type: 'Event', date: '08 Sep 2025', status: 'Approved' },
                { id: 6, name: 'F. Pranavi', type: 'Bus', date: '08 Sep 2025', status: 'Pending' },
                { id: 7, name: 'G. Nikhil', type: 'Hostel', date: '07 Sep 2025', status: 'Pending' },
                { id: 8, name: 'H. Sandeep', type: 'Outpass', date: '07 Sep 2025', status: 'Approved' },
              ].map((row) => (
                <TableRow key={row.id} className="hover:bg-slate-50 border-slate-100">
                  <TableCell className="font-medium text-slate-600">{row.id}</TableCell>
                  <TableCell className="font-medium text-slate-900">{row.name}</TableCell>
                  <TableCell className="text-slate-600">{row.type}</TableCell>
                  <TableCell className="text-slate-600">{row.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`font-medium
                      ${row.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : ''}
                      ${row.status === 'Pending' ? 'bg-amber-50 text-amber-700 border-amber-200' : ''}
                      ${row.status === 'Rejected' ? 'bg-rose-50 text-rose-700 border-rose-200' : ''}
                    `}>
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="secondary" size="sm" asChild className="h-8 bg-slate-100 text-slate-600 hover:bg-slate-200">
                      <Link to="/ctpo/request-details">View</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
            <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-700">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" /> 
              Select All
            </label>
            <div className="flex gap-3">
              <Button variant="outline" disabled className="bg-white border-slate-200 text-slate-400 h-9">Approve</Button>
              <Button variant="outline" disabled className="bg-white border-slate-200 text-slate-400 h-9">Reject</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentRequests;
