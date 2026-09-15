import { Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const MyProfile = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">My Profile</h1>
        <p className="text-slate-500 mt-1">View and manage your personal information.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <Card className="flex-1 shadow-sm border-slate-200 lg:sticky lg:top-6 h-fit">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary text-white text-3xl font-bold flex items-center justify-center mb-6 shadow-md ring-4 ring-primary/10">
              S
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Siva Kumar</h2>
            <p className="text-sm font-semibold text-primary mb-4 bg-primary/10 px-3 py-1 rounded-full">Roll No: 23B210AH13</p>
            
            <div className="w-full bg-slate-50 rounded-xl p-4 text-sm text-slate-600 mb-6 border border-slate-100">
              <p className="font-medium">3rd Year | CSM</p>
              <p className="font-medium">KIET</p>
            </div>
            
            <Button className="w-full rounded-xl h-12 shadow-md">Edit Profile</Button>
          </CardContent>
        </Card>

        <div className="flex-[2] space-y-6">
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="border-b border-slate-100 bg-slate-50">
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                {[
                  { label: 'Full Name', value: 'Siva Kumar' },
                  { label: 'Roll Number', value: '23B210AH13' },
                  { label: 'Email', value: 'sivakumar@example.com' },
                  { label: 'Mobile Number', value: '9876543210' },
                  { label: 'College', value: 'KIET' },
                  { label: 'Branch', value: 'CSM' },
                  { label: 'Year', value: '3rd Year' },
                  { label: 'Section', value: 'Hostel' },
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
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password to keep your account secure.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form className="max-w-md space-y-5" onSubmit={e => e.preventDefault()}>
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
                      className="pl-10 pr-10 h-12 rounded-xl"
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
                      className="pl-10 pr-10 h-12 rounded-xl"
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
                      className="pl-10 pr-10 h-12 rounded-xl"
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

                <Button className="w-full sm:w-auto h-12 px-8 rounded-xl mt-2 shadow-md">
                  Update Password
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
