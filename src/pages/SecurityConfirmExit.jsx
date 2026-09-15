import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const SecurityConfirmExit = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    if (isChecked) {
      setIsConfirmed(true);
    }
  };

  if (isConfirmed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-xl mx-auto text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-12 h-12 text-emerald-600" />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-emerald-600 tracking-tight">Exit Confirmed!</h1>
          <p className="text-slate-500 mt-2 text-lg">Student has been marked as exited.</p>
        </div>

        <Card className="w-full shadow-sm border-slate-200 bg-white text-left">
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <div className="text-sm font-semibold text-slate-500">Name</div>
              <div className="text-sm font-bold text-slate-800">: Ravi Teja</div>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <div className="text-sm font-semibold text-slate-500">Roll Number</div>
              <div className="text-sm font-bold text-slate-800">: 23K1A0501</div>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <div className="text-sm font-semibold text-slate-500">Purpose</div>
              <div className="text-sm font-bold text-slate-800">: Library</div>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <div className="text-sm font-semibold text-slate-500">Exit Time</div>
              <div className="text-sm font-bold text-slate-800">: 10 Sep 2025, 10:05 AM</div>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <div className="text-sm font-semibold text-slate-500">Verified By</div>
              <div className="text-sm font-bold text-slate-800">: Ramesh (Security)</div>
            </div>
          </CardContent>
        </Card>

        <Button 
          className="bg-indigo-600 hover:bg-indigo-700 text-white w-full max-w-sm h-12 rounded-xl text-base shadow-sm"
          onClick={() => navigate('/security/dashboard')}
        >
          Back to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Confirm Student Exit</h1>
        <p className="text-sm text-slate-500 mt-1">Confirm student exit (after verifying document)</p>
      </div>

      <Card className="shadow-lg border-slate-200 bg-white">
        <CardHeader className="border-b border-slate-100 pb-4">
          <CardTitle className="text-lg text-slate-800">Student Details</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 border border-slate-200 rounded-lg overflow-hidden bg-slate-100">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=250" alt="Student" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="flex-1 space-y-3">
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <div className="text-sm font-semibold text-slate-500">Name</div>
                <div className="text-sm font-bold text-slate-800">: Ravi Teja</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <div className="text-sm font-semibold text-slate-500">Roll Number</div>
                <div className="text-sm font-bold text-slate-800">: 23K1A0501</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <div className="text-sm font-semibold text-slate-500">Department</div>
                <div className="text-sm font-bold text-slate-800">: CSE</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <div className="text-sm font-semibold text-slate-500">Year / Section</div>
                <div className="text-sm font-bold text-slate-800">: III Year / A</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <div className="text-sm font-semibold text-slate-500">Purpose</div>
                <div className="text-sm font-bold text-slate-800">: Library</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <div className="text-sm font-semibold text-slate-500">Out Time</div>
                <div className="text-sm font-bold text-slate-800">: 10 Sep 2025, 10:00 AM</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <div className="text-sm font-semibold text-slate-500">Valid Till</div>
                <div className="text-sm font-bold text-slate-800">: 10 Sep 2025, 01:00 PM</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2 items-center">
                <div className="text-sm font-semibold text-slate-500">Status</div>
                <div className="text-sm font-bold flex items-center gap-1">
                  : <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs ml-1 uppercase">Approved</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-slate-200 bg-white">
        <CardContent className="p-6">
          <h3 className="font-bold text-slate-800 mb-4">Confirm Exit</h3>
          
          <label className="flex items-start gap-3 cursor-pointer p-4 border border-indigo-100 bg-indigo-50/50 rounded-lg transition-colors hover:bg-indigo-50">
            <div className="flex items-center h-5">
              <input 
                type="checkbox" 
                className="w-5 h-5 border-indigo-300 rounded text-indigo-600 focus:ring-indigo-500"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
            </div>
            <div className="text-sm text-indigo-900 font-medium pt-0.5">
              I have verified the student identity and outpass details and I am allowing exit.
            </div>
          </label>

          <div className="flex flex-col sm:flex-row gap-4 justify-end mt-8">
            <Button 
              variant="outline" 
              className="border-slate-300 text-slate-700 h-11 px-8 sm:w-auto w-full"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button 
              className="bg-indigo-600 hover:bg-indigo-700 text-white h-11 px-8 sm:w-auto w-full disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isChecked}
              onClick={handleConfirm}
            >
              Confirm Exit
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default SecurityConfirmExit;
