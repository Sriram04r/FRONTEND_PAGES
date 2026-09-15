import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { UserCheck, FileText, CheckCircle, Clock, MoreVertical, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';

const AdminNotifications = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All', count: 12 },
    { id: 'unread', label: 'Unread', count: 4 },
    { id: 'approvals', label: 'Approvals', count: 3 },
    { id: 'registrations', label: 'Registrations', count: 2 },
    { id: 'requests', label: 'Requests', count: 3 },
  ];

  const notifications = [
    { 
      id: 1, 
      type: 'registration', 
      title: 'New Faculty Registration', 
      desc: 'Dr. S. Kumar registered from KIED.', 
      time: '10:25 AM', 
      date: 'Today',
      icon: UserCheck, 
      color: 'text-emerald-600 bg-emerald-100',
      unread: true
    },
    { 
      id: 2, 
      type: 'request', 
      title: 'Hostel Request', 
      desc: 'A. Tejaswi raised a hostel permission request.', 
      time: '09:40 AM', 
      date: 'Today',
      icon: FileText, 
      color: 'text-amber-600 bg-amber-100',
      unread: true
    },
    { 
      id: 3, 
      type: 'approval', 
      title: 'HOD Approval Required', 
      desc: 'Dr. L. Meena has been nominated for HOD of AID, KIEK.', 
      time: '08:15 AM', 
      date: 'Today',
      icon: CheckCircle, 
      color: 'text-blue-600 bg-blue-100',
      unread: true
    },
    { 
      id: 4, 
      type: 'system', 
      title: 'System Update Completed', 
      desc: 'The weekly system maintenance has been successfully completed.', 
      time: '06:00 AM', 
      date: 'Today',
      icon: Clock, 
      color: 'text-slate-600 bg-slate-100',
      unread: true
    },
    { 
      id: 5, 
      type: 'registration', 
      title: 'New Department Added', 
      desc: 'Cyber Security department added to KIEW.', 
      time: '04:30 PM', 
      date: 'Yesterday',
      icon: Building2, 
      color: 'text-indigo-600 bg-indigo-100',
      unread: false
    },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Notifications</h1>
          <p className="text-sm text-slate-500 mt-1">Stay updated with system activities.</p>
        </div>
        <Button variant="outline" className="text-indigo-600 border-indigo-200 hover:bg-indigo-50">
          Mark all as read
        </Button>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden bg-white">
        
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-slate-200 px-4 pt-2 hide-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'border-indigo-600 text-indigo-700' 
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              {tab.label} {tab.count > 0 && `(${tab.count})`}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="divide-y divide-slate-100">
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              className={`p-4 sm:p-5 flex gap-4 transition-colors hover:bg-slate-50 ${notif.unread ? 'bg-indigo-50/30' : ''}`}
            >
              <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center ${notif.color}`}>
                <notif.icon className="w-6 h-6" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1">
                  <h3 className={`text-sm font-bold text-slate-800 ${notif.unread ? '' : 'font-semibold'}`}>
                    {notif.title}
                  </h3>
                  <div className="flex items-center text-xs font-medium text-slate-400 shrink-0">
                    <span>{notif.date}, {notif.time}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600">{notif.desc}</p>
                
                {notif.type === 'registration' && notif.unread && (
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" className="h-8 px-4 text-xs bg-indigo-600 hover:bg-indigo-700 text-white">Review</Button>
                  </div>
                )}
                {notif.type === 'approval' && notif.unread && (
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" className="h-8 px-4 text-xs bg-emerald-600 hover:bg-emerald-700 text-white">Approve</Button>
                    <Button size="sm" variant="outline" className="h-8 px-4 text-xs border-slate-200 text-slate-600">Review</Button>
                  </div>
                )}
              </div>
              
              <div className="shrink-0 flex flex-col items-end justify-between">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 -mr-2">
                  <MoreVertical className="w-4 h-4" />
                </Button>
                {notif.unread && (
                  <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full mb-1"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        
      </Card>
    </div>
  );
};

export default AdminNotifications;
