import { Lock, Eye, EyeOff, Camera } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const HODProfile = () => {
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
        <Button className="rounded-xl shadow-sm bg-purple-700 hover:bg-purple-800 h-10 px-6">Edit Profile</Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <Card className="flex-1 shadow-sm border-slate-200 lg:sticky lg:top-6 h-fit">
          <CardContent className="p-8 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-purple-600 to-indigo-700 opacity-10"></div>
            
            <div className="relative group mb-6">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 text-white text-4xl font-bold flex items-center justify-center shadow-lg ring-4 ring-white relative z-10">
                H
              </div>
              <button className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20 cursor-pointer">
                <Camera className="w-8 h-8" />
              </button>
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Dr. R. Sharma</h2>
            <p className="text-sm font-semibold text-purple-700 mb-6 bg-purple-50 px-4 py-1.5 rounded-full">HOD | CSE</p>
            
            <Button variant="outline" className="w-full rounded-xl h-11 border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800">
              <Camera className="w-4 h-4 mr-2" /> Change Photo
            </Button>
          </CardContent>
        </Card>

        <div className="flex-[2] space-y-6">
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="border-b border-slate-100 bg-slate-50">
              <CardTitle>Professional Information</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                {[
                  { label: 'Full Name', value: 'Dr. R. Sharma' },
                  { label: 'Email', value: 'rsharma@college.edu' },
                  { label: 'Mobile Number', value: '9876543210' },
                  { label: 'Department', value: 'Computer Science & Engineering' },
                  { label: 'Designation', value: 'Head of Department' },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center py-4 px-6 hover:bg-slate-50/50 transition-colors">
                    <span className="text-sm font-medium text-slate-500 sm:w-1/3">{item.label}</span>
                    <span className="text-sm font-semibold text-slate-900 sm:w-2/3">{item.value}</span>
                  </div>
                ))}
                <div className="flex flex-col sm:flex-row sm:items-center py-4 px-6 hover:bg-slate-50/50 transition-colors">
                  <span className="text-sm font-medium text-slate-500 sm:w-1/3">Account Status</span>
                  <span className="sm:w-2/3">
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none shadow-none">Active</Badge>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200">
            <CardHeader className="border-b border-slate-100 bg-slate-50">
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Update your password to keep your account secure.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="current" className="text-slate-700">Current Password</Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <Lock className="w-5 h-5" />
                      </div>
                      <Input 
                        id="current"
                        type={showCurrent ? "text" : "password"} 
                        placeholder="Current" 
                        className="pl-10 pr-10 h-11 rounded-xl"
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowCurrent(!showCurrent)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
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
                        placeholder="New" 
                        className="pl-10 pr-10 h-11 rounded-xl"
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowNew(!showNew)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm" className="text-slate-700">Confirm Password</Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <Lock className="w-5 h-5" />
                      </div>
                      <Input 
                        id="confirm"
                        type={showConfirm ? "text" : "password"} 
                        placeholder="Confirm" 
                        className="pl-10 pr-10 h-11 rounded-xl"
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button className="w-full sm:w-auto h-11 px-8 rounded-xl bg-purple-700 hover:bg-purple-800 shadow-md">
                    Update Password
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HODProfile;
