import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Building2 } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4">
              <Building2 className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">CampusFlow</h1>
            <p className="text-slate-500 font-medium">Admin Portal</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); navigate('/admin/dashboard'); }}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email or Username</label>
              <Input type="text" placeholder="admin" className="h-12 bg-slate-50 border-slate-200" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Password</label>
              <Input type="password" placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" className="h-12 bg-slate-50 border-slate-200" required />
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
                <span className="font-medium text-slate-600">Remember me</span>
              </label>
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-700">Forgot Password?</a>
            </div>

            <Button type="submit" className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-base font-semibold">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

