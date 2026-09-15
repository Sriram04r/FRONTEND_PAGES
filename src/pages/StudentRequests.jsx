import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useState } from 'react';

const StudentRequests = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const requests = [
    { id: 1, name: 'A. Tejaswi', type: 'Library', date: '10 Sep 2025', status: 'Pending' },
    { id: 2, name: 'B. Kiran', type: 'Outpass', date: '10 Sep 2025', status: 'Pending' },
    { id: 3, name: 'C. Meghana', type: 'Internship', date: '09 Sep 2025', status: 'Approved' },
    { id: 4, name: 'D. Sai Charan', type: 'Medical', date: '09 Sep 2025', status: 'Pending' },
    { id: 5, name: 'E. Vaishnavi', type: 'Event', date: '08 Sep 2025', status: 'Approved' },
    { id: 6, name: 'F. Pranavi', type: 'Bus', date: '08 Sep 2025', status: 'Pending' },
    { id: 7, name: 'G. Nikhil', type: 'Hostel', date: '07 Sep 2025', status: 'Pending' },
    { id: 8, name: 'H. Sandeep', type: 'Outpass', date: '07 Sep 2025', status: 'Approved' },
  ];

  const filteredRequests = requests.filter(req => {
    const matchesFilter = filter === 'All' || req.status === filter;
    const matchesSearch = req.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          req.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const counts = {
    All: requests.length,
    Pending: requests.filter(r => r.status === 'Pending').length,
    Approved: requests.filter(r => r.status === 'Approved').length,
    Rejected: requests.filter(r => r.status === 'Rejected').length,
  };

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
          <Button 
            variant={filter === 'All' ? 'default' : 'outline'} 
            className={`rounded-full h-9 px-4 ${filter !== 'All' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-blue-600 hover:bg-blue-700'}`}
            onClick={() => setFilter('All')}
          >
            All ({counts.All})
          </Button>
          <Button 
            variant={filter === 'Pending' ? 'default' : 'outline'} 
            className={`rounded-full h-9 px-4 ${filter !== 'Pending' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            onClick={() => setFilter('Pending')}
          >
            Pending ({counts.Pending})
          </Button>
          <Button 
            variant={filter === 'Approved' ? 'default' : 'outline'} 
            className={`rounded-full h-9 px-4 ${filter !== 'Approved' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            onClick={() => setFilter('Approved')}
          >
            Approved ({counts.Approved})
          </Button>
          <Button 
            variant={filter === 'Rejected' ? 'default' : 'outline'} 
            className={`rounded-full h-9 px-4 ${filter !== 'Rejected' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            onClick={() => setFilter('Rejected')}
          >
            Rejected ({counts.Rejected})
          </Button>
        </div>

        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              className="pl-9 h-10 bg-white border-slate-200" 
              placeholder="Search by student name or permission type..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="h-10 bg-white border-slate-200 text-slate-700 flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </Button>
        </div>

        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow className="hover:bg-transparent border-slate-100">
                <TableHead className="w-16 text-center font-semibold text-slate-600">#</TableHead>
                <TableHead className="font-semibold text-slate-600">Student Name</TableHead>
                <TableHead className="font-semibold text-slate-600">Permission Type</TableHead>
                <TableHead className="font-semibold text-slate-600">Date</TableHead>
                <TableHead className="text-center font-semibold text-slate-600">Status</TableHead>
                <TableHead className="text-right font-semibold text-slate-600">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((row) => (
                  <TableRow key={row.id} className="hover:bg-slate-50 border-slate-100">
                    <TableCell className="text-center font-medium text-slate-600">{row.id}</TableCell>
                    <TableCell className="font-medium text-slate-900">{row.name}</TableCell>
                    <TableCell className="text-slate-600">{row.type}</TableCell>
                    <TableCell className="text-slate-600">{row.date}</TableCell>
                    <TableCell className="text-center">
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
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center text-slate-500">
                    No requests found matching your filters.
                  </TableCell>
                </TableRow>
              )}
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

