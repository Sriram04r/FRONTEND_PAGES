import { FileText, CheckCircle2, UserPlus, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const HODNotifications = () => {
  const [filter, setFilter] = useState('All');

  const notifications = [
    {
      id: 1,
      type: 'branch',
      title: 'New Request - Hostel (CSEM)',
      desc: 'A. Tejaswi (23B210AH13) has submitted a hostel request.',
      time: '10:25 AM',
      icon: UserPlus,
      colorClass: 'text-indigo-600',
      bgClass: 'bg-indigo-100',
      rowClass: 'bg-purple-50/30',
      unread: true
    },
    {
      id: 2,
      type: 'branch',
      title: 'New Request - Day Scholar (CAI)',
      desc: 'B. Kiran (23B210AH27) has submitted a day scholar request.',
      time: '09:40 AM',
      icon: FileText,
      colorClass: 'text-amber-600',
      bgClass: 'bg-amber-100',
      rowClass: 'bg-purple-50/30',
      unread: true
    },
    {
      id: 3,
      type: 'approval',
      title: 'CTPO Approved - Event Permission',
      desc: 'Request from C. Meghana has been approved by CTPO.',
      time: '08:15 AM',
      icon: CheckCircle2,
      colorClass: 'text-emerald-600',
      bgClass: 'bg-emerald-100',
      rowClass: 'bg-purple-50/30',
      unread: true
    },
    {
      id: 4,
      type: 'branch',
      title: 'New Request - Hostel (Cyber)',
      desc: 'G. Naresh (23B210AH42) has submitted a hostel request.',
      time: '08:00 AM',
      icon: Info,
      colorClass: 'text-rose-600',
      bgClass: 'bg-rose-100',
      rowClass: 'bg-purple-50/30',
      unread: true
    },
    {
      id: 5,
      type: 'branch',
      title: 'New Request - Day Scholar (AID)',
      desc: 'H. Priya (23B210AH55) has submitted a day scholar request.',
      time: '07:45 AM',
      icon: Info,
      colorClass: 'text-blue-600',
      bgClass: 'bg-blue-100',
      rowClass: 'bg-purple-50/30',
      unread: true
    }
  ];

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'All') return true;
    if (filter === 'Branch Requests') return notif.type === 'branch';
    if (filter === 'Approvals') return notif.type === 'approval';
    if (filter === 'System') return notif.type === 'system';
    return true;
  });

  const counts = {
    All: notifications.length,
    BranchRequests: notifications.filter(n => n.type === 'branch').length,
    Approvals: notifications.filter(n => n.type === 'approval').length,
    System: notifications.filter(n => n.type === 'system').length,
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Notifications</h1>
          <p className="text-slate-500 mt-1">Stay updated with the latest activities.</p>
        </div>
      </div>

      <Card className="shadow-sm border-slate-200">
        <div className="flex overflow-x-auto p-4 border-b border-slate-100 gap-2 hide-scrollbar">
          <Button 
            variant={filter === 'All' ? 'default' : 'outline'} 
            className={`rounded-full h-9 px-4 ${filter !== 'All' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-purple-700 hover:bg-purple-800 text-white'}`}
            onClick={() => setFilter('All')}
          >
            All ({counts.All})
          </Button>
          <Button 
            variant={filter === 'Branch Requests' ? 'default' : 'outline'} 
            className={`rounded-full h-9 px-4 ${filter !== 'Branch Requests' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-purple-700 hover:bg-purple-800 text-white'}`}
            onClick={() => setFilter('Branch Requests')}
          >
            Branch Requests ({counts.BranchRequests})
          </Button>
          <Button 
            variant={filter === 'Approvals' ? 'default' : 'outline'} 
            className={`rounded-full h-9 px-4 ${filter !== 'Approvals' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-purple-700 hover:bg-purple-800 text-white'}`}
            onClick={() => setFilter('Approvals')}
          >
            Approvals ({counts.Approvals})
          </Button>
          <Button 
            variant={filter === 'System' ? 'default' : 'outline'} 
            className={`rounded-full h-9 px-4 ${filter !== 'System' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-purple-700 hover:bg-purple-800 text-white'}`}
            onClick={() => setFilter('System')}
          >
            System ({counts.System})
          </Button>
        </div>

        <CardContent className="p-0">
          <div className="divide-y divide-slate-100">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notif) => (
                <div key={notif.id} className={`flex items-start gap-4 p-5 hover:bg-slate-50/80 transition-colors group relative ${notif.rowClass}`}>
                  <div className={`p-2 rounded-full ${notif.bgClass} ${notif.colorClass} shrink-0 mt-1`}>
                    <notif.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">{notif.title}</h4>
                    <p className="text-sm text-slate-600 truncate group-hover:whitespace-normal">{notif.desc}</p>
                    <div className="text-xs text-slate-400 mt-2 flex items-center gap-2">
                      {notif.time}
                    </div>
                  </div>
                  {notif.unread && (
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-700 shrink-0 mt-2 shadow-sm"></div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-slate-500">
                No notifications found for this category.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HODNotifications;

