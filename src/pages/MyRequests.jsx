import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';

const MyRequests = () => {
  const [filter, setFilter] = useState('All');

  const requests = [
    { id: 1, type: 'Library', date: '10 Sep 2025', trackingId: 'LIB2025091001', status: 'Approved' },
    { id: 2, type: 'Outpass', date: '08 Sep 2025', trackingId: 'OUT2025090803', status: 'Pending' },
    { id: 3, type: 'Medical', date: '05 Sep 2025', trackingId: 'MED2025090507', status: 'Approved' },
    { id: 4, type: 'Event', date: '01 Sep 2025', trackingId: 'EVN2025090102', status: 'Rejected' },
    { id: 5, type: 'Bus', date: '28 Aug 2025', trackingId: 'BUS2025082804', status: 'Approved' },
  ];

  const filteredRequests = requests.filter(req => filter === 'All' ? true : req.status === filter);

  const counts = {
    All: requests.length,
    Pending: requests.filter(r => r.status === 'Pending').length,
    Approved: requests.filter(r => r.status === 'Approved').length,
    Rejected: requests.filter(r => r.status === 'Rejected').length,
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-emerald-200"><CheckCircle2 className="w-3 h-3 mr-1" /> Approved</Badge>;
      case 'Pending':
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200"><Clock className="w-3 h-3 mr-1" /> Pending</Badge>;
      case 'Rejected':
        return <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200 border-rose-200"><XCircle className="w-3 h-3 mr-1" /> Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">My Requests</h1>
        <p className="text-slate-500 mt-1">Track the status of your permission requests.</p>
      </div>

      <Card className="shadow-sm border-slate-200">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2 mb-6">
            <Button 
              variant={filter === 'All' ? 'default' : 'outline'} 
              className={`rounded-full ${filter !== 'All' ? 'text-slate-600 bg-slate-50' : 'shadow-sm'}`}
              onClick={() => setFilter('All')}
            >
              All ({counts.All})
            </Button>
            <Button 
              variant={filter === 'Pending' ? 'default' : 'outline'} 
              className={`rounded-full ${filter !== 'Pending' ? 'text-slate-600 bg-slate-50' : 'shadow-sm'}`}
              onClick={() => setFilter('Pending')}
            >
              Pending ({counts.Pending})
            </Button>
            <Button 
              variant={filter === 'Approved' ? 'default' : 'outline'} 
              className={`rounded-full ${filter !== 'Approved' ? 'text-slate-600 bg-slate-50' : 'shadow-sm'}`}
              onClick={() => setFilter('Approved')}
            >
              Approved ({counts.Approved})
            </Button>
            <Button 
              variant={filter === 'Rejected' ? 'default' : 'outline'} 
              className={`rounded-full ${filter !== 'Rejected' ? 'text-slate-600 bg-slate-50' : 'shadow-sm'}`}
              onClick={() => setFilter('Rejected')}
            >
              Rejected ({counts.Rejected})
            </Button>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="w-[80px] text-center font-semibold text-slate-900">#</TableHead>
                  <TableHead className="font-semibold text-slate-900">Permission Type</TableHead>
                  <TableHead className="font-semibold text-slate-900">Date</TableHead>
                  <TableHead className="text-center font-semibold text-slate-900">Tracking ID</TableHead>
                  <TableHead className="text-center font-semibold text-slate-900">Status</TableHead>
                  <TableHead className="text-right font-semibold text-slate-900">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequests.length > 0 ? (
                  filteredRequests.map((request) => (
                    <TableRow key={request.id} className="hover:bg-slate-50/50 transition-colors">
                      <TableCell className="text-center font-medium text-slate-500">{request.id}</TableCell>
                      <TableCell className="font-semibold text-slate-800">{request.type}</TableCell>
                      <TableCell className="text-slate-600">{request.date}</TableCell>
                      <TableCell className="text-center">
                        <span className="font-mono text-xs text-slate-600 bg-slate-100 rounded px-2 py-1 border border-slate-200">
                          {request.trackingId}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">{getStatusBadge(request.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                          <Link to="/student/request-tracking">
                            <Eye className="w-4 h-4 mr-2" /> View
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center text-slate-500">
                      No requests found for this status.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyRequests;

