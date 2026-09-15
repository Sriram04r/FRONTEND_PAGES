import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, User, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <Card className="w-full shadow-2xl border-none bg-white/95 backdrop-blur animate-in zoom-in-95 duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 flex flex-col gap-1 items-end text-[10px] font-bold text-slate-300 opacity-60">
        <span className="tracking-widest">LEARN</span>
        <span className="tracking-widest">GROW</span>
        <span className="tracking-widest">BELONG</span>
      </div>

      <CardHeader className="text-center pb-8 pt-10">
        <div className="mx-auto bg-blue-500/10 p-4 rounded-full text-blue-600 mb-4 inline-flex">
          <GraduationCap className="w-10 h-10" />
        </div>
        <CardTitle className="text-3xl font-extrabold tracking-tight text-slate-900">Student Login</CardTitle>
        <CardDescription className="text-base text-slate-500 mt-2">
          Enter your credentials to access your dashboard
        </CardDescription>
      </CardHeader>

      <form onSubmit={(e) => { e.preventDefault(); navigate('/student/dashboard'); }}>
        <CardContent className="space-y-6 px-8">
          <div className="relative group">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
            <Input 
              type="text" 
              placeholder="Roll Number" 
              className="pl-11 h-14 bg-slate-50 border-slate-200 focus-visible:ring-primary/20 text-lg rounded-xl"
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              className="pl-11 pr-12 h-14 bg-slate-50 border-slate-200 focus-visible:ring-primary/20 text-lg rounded-xl"
            />
            <button 
              type="button"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col px-8 pb-10 pt-4">
          <Button 
            type="submit"
            className="w-full text-lg h-14 rounded-xl shadow-lg hover:shadow-xl transition-all mb-6" 
            size="lg"
          >
            Login <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-sm text-slate-500 text-center">
            Don't have an account?{' '}
            <Link to="/register/student" className="font-semibold text-primary hover:underline transition-all">
              Register here
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};

export default StudentLogin;

