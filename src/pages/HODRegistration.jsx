import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, User, Lock, Eye, EyeOff, Mail, Phone, Calendar, ChevronDown, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const HODRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-[90vh] flex items-center justify-center py-10 animate-in fade-in zoom-in-95 duration-500">
      <Card className="w-full max-w-lg shadow-xl border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 to-fuchsia-600"></div>
        <CardHeader className="text-center pt-10 pb-6">
          <div className="mx-auto w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-purple-100">
            <Building2 className="w-8 h-8" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">HOD Registration</CardTitle>
          <CardDescription className="text-slate-500 text-base">Create your account</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <Input type="text" placeholder="Full Name" className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200" required />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <Input type="text" placeholder="Faculty ID" className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200" required />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Mail className="w-5 h-5" />
                </div>
                <Input type="email" placeholder="Email Address" className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200" required />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Phone className="w-5 h-5" />
                </div>
                <Input type="tel" placeholder="Mobile Number" className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Building className="w-5 h-5" />
                  </div>
                  <select className="w-full pl-10 pr-10 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" defaultValue="">
                    <option value="" disabled>College</option>
                    <option value="KIET">KIET</option>
                    <option value="KIEK">KIEK</option>
                    <option value="KIEW">KIEW</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <select className="w-full pl-10 pr-10 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" defaultValue="">
                    <option value="" disabled>Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>
              
              <div className="relative mt-2">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Lock className="w-5 h-5" />
                </div>
                <Input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                  className="pl-10 pr-10 h-12 rounded-xl bg-slate-50 border-slate-200" 
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Lock className="w-5 h-5" />
                </div>
                <Input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Confirm Password" 
                  className="pl-10 pr-10 h-12 rounded-xl bg-slate-50 border-slate-200" 
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button className="w-full h-12 rounded-xl bg-purple-600 hover:bg-purple-700 text-white shadow-md mt-6">
              Register
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center border-t border-slate-100 bg-slate-50 py-4 mt-2">
          <p className="text-sm text-slate-600">
            Already have an account? <Link to="/login/hod" className="font-semibold text-purple-600 hover:text-purple-700 transition-colors">Login here</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HODRegistration;

