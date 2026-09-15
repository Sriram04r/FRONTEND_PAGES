import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, Download, Printer } from 'lucide-react';

const SecurityOutpassDocument = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Security Portal</h1>
        <p className="text-sm text-slate-500 mt-1">View student outpass document</p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <Button 
          variant="ghost" 
          className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 -ml-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Outpass Document
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 h-9">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white h-9">
            <Printer className="w-4 h-4 mr-2" />
            Print
          </Button>
        </div>
      </div>

      {/* Outpass Document Card */}
      <Card className="shadow-lg border-slate-200 bg-white overflow-hidden relative">
        <div className="absolute top-0 inset-x-0 h-2 bg-indigo-600"></div>
        <CardContent className="p-8 sm:p-12">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center border-b border-slate-200 pb-6 mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">KIET</h1>
            <p className="text-sm sm:text-base font-semibold text-slate-700 mt-1">Kakinada Institute Of Engineering & Technology</p>
            <p className="text-xs text-slate-500 mt-1">Kakinada, Andhra Pradesh - 533437</p>
            <div className="mt-4 inline-block bg-slate-900 text-white px-6 py-1.5 rounded font-bold tracking-widest uppercase text-sm">
              Student Outpass
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            {/* Details */}
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <div className="text-sm font-semibold text-slate-500">Student Name</div>
                <div className="text-sm font-bold text-slate-800">: Ravi Teja</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <div className="text-sm font-semibold text-slate-500">Roll Number</div>
                <div className="text-sm font-bold text-slate-800">: 23K1A0501</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <div className="text-sm font-semibold text-slate-500">Department</div>
                <div className="text-sm font-bold text-slate-800">: CSE</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <div className="text-sm font-semibold text-slate-500">Year / Section</div>
                <div className="text-sm font-bold text-slate-800">: III Year / A</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <div className="text-sm font-semibold text-slate-500">Purpose</div>
                <div className="text-sm font-bold text-slate-800">: Library</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <div className="text-sm font-semibold text-slate-500">Out Date & Time</div>
                <div className="text-sm font-bold text-slate-800">: 10 Sep 2025, 10:00 AM</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <div className="text-sm font-semibold text-slate-500">Valid Till</div>
                <div className="text-sm font-bold text-slate-800">: 10 Sep 2025, 01:00 PM</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <div className="text-sm font-semibold text-slate-500">Reason</div>
                <div className="text-sm font-bold text-slate-800">: Need to collect reference books.</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <div className="text-sm font-semibold text-slate-500">Status</div>
                <div className="text-sm font-bold text-emerald-600">: Approved</div>
              </div>
            </div>

            {/* Photo */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-32 h-40 border-2 border-slate-200 rounded-lg overflow-hidden bg-slate-100">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=250" alt="Student Photo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-semibold text-slate-500 mt-2">Student Photo</span>
            </div>
          </div>

          {/* Signatures */}
          <div className="mt-16 flex items-end justify-between pt-8 border-t border-slate-100">
            <div className="text-center relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-70">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" alt="CTPO Signature" className="h-12 object-contain filter invert-[.3] sepia-[1] saturate-[3] hue-rotate-[200deg]" />
              </div>
              <p className="font-bold text-slate-800 text-sm">CTPO</p>
              <p className="text-xs text-slate-500">(Approved)</p>
              <p className="text-[10px] text-slate-400 mt-1">10 Sep 2025, 09:15 AM</p>
            </div>

            <div className="text-center relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-70">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" alt="HOD Signature" className="h-12 object-contain filter invert-[.3] sepia-[1] saturate-[3] hue-rotate-[200deg]" />
              </div>
              <p className="font-bold text-slate-800 text-sm">HOD - CSE</p>
              <p className="text-xs text-slate-500">(Approved)</p>
              <p className="text-[10px] text-slate-400 mt-1">10 Sep 2025, 09:25 AM</p>
            </div>
          </div>

          <p className="text-center text-[10px] text-slate-400 mt-12 mb-[-1rem]">
            This is a digitally generated document and does not require a physical signature.
          </p>
        </CardContent>
      </Card>
      
      <div className="flex justify-end pt-4">
        <Button 
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12 px-8 rounded-xl text-base shadow-lg hover:shadow-xl transition-all"
          onClick={() => navigate('/security/confirm-exit')}
        >
          Verify & Allow Exit &rarr;
        </Button>
      </div>

    </div>
  );
};

export default SecurityOutpassDocument;
