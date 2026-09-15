import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Camera, User, Mail, Phone, Shield } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

const AdminProfile = () => {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">My Profile</h1>
        <p className="text-sm text-slate-500 mt-1">Manage your account details and preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left column - Avatar Card */}
        <div className="w-full lg:w-1/3">
          <Card className="shadow-sm border-slate-200 overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <CardContent className="pt-0 relative px-6 pb-6 text-center">
              <div className="flex justify-center -mt-12 mb-4 relative inline-block">
                <Avatar className="w-24 h-24 border-4 border-white shadow-md bg-white">
                  <AvatarImage src="https://ui-avatars.com/api/?name=Admin&background=4f46e5&color=fff&size=128" />
                  <AvatarFallback className="text-2xl font-bold">A</AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 p-1.5 bg-white border border-slate-200 text-slate-600 rounded-full shadow-sm hover:text-indigo-600 hover:bg-slate-50 transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              
              <h2 className="text-xl font-bold text-slate-800">Admin User</h2>
              <p className="text-sm font-medium text-indigo-600 mt-0.5">Super Administrator</p>
              
              <div className="mt-6 space-y-3 text-sm text-left">
                <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="truncate">admin@system.edu</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <Shield className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Full System Access</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column - Form */}
        <div className="flex-1">
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="border-b border-slate-100 pb-4">
              <CardTitle className="text-lg text-slate-800">Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">First Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <Input defaultValue="Admin" className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Last Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <Input defaultValue="User" className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <Input type="email" defaultValue="admin@system.edu" className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <Input type="tel" defaultValue="+91 98765 43210" className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-700">Role (Read Only)</label>
                    <div className="relative">
                      <Shield className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <Input readOnly defaultValue="Super Administrator" className="pl-9 bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">Update Profile</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default AdminProfile;
