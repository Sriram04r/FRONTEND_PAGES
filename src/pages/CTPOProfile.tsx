import { Lock, Eye, EyeOff, Camera } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const CTPOProfile = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">My Profile</h1>
          <p className="text-slate-500 mt-1">View and manage your profile information.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <Card className="flex-1 shadow-sm border-slate-200">
          <CardContent className="p-8 flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-indigo-500 to-blue-600 opacity-10"></div>
            
            <div className="relative group mb-6 mt-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-white text-3xl font-bold flex items-center justify-center shadow-md ring-4 ring-white relative z-10">
                D
              </div>
              <button className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20 cursor-pointer">
                <Camera className="w-8 h-8" />
              </button>
            </div>
            
            <Button variant="outline" className="rounded-xl h-10 border-slate-200 text-slate-600 mb-8 w-full">
              <Camera className="w-4 h-4 mr-2" /> Change Photo
            </Button>
            
            <div className="w-full space-y-0 divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden bg-slate-50">
              {[
                { label: 'Name', value: 'Dr. R. Sharma' },
                { label: 'Faculty ID', value: 'FA1023' },
                { label: 'Email', value: 'rsharma@college.edu' },
                { label: 'Mobile', value: '9876543210' },
                { label: 'Designation', value: 'CTPO CSM' },
                { label: 'Department', value: 'CSM' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col py-3 px-4 bg-white">
                  <span className="text-xs font-medium text-slate-500 mb-1">{item.label}</span>
                  <span className="text-sm font-semibold text-slate-900">{item.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-3 px-4 bg-white">
                <span className="text-sm font-medium text-slate-500">Account Status</span>
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none shadow-none">Active</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-[1.5] shadow-sm border-slate-200 h-fit">
          <CardHeader className="border-b border-slate-100 bg-slate-50">
            <CardTitle>Change Password</CardTitle>
            <CardDescription>Update your password to keep your account secure.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <form className="space-y-6 max-w-md" onSubmit={e => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="current" className="text-slate-700">Current Password</Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <Input 
                    id="current"
                    type={showCurrent ? "text" : "password"} 
                    placeholder="Enter current password" 
                    className="pl-10 pr-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showCurrent ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="new" className="text-slate-700">New Password</Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <Input 
                    id="new"
                    type={showNew ? "text" : "password"} 
                    placeholder="Enter new password" 
                    className="pl-10 pr-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showNew ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm" className="text-slate-700">Confirm New Password</Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <Input 
                    id="confirm"
                    type={showConfirm ? "text" : "password"} 
                    placeholder="Confirm new password" 
                    className="pl-10 pr-10 h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button className="w-full sm:w-auto h-12 px-8 rounded-xl mt-4 shadow-md bg-indigo-600 hover:bg-indigo-700 text-white">
                Update Password
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CTPOProfile;
