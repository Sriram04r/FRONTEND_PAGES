import { Link } from 'react-router-dom';
import { FileText, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const MyDocuments = () => {
  const handleDownload = (filename) => {
    // Create a dummy blob to simulate a document download
    const content = "This is a simulated document download for: " + filename;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">My Documents</h1>
          <p className="text-slate-500 mt-1">View and download your approved permission documents.</p>
        </div>
      </div>

      <Card className="shadow-sm border-slate-200">
        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow className="hover:bg-transparent border-slate-100">
                <TableHead className="w-16 font-semibold text-slate-600">#</TableHead>
                <TableHead className="font-semibold text-slate-600">Document Type</TableHead>
                <TableHead className="font-semibold text-slate-600">Generated On</TableHead>
                <TableHead className="text-right font-semibold text-slate-600">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-slate-50 border-slate-100 group">
                <TableCell className="font-medium text-slate-600">1</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3 font-semibold text-slate-900">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <FileText className="w-4 h-4" />
                    </div>
                    Event Permission
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">11 Sep 2025</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 text-slate-500 hover:text-slate-900"
                      onClick={() => handleDownload('Event_Permission.pdf')}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="secondary" size="sm" asChild className="h-8 bg-blue-50 text-blue-700 hover:bg-blue-100 px-4">
                      <Link to="/student/document-view">View</Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              
              <TableRow className="hover:bg-slate-50 border-slate-100 group">
                <TableCell className="font-medium text-slate-600">2</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3 font-semibold text-slate-900">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <FileText className="w-4 h-4" />
                    </div>
                    Library Permission
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">01 Sep 2025</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 text-slate-500 hover:text-slate-900"
                      onClick={() => handleDownload('Library_Permission.pdf')}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="secondary" size="sm" asChild className="h-8 bg-blue-50 text-blue-700 hover:bg-blue-100 px-4">
                      <Link to="/student/document-view">View</Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyDocuments;

