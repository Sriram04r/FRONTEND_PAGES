import { Link } from 'react-router-dom';
import { Bus, Stethoscope, Home, Briefcase, Calendar, BookOpen, UserMinus, MoreHorizontal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PermissionRequest = () => {
  const steps = ['Select Type', 'Fill Details', 'Review', 'Submit'];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Request a Permission</h1>
        <p className="text-slate-500 mt-1">Select the type of permission and fill in the details.</p>
      </div>

      <Card className="shadow-sm border-slate-200">
        <CardContent className="p-8">
          {/* Stepper */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0 hidden sm:block"></div>
            <div className="relative z-10 flex flex-col sm:flex-row justify-between gap-4">
              {steps.map((step, idx) => {
                const isActive = idx === 0;
                return (
                  <div key={step} className="flex flex-row sm:flex-col items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors border-2 ${
                      isActive 
                        ? 'bg-primary border-primary text-primary-foreground shadow-md' 
                        : 'bg-white border-slate-200 text-slate-400'
                    }`}>
                      {isActive ? idx + 1 : idx + 1}
                    </div>
                    <span className={`text-sm font-semibold ${isActive ? 'text-primary' : 'text-slate-400'}`}>
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-6">Choose Permission Type</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[ 
              { icon: Bus, label: 'Bus Permission', desc: 'For bus travel related requests', color: 'text-blue-500', bg: 'bg-blue-500/10' },
              { icon: Stethoscope, label: 'Medical Permission', desc: 'For medical leave / hospital visits', color: 'text-rose-500', bg: 'bg-rose-500/10' },
              { icon: Home, label: 'Hostel Permission', desc: 'For hostel in/out permissions', color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
              { icon: Briefcase, label: 'Internship Permission', desc: 'For internship / industry visit', color: 'text-amber-500', bg: 'bg-amber-500/10' },
              { icon: Calendar, label: 'Event Permission', desc: 'For event participation', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
              { icon: BookOpen, label: 'Library Permission', desc: 'For library access / extended hours', color: 'text-cyan-500', bg: 'bg-cyan-500/10', link: '/student/library-permission' },
              { icon: UserMinus, label: 'Outpass Permission', desc: 'For outstation / out of campus movement', color: 'text-violet-500', bg: 'bg-violet-500/10' },
              { icon: MoreHorizontal, label: 'Other Permission', desc: 'For any other type of request', color: 'text-slate-500', bg: 'bg-slate-500/10' },
            ].map((item, index) => {
              const content = (
                <div className="flex flex-col items-start p-6 rounded-2xl border-2 border-slate-100 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group bg-white h-full relative overflow-hidden">
                  <div className={`p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform ${item.bg} ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">{item.label}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              );
              
              return item.link ? (
                <Link to={item.link} key={index} className="block">{content}</Link>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PermissionRequest;
