import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PenTool, Keyboard, Upload, X, Check, ShieldCheck, QrCode } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QRCodeSVG } from 'qrcode.react';

const DigitalSignature = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('draw');
  const [isSigned, setIsSigned] = useState(false);
  
  const referenceId = "LIB2025091001";
  // The verification URL that would be encoded in the QR code
  const verificationUrl = `https://campusflow.edu/verify/${referenceId}`;

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Digital Signature</h1>
        <p className="text-slate-500 mt-1">Provide your digital signature to approve this request securely.</p>
      </div>

      <Card className="shadow-lg border-slate-200">
        <CardContent className="p-0">
          <div className="bg-slate-50 p-6 border-b border-slate-100 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="space-y-4 flex-1">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" /> Request Summary
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm">
                <div><span className="text-slate-500 font-medium">Student Name:</span> <span className="font-bold text-slate-900">A. Tejaswi</span></div>
                <div><span className="text-slate-500 font-medium">Permission Type:</span> <span className="font-bold text-slate-900">Library Permission</span></div>
                <div><span className="text-slate-500 font-medium">Date:</span> <span className="font-bold text-slate-900">12 Sep 2025</span></div>
                <div><span className="text-slate-500 font-medium">Reference ID:</span> <span className="font-bold text-slate-900">{referenceId}</span></div>
              </div>
            </div>
            
            <div className="hidden sm:flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="text-[10px] font-bold text-slate-400 mb-2 tracking-wider">VERIFY</span>
              <QRCodeSVG value={verificationUrl} size={80} level="M" fgColor="#0f172a" />
            </div>
          </div>

          <div className="p-6">
            <div className="flex p-1 bg-slate-100 rounded-xl mb-6 w-full max-w-md mx-auto">
              {[
                { id: 'draw', label: 'Draw', icon: PenTool },
                { id: 'type', label: 'Type', icon: Keyboard },
                { id: 'upload', label: 'Upload', icon: Upload }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    activeTab === tab.id 
                      ? 'bg-white text-primary shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" /> {tab.label}
                </button>
              ))}
            </div>

            <div className="relative border-2 border-dashed border-slate-300 rounded-xl h-64 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100/50 transition-colors mb-6 group overflow-hidden">
              {isSigned ? (
                <>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.png" alt="Signature" className="h-32 opacity-80" />
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute top-4 right-4 text-slate-400 hover:text-destructive"
                    onClick={() => setIsSigned(false)}
                  >
                    <X className="w-4 h-4 mr-1" /> Clear
                  </Button>
                </>
              ) : (
                <div 
                  className="w-full h-full flex flex-col items-center justify-center cursor-crosshair text-slate-400"
                  onClick={() => setIsSigned(true)} // Simulate signing for demo
                >
                  <PenTool className="w-8 h-8 mb-3 opacity-50 group-hover:scale-110 transition-transform" />
                  <p className="font-medium">Click to simulate drawing signature</p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 p-4 bg-emerald-50 text-emerald-900 rounded-xl border border-emerald-100">
              <div className="flex items-center h-5">
                <input 
                  id="confirm" 
                  type="checkbox" 
                  className="w-5 h-5 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-600 bg-white"
                  defaultChecked
                />
              </div>
              <label htmlFor="confirm" className="text-sm font-medium cursor-pointer">
                I cryptographically confirm that I am authorizing this request. This action cannot be undone.
              </label>
            </div>
          </div>
        </CardContent>

        <CardFooter className="bg-slate-50 p-6 border-t border-slate-100 flex justify-between items-center rounded-b-xl">
          <Button variant="outline" className="h-12 px-6" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button 
            className="h-12 px-8 shadow-md" 
            disabled={!isSigned}
            onClick={() => navigate('/ctpo/my-approvals')}
          >
            <Check className="w-5 h-5 mr-2" /> Approve & Submit
          </Button>
        </CardFooter>
      </Card>
      
      <div className="sm:hidden flex items-center justify-center gap-3 text-sm text-slate-500 font-medium">
        <QrCode className="w-5 h-5" /> Contains verifiable QR Signature
      </div>
    </div>
  );
};

export default DigitalSignature;

