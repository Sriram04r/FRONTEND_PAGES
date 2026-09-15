import { Link, useNavigate } from 'react-router-dom';
import { Search, Filter, ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useState } from 'react';

const HODStudentRequests = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const requests = [
    { id: 1, name: 'A. Tejaswi', roll: '23B210AH13', type: 'Hostel', category: 'Hostel', date: '10 Sep 2025', status: 'Pending' },
    { id: 2, name: 'S. Lahari', roll: '23B210AH16', type: 'Day Scholar', category: 'Day Scholar', date: '10 Sep 2025', status: 'Pending' },
    { id: 3, name: 'R. Charan', roll: '23B210AH18', type: 'Hostel', category: 'Hostel', date: '09 Sep 2025', status: 'Approved' },
    { id: 4, name: 'M. Pavan', roll: '23B210AH24', type: 'Day Scholar', category: 'Day Scholar', date: '09 Sep 2025', status: 'Pending' },
    { id: 5, name: 'K. Divya', roll: '23B210AH25', type: 'Hostel', category: 'Hostel', date: '08 Sep 2025', status: 'Rejected' },
    { id: 6, name: 'L. Harish', roll: '23B210AH26', type: 'Day Scholar', category: 'Day Scholar', date: '08 Sep 2025', status: 'Pending' },
  ];

  const filteredRequests = requests.filter(req => {
    if (filter === 'All') return true;
    return req.category === filter;
  });

  const counts = {
    All: requests.length,
    Hostel: requests.filter(r => r.category === 'Hostel').length,
    DayScholar: requests.filter(r => r.category === 'Day Scholar').length,
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => navigate('/hod/branches')} className="h-10 bg-white border-slate-200 text-slate-700 hidden sm:flex">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Branches
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">CSEM - Student Requests</h1>
            <p className="text-slate-500 mt-1">View and manage requests for CSEM branch.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-slate-600">Academic Year:</span>
          <div className="relative">
            <select className="pl-4 pr-10 h-10 rounded-lg border border-slate-200 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 appearance-none">
              <option>2025 - 2026</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <Card className="shadow-sm border-slate-200">
        <div className="flex overflow-x-auto p-4 border-b border-slate-100 gap-2 hide-scrollbar">
          <Button 
            variant={filter === 'All' ? 'default' : 'outline'} 
            className={`rounded-full h-9 px-4 ${filter !== 'All' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-purple-700 hover:bg-purple-800 text-white'}`}
            onClick={() => setFilter('All')}
          >
            All Requests ({counts.All})
          </Button>
          <Button 
            variant={filter === 'Hostel' ? 'default' : 'outline'} 
            className={`rounded-full h-9 px-4 ${filter !== 'Hostel' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-purple-700 hover:bg-purple-800 text-white'}`}
            onClick={() => setFilter('Hostel')}
          >
            Hostel ({counts.Hostel})
          </Button>
          <Button 
            variant={filter === 'Day Scholar' ? 'default' : 'outline'} 
            className={`rounded-full h-9 px-4 ${filter !== 'Day Scholar' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-purple-700 hover:bg-purple-800 text-white'}`}
            onClick={() => setFilter('Day Scholar')}
          >
            Day Scholar ({counts.DayScholar})
          </Button>
        </div>

        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row gap-4">
          <div className="flex gap-4 flex-1 md:flex-none">
            <div className="relative w-1/2 md:w-44">
              <select className="w-full pl-3 pr-10 h-10 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 appearance-none">
                <option>All Status</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
            <div className="relative w-1/2 md:w-44">
              <select className="w-full pl-3 pr-10 h-10 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 appearance-none">
                <option>All Categories</option>
                <option>Hostel</option>
                <option>Day Scholar</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
          
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input className="pl-9 h-10 bg-white border-slate-200" placeholder="Search by name or roll number..." />
          </div>
          <Button variant="default" className="h-10 bg-purple-700 hover:bg-purple-800 text-white flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </Button>
        </div>

        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow className="hover:bg-transparent border-slate-100">
                <TableHead className="w-16 font-semibold text-slate-600">#</TableHead>
                <TableHead className="font-semibold text-slate-600">Student Name</TableHead>
                <TableHead className="font-semibold text-slate-600">Roll No</TableHead>
                <TableHead className="font-semibold text-slate-600">Permission Type</TableHead>
                <TableHead className="font-semibold text-slate-600">Category</TableHead>
                <TableHead className="font-semibold text-slate-600">Date</TableHead>
                <TableHead className="font-semibold text-slate-600">Status</TableHead>
                <TableHead className="text-right font-semibold text-slate-600">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((row) => (
                  <TableRow key={row.id} className="hover:bg-slate-50 border-slate-100">
                    <TableCell className="font-medium text-slate-600">{row.id}</TableCell>
                    <TableCell className="font-medium text-slate-900">{row.name}</TableCell>
                    <TableCell className="text-slate-600">{row.roll}</TableCell>
                    <TableCell className="text-slate-600">{row.type}</TableCell>
                    <TableCell className="text-slate-600">{row.category}</TableCell>
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
                      <Button variant="secondary" size="sm" asChild className="h-8 bg-slate-100 text-purple-700 hover:bg-slate-200">
                        <Link to="/hod/request-details">View</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="h-24 text-center text-slate-500">
                    No requests found for this category.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          
          <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white">
            <div className="text-sm text-slate-500 font-medium">Showing 1 to {filteredRequests.length} of {counts.All} entries</div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="w-9 h-9 text-slate-500 hover:text-slate-900"><ChevronLeft className="w-4 h-4" /></Button>
              <Button variant="default" className="w-9 h-9 bg-purple-700 hover:bg-purple-800 p-0 text-white font-semibold">1</Button>
              <Button variant="outline" className="w-9 h-9 text-slate-700 p-0">2</Button>
              <Button variant="outline" size="icon" className="w-9 h-9 text-slate-500 hover:text-slate-900"><ChevronRight className="w-4 h-4" /></Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center text-slate-500 flex items-center justify-center gap-2 text-sm font-medium">
        <Info className="w-4 h-4 text-slate-400" />
        <span>Click on <strong className="text-slate-700">View</strong> to open request details.</span>
      </div>
    </div>
  );
};

export default HODStudentRequests;

