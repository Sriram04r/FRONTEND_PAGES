import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DocumentView = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sticky top-0 bg-slate-50 z-10 py-4 border-b border-slate-200/60 backdrop-blur-sm bg-slate-50/80">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => navigate(-1)} className="h-10 bg-white border-slate-200 text-slate-700">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">Document Viewer</h1>
        </div>
        <Button variant="default" className="h-10 bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
          <Download className="w-4 h-4 mr-2" /> Download PDF
        </Button>
      </div>

      <Card className="shadow-2xl border-slate-200 mx-auto bg-white rounded-none sm:rounded-xl overflow-hidden print:shadow-none print:border-none print:m-0" style={{ maxWidth: '800px', minHeight: '1050px' }}>
        <CardContent className="p-0">
          {/* Document Header */}
          <div className="text-center p-10 border-b border-slate-200 bg-slate-50/30">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">KIET</h2>
            <p className="text-sm font-medium text-slate-600 mt-2 leading-relaxed">
              Kakinada Institute of Engineering & Technology<br/>
              Kakinada, Telangana - 533003
            </p>
            <div className="mt-8 inline-block px-8 py-2 border-2 border-slate-800 rounded-full">
              <h3 className="text-xl font-bold text-slate-900 tracking-widest uppercase">Event Permission</h3>
            </div>
          </div>

          {/* Document Body */}
          <div className="p-12 pb-24">
            <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
              
              <div className="flex-1 space-y-6 text-slate-800 text-base">
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="font-semibold text-slate-500">Student Name</span>
                  <span className="font-bold">: Anjali</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="font-semibold text-slate-500">Roll Number</span>
                  <span className="font-bold">: 23K1A0123</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="font-semibold text-slate-500">Department</span>
                  <span className="font-bold">: CSE</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="font-semibold text-slate-500">Year / Section</span>
                  <span className="font-bold">: III Year / A</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="font-semibold text-slate-500">Event Name</span>
                  <span className="font-bold">: TechFest 2025</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="font-semibold text-slate-500">From Date</span>
                  <span className="font-bold">: 15 Sep 2025</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="font-semibold text-slate-500">To Date</span>
                  <span className="font-bold">: 16 Sep 2025</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="font-semibold text-slate-500">Reason</span>
                  <span className="font-bold">: Participating in college event.</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4 pt-4 border-t border-slate-100">
                  <span className="font-semibold text-slate-500">Status</span>
                  <span className="font-bold text-emerald-600 flex items-center gap-2">
                    : Approved <ShieldCheck className="w-5 h-5" />
                  </span>
                </div>
              </div>
              
              <div className="shrink-0">
                <div className="w-32 h-40 border-2 border-slate-300 bg-slate-100 flex items-center justify-center rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-slate-400 rotate-[-15deg]">Student Photo</span>
                </div>
              </div>
              
            </div>

            {/* Document Signatures */}
            <div className="grid grid-cols-3 gap-8 mt-32 text-center">
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.png" alt="Signature" className="h-16 mx-auto opacity-70 mix-blend-multiply" />
                <div className="border-t border-slate-800 w-full max-w-[200px] mx-auto mt-2 pt-2">
                  <h5 className="font-bold text-slate-900 text-sm">Dr. Kumar</h5>
                  <p className="text-xs text-slate-500 font-medium">CTPO</p>
                  <p className="text-[10px] text-slate-400 mt-1">10 Sep 2025, 02:30 PM</p>
                </div>
              </div>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.png" alt="Signature" className="h-16 mx-auto opacity-70 mix-blend-multiply" />
                <div className="border-t border-slate-800 w-full max-w-[200px] mx-auto mt-2 pt-2">
                  <h5 className="font-bold text-slate-900 text-sm">Dr. Ramesh</h5>
                  <p className="text-xs text-slate-500 font-medium">HOD - CSE</p>
                  <p className="text-[10px] text-slate-400 mt-1">11 Sep 2025, 11:15 AM</p>
                </div>
              </div>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.png" alt="Signature" className="h-16 mx-auto opacity-70 mix-blend-multiply" />
                <div className="border-t border-slate-800 w-full max-w-[200px] mx-auto mt-2 pt-2">
                  <h5 className="font-bold text-slate-900 text-sm">Admin</h5>
                  <p className="text-xs text-slate-500 font-medium">Services</p>
                  <p className="text-[10px] text-slate-400 mt-1">11 Sep 2025, 05:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Document Footer */}
          <div className="bg-slate-50 p-6 text-center border-t border-slate-200 mt-auto">
            <p className="text-xs font-medium text-slate-500">
              * This is a system-generated document and does not require a physical signature.
            </p>
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
              Document ID: DOC-2025-0911-CSE-0012
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentView;

