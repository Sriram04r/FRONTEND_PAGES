import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, ArrowRight, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const CTPOLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center animate-in fade-in zoom-in-95 duration-500">
      <Card className="w-full max-w-md shadow-xl border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <CardHeader className="text-center pt-10 pb-6">
          <div className="mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-blue-100">
            <Briefcase className="w-8 h-8" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">CTPO / Faculty</CardTitle>
          <CardDescription className="text-slate-500 text-base">Login to manage permissions</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={(e) => { e.preventDefault(); navigate('/ctpo/dashboard'); }} className="space-y-5">
            <div className="space-y-2 relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <User className="w-5 h-5" />
              </div>
              <Input 
                type="text" 
                placeholder="Faculty ID" 
                className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                required
              />
            </div>

            <div className="space-y-2 relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Lock className="w-5 h-5" />
              </div>
              <Input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className="pl-10 pr-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <Button className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md group mt-2">
              Login 
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center border-t border-slate-100 bg-slate-50 py-4 mt-6">
          <p className="text-sm text-slate-600">
            Don't have an account? <Link to="/register/ctpo" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">Register here</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CTPOLogin;
