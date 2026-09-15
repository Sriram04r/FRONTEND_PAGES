import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Eye, CheckCircle2, XCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useState } from 'react';

const HODMyApprovals = () => {
  const [filter, setFilter] = useState('All');

  const approvals = [
    { id: 1, name: 'C. Meghana', branch: 'CSD', type: 'Hostel', date: '09 Sep 2025', status: 'Approved' },
    { id: 2, name: 'K. Divya', branch: 'CSEM', type: 'Day Scholar', date: '08 Sep 2025', status: 'Approved' },
    { id: 3, name: 'L. Harish', branch: 'CSEM', type: 'Day Scholar', date: '08 Sep 2025', status: 'Rejected' },
    { id: 4, name: 'M. Pavan', branch: 'AID', type: 'Hostel', date: '07 Sep 2025', status: 'Approved' },
    { id: 5, name: 'S. Sneha', branch: 'CAI', type: 'Day Scholar', date: '07 Sep 2025', status: 'Approved' },
  ];

  const filteredApprovals = approvals.filter(req => {
    if (filter === 'All') return true;
    return req.status === filter;
  });

  const counts = {
    All: approvals.length,
    Approved: approvals.filter(r => r.status === 'Approved').length,
    Rejected: approvals.filter(r => r.status === 'Rejected').length,
    Pending: approvals.filter(r => r.status === 'Pending').length,
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-emerald-200"><CheckCircle2 className="w-3 h-3 mr-1" /> Approved</Badge>;
      case 'Rejected':
        return <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200 border-rose-200"><XCircle className="w-3 h-3 mr-1" /> Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">My Approvals</h1>
        <p className="text-slate-500 mt-1">Track all the requests you have processed.</p>
      </div>

      <Card className="shadow-sm border-slate-200">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2 mb-6">
            <Button 
              variant={filter === 'All' ? 'default' : 'outline'} 
              className={`rounded-full ${filter !== 'All' ? 'text-slate-600 bg-slate-50' : 'shadow-sm bg-purple-700 hover:bg-purple-800 text-white'}`}
              onClick={() => setFilter('All')}
            >
              All ({counts.All})
            </Button>
            <Button 
              variant={filter === 'Approved' ? 'default' : 'outline'} 
              className={`rounded-full ${filter !== 'Approved' ? 'text-slate-600 bg-slate-50' : 'shadow-sm bg-purple-700 hover:bg-purple-800 text-white'}`}
              onClick={() => setFilter('Approved')}
            >
              Approved ({counts.Approved})
            </Button>
            <Button 
              variant={filter === 'Rejected' ? 'default' : 'outline'} 
              className={`rounded-full ${filter !== 'Rejected' ? 'text-slate-600 bg-slate-50' : 'shadow-sm bg-purple-700 hover:bg-purple-800 text-white'}`}
              onClick={() => setFilter('Rejected')}
            >
              Rejected ({counts.Rejected})
            </Button>
            <Button 
              variant={filter === 'Pending' ? 'default' : 'outline'} 
              className={`rounded-full ${filter !== 'Pending' ? 'text-slate-600 bg-slate-50' : 'shadow-sm bg-purple-700 hover:bg-purple-800 text-white'}`}
              onClick={() => setFilter('Pending')}
            >
              Pending ({counts.Pending})
            </Button>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="w-[80px] font-semibold text-slate-900 text-center">#</TableHead>
                  <TableHead className="font-semibold text-slate-900">Student Name</TableHead>
                  <TableHead className="font-semibold text-slate-900">Branch</TableHead>
                  <TableHead className="font-semibold text-slate-900">Permission Type</TableHead>
                  <TableHead className="font-semibold text-slate-900">Date</TableHead>
                  <TableHead className="font-semibold text-slate-900 text-center">Status</TableHead>
                  <TableHead className="text-right font-semibold text-slate-900">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApprovals.length > 0 ? (
                  filteredApprovals.map((row) => (
                    <TableRow key={row.id} className="hover:bg-slate-50/50 transition-colors">
                      <TableCell className="font-medium text-slate-500 text-center">{row.id}</TableCell>
                      <TableCell className="font-semibold text-slate-800">{row.name}</TableCell>
                      <TableCell><Badge variant="outline" className="font-mono text-xs">{row.branch}</Badge></TableCell>
                      <TableCell className="text-slate-600">{row.type}</TableCell>
                      <TableCell className="text-slate-500">{row.date}</TableCell>
                      <TableCell className="text-center">{getStatusBadge(row.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button asChild variant="ghost" size="sm" className="text-purple-700 hover:text-purple-800 hover:bg-purple-100">
                          <Link to="/hod/request-details">
                            <Eye className="w-4 h-4 mr-2" /> View
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center text-slate-500">
                      No approvals found for this category.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-100 pt-6">
            <div className="text-sm text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-900">{filteredApprovals.length > 0 ? 1 : 0}</span> to <span className="font-bold text-slate-900">{filteredApprovals.length}</span> of <span className="font-bold text-slate-900">{counts.All}</span> entries
            </div>
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon" className="w-8 h-8 rounded-lg text-slate-500">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="default" size="icon" className="w-8 h-8 rounded-lg bg-purple-700 hover:bg-purple-800">1</Button>
              <Button variant="outline" size="icon" className="w-8 h-8 rounded-lg text-slate-500">2</Button>
              <Button variant="outline" size="icon" className="w-8 h-8 rounded-lg text-slate-500">3</Button>
              <span className="px-2 text-slate-400">...</span>
              <Button variant="outline" size="icon" className="w-8 h-8 rounded-lg text-slate-500">8</Button>
              <Button variant="outline" size="icon" className="w-8 h-8 rounded-lg text-slate-500">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HODMyApprovals;

