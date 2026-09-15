import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Settings, BookOpen, Mail, Shield, Users, Database } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const AdminSystemSettings = () => {
  const [activeTab, setActiveTab] = useState('academic');

  const navItems = [
    { id: 'general', label: 'General Settings', icon: Settings },
    { id: 'academic', label: 'Academic Settings', icon: BookOpen },
    { id: 'email', label: 'Email Notifications', icon: Mail },
    { id: 'roles', label: 'User Roles & Permissions', icon: Users },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'backup', label: 'Backup & Restore', icon: Database },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">System Settings</h1>
        <p className="text-sm text-slate-500 mt-1">Configure global system parameters.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Settings Navigation */}
        <Card className="w-full lg:w-72 shrink-0 shadow-sm border-slate-200">
          <CardContent className="p-3">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === item.id 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-indigo-600' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Settings Content area */}
        <div className="flex-1">
          {activeTab === 'academic' && (
            <Card className="shadow-sm border-slate-200">
              <CardHeader className="border-b border-slate-100 pb-4">
                <CardTitle className="text-lg text-slate-800">Academic Settings</CardTitle>
                <CardDescription className="text-slate-500">Configure academic year, semesters, and registration timelines.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Academic Year</label>
                    <Select defaultValue="25-26">
                      <SelectTrigger className="bg-slate-50 border-slate-200 h-10">
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="24-25">2024-2025</SelectItem>
                        <SelectItem value="25-26">2025-2026</SelectItem>
                        <SelectItem value="26-27">2026-2027</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Semester System</label>
                    <Select defaultValue="odd">
                      <SelectTrigger className="bg-slate-50 border-slate-200 h-10">
                        <SelectValue placeholder="Select Semester" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="odd">Odd Semester</SelectItem>
                        <SelectItem value="even">Even Semester</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Student Registration Start Date</label>
                    <Input type="date" defaultValue="2025-08-01" className="bg-slate-50 border-slate-200 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Student Registration End Date</label>
                    <Input type="date" defaultValue="2025-08-31" className="bg-slate-50 border-slate-200 h-10" />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700">Faculty Registration Allowed</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Enable or disable new faculty registrations across all colleges.</p>
                  </div>
                  <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-indigo-500 appearance-none cursor-pointer translate-x-6" checked readOnly/>
                    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-indigo-500 cursor-pointer"></label>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex justify-end">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">Save Changes</Button>
                </div>

              </CardContent>
            </Card>
          )}

          {activeTab !== 'academic' && (
            <Card className="shadow-sm border-slate-200 h-64 flex items-center justify-center bg-slate-50/50">
              <div className="text-center">
                <Settings className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-slate-600">{navItems.find(i => i.id === activeTab)?.label}</h3>
                <p className="text-sm text-slate-400 mt-1">This settings panel is currently under construction.</p>
              </div>
            </Card>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminSystemSettings;
