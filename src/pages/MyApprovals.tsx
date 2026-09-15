import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, CheckCircle2, XCircle } from 'lucide-react';

const MyApprovals = () => {
  const approvals = [
    { id: 1, name: 'C. Meghana', type: 'Internship', date: '09 Sep 2025', status: 'Approved' },
    { id: 2, name: 'E. Vaishnavi', type: 'Event', date: '08 Sep 2025', status: 'Approved' },
    { id: 3, name: 'F. Pranavi', type: 'Bus', date: '08 Sep 2025', status: 'Approved' },
    { id: 4, name: 'G. Nikhil', type: 'Hostel', date: '07 Sep 2025', status: 'Approved' },
    { id: 5, name: 'H. Sandeep', type: 'Outpass', date: '07 Sep 2025', status: 'Rejected' },
    { id: 6, name: 'I. Rohan', type: 'Medical', date: '06 Sep 2025', status: 'Approved' },
    { id: 7, name: 'J. Sneha', type: 'Library', date: '06 Sep 2025', status: 'Approved' },
    { id: 8, name: 'K. Lakshmi', type: 'Event', date: '05 Sep 2025', status: 'Approved' },
  ];

  const getStatusBadge = (status: string) => {
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
        <p className="text-slate-500 mt-1">Track the requests you have processed.</p>
      </div>

      <Card className="shadow-sm border-slate-200">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2 mb-6">
            <Button variant="default" className="rounded-full shadow-sm">All (18)</Button>
            <Button variant="outline" className="rounded-full text-slate-600 bg-slate-50">Approved (16)</Button>
            <Button variant="outline" className="rounded-full text-slate-600 bg-slate-50">Rejected (2)</Button>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="w-[80px] font-semibold text-slate-900">#</TableHead>
                  <TableHead className="font-semibold text-slate-900">Student Name</TableHead>
                  <TableHead className="font-semibold text-slate-900">Permission Type</TableHead>
                  <TableHead className="font-semibold text-slate-900">Date</TableHead>
                  <TableHead className="font-semibold text-slate-900">Status</TableHead>
                  <TableHead className="text-right font-semibold text-slate-900">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {approvals.map((row) => (
                  <TableRow key={row.id} className="hover:bg-slate-50/50 transition-colors">
                    <TableCell className="font-medium text-slate-500">{row.id}</TableCell>
                    <TableCell className="font-semibold text-slate-800">{row.name}</TableCell>
                    <TableCell className="text-slate-600">{row.type}</TableCell>
                    <TableCell className="text-slate-500">{row.date}</TableCell>
                    <TableCell>{getStatusBadge(row.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                        <Link to="/ctpo/request-details">
                          <Eye className="w-4 h-4 mr-2" /> View
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyApprovals;
