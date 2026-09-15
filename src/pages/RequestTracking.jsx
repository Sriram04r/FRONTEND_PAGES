import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ChevronDown, CheckCircle2, Circle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RequestTracking = () => {
  const navigate = useNavigate();

  const steps = [
    { title: 'Submitted by Student', time: '10 Sep 2025, 09:15 AM', desc: 'Your request has been submitted.', completed: true },
    { title: 'Viewed by CTPO', time: '10 Sep 2025, 11:30 AM', desc: 'Viewed by CTPO.', completed: true },
    { title: 'Approved by CTPO', time: '10 Sep 2025, 12:10 PM', desc: 'Approved and forwarded to HOD.', completed: true },
    { title: 'Approved by HOD', time: '11 Sep 2025, 10:45 AM', desc: 'Approved and forwarded to Admin.', completed: true },
    { title: 'Approved by Admin', time: '11 Sep 2025, 04:20 PM', desc: 'Final approval completed.', completed: true },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => navigate(-1)}
          className="rounded-xl shadow-sm bg-white"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Request Tracking</h1>
          <p className="text-slate-500 mt-1">Track the progress of your permission request.</p>
        </div>
      </div>

      <Card className="shadow-lg border-slate-200">
        <CardHeader className="bg-slate-50 border-b border-slate-100 py-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <span className="font-semibold text-slate-700 whitespace-nowrap">Tracking ID</span>
            <div className="relative w-full sm:w-auto flex-1">
              <select className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-slate-900 font-mono focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none shadow-sm">
                <option value="LIB2025091001">LIB2025091001</option>
                <option value="OUT2025090803">OUT2025090803</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
            <Button className="w-full sm:w-auto h-12 px-8 shadow-md">Track</Button>
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <div className="relative border-l-2 border-slate-200 ml-4 space-y-8 pb-4">
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className={`absolute -left-[11px] top-1 rounded-full bg-white transition-transform group-hover:scale-110 ${
                  step.completed ? 'text-emerald-500' : 'text-slate-300'
                }`}>
                  {step.completed ? <CheckCircle2 className="w-5 h-5 bg-white" /> : <Circle className="w-5 h-5 bg-white" />}
                </div>
                <div>
                  <h4 className={`font-bold text-lg mb-1 ${step.completed ? 'text-slate-900' : 'text-slate-400'}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm font-semibold text-primary mb-1">{step.time}</p>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 font-medium">
            <div className="p-1 bg-emerald-500 text-white rounded-full">
              <Check className="w-4 h-4" />
            </div>
            Your library permission request has been completely approved.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestTracking;

