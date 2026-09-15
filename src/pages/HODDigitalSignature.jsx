import { useNavigate } from 'react-router-dom';
import { Info, PenLine } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HODDigitalSignature = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="text-center sm:text-left mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Digital Signature</h1>
        <p className="text-slate-500 mt-1">Provide your digital signature to approve this request.</p>
      </div>

      <Card className="shadow-xl border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-fuchsia-600"></div>
        <CardContent className="p-6 pt-8">
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl mb-8 flex gap-4">
            <Info className="w-6 h-6 text-blue-600 shrink-0" />
            <div className="text-sm text-blue-900 leading-relaxed">
              You are approving this request for <strong className="text-blue-700 font-semibold">A. Tejaswi (23B210AH13)</strong><br/>
              <span className="font-medium mt-1 inline-block">Hostel Permission â€“ CSEM</span>
            </div>
          </div>

          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <PenLine className="w-4 h-4 text-purple-600" /> Draw Signature
            </label>
            <Button variant="ghost" size="sm" className="h-8 text-slate-500 hover:text-slate-900 hover:bg-slate-100">
              Clear
            </Button>
          </div>
          
          <div className="border-2 border-dashed border-slate-300 rounded-xl h-64 bg-slate-50 flex items-center justify-center relative hover:border-purple-300 transition-colors cursor-crosshair">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.png" alt="Drawn Signature" className="opacity-80 max-h-48 max-w-full mix-blend-multiply" />
            <div className="absolute bottom-4 left-4 right-4 border-b border-slate-300"></div>
          </div>

          <div className="flex items-start gap-3 mt-8 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <input type="checkbox" id="confirm" className="mt-1 w-5 h-5 rounded border-slate-300 text-purple-600 focus:ring-purple-600 cursor-pointer" defaultChecked />
            <label htmlFor="confirm" className="text-sm font-medium text-slate-700 cursor-pointer">
              I confirm that I am approving this request and that this signature is legally binding for the scope of this application.
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4 border-t border-slate-100">
            <Button variant="outline" className="h-12 px-8 border-slate-200 text-slate-600 hover:bg-slate-50" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button variant="default" className="h-12 px-8 bg-purple-700 hover:bg-purple-800 text-white shadow-md shadow-purple-200" onClick={() => navigate('/hod/my-approvals')}>
              Approve & Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HODDigitalSignature;

