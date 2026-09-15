import { FileText, CheckCircle2, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CTPONotifications = () => {
  const [filter, setFilter] = useState('All');

  const notifications = [
    {
      id: 1,
      type: 'request',
      title: 'New Permission Request',
      desc: 'A. Tejaswi (23B210AH13) has submitted a Library permission request.',
      time: '10 Sep 2025, 09:15 AM',
      unread: true,
      icon: FileText,
      colorClass: 'text-indigo-600',
      bgClass: 'bg-indigo-100',
      rowClass: 'bg-blue-50/30'
    },
    {
      id: 2,
      type: 'approval',
      title: 'Request Approved',
      desc: 'You have approved C. Meghana\'s Internship request.',
      time: '09 Sep 2025, 11:20 AM',
      unread: false,
      icon: CheckCircle2,
      colorClass: 'text-emerald-600',
      bgClass: 'bg-emerald-100',
      rowClass: ''
    },
    {
      id: 3,
      type: 'request',
      title: 'New Permission Request',
      desc: 'B. Kiran (23B210AH12) has submitted an Outpass request.',
      time: '10 Sep 2025, 10:00 AM',
      unread: true,
      icon: FileText,
      colorClass: 'text-indigo-600',
      bgClass: 'bg-indigo-100',
      rowClass: 'bg-blue-50/30'
    },
    {
      id: 4,
      type: 'update',
      title: 'System Update',
      desc: 'Permission module has been updated with new features.',
      time: '08 Sep 2025, 04:10 PM',
      unread: false,
      icon: Info,
      colorClass: 'text-blue-600',
      bgClass: 'bg-blue-100',
      rowClass: ''
    }
  ];

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'All') return true;
    if (filter === 'Unread') return notif.unread;
    if (filter === 'Approvals') return notif.type === 'approval';
    if (filter === 'Updates') return notif.type === 'update' || notif.type === 'request';
    return true;
  });

  const counts = {
    All: notifications.length,
    Unread: notifications.filter(n => n.unread).length,
    Approvals: notifications.filter(n => n.type === 'approval').length,
    Updates: notifications.filter(n => n.type === 'update' || n.type === 'request').length,
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
            className={`rounded-full h-9 px-4 ${filter !== 'All' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-blue-600 hover:bg-blue-700'}`}
            onClick={() => setFilter('All')}
          >
            All ({counts.All})
          </Button>
          <Button 
            variant={filter === 'Unread' ? 'default' : 'outline'} 
            className={`rounded-full h-9 px-4 ${filter !== 'Unread' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            onClick={() => setFilter('Unread')}
          >
            Unread ({counts.Unread})
          </Button>
          <Button 
            variant={filter === 'Approvals' ? 'default' : 'outline'} 
            className={`rounded-full h-9 px-4 ${filter !== 'Approvals' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            onClick={() => setFilter('Approvals')}
          >
            Approvals ({counts.Approvals})
          </Button>
          <Button 
            variant={filter === 'Updates' ? 'default' : 'outline'} 
            className={`rounded-full h-9 px-4 ${filter !== 'Updates' ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            onClick={() => setFilter('Updates')}
          >
            Updates ({counts.Updates})
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
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 mt-2 shadow-sm"></div>
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

export default CTPONotifications;

