import { Check, User, FileText, Calendar, Info, Bell } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Notifications = () => {
  const [filter, setFilter] = useState('All');

  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: Check,
      title: 'Your Library Permission has been approved.',
      desc: 'Your request (LIB2025091001) has been approved by Admin.',
      time: 'Sep 11, 2025',
      unread: true,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100',
    },
    {
      id: 2,
      type: 'info',
      icon: User,
      title: 'HOD has approved your Outpass Request.',
      desc: 'Your request (OUT2025090803) has been approved by HOD.',
      time: 'Sep 10, 2025',
      unread: true,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      id: 3,
      type: 'approval',
      icon: FileText,
      title: 'CTPO has approved your Medical Permission.',
      desc: 'Your request (MED2025090507) has been approved by CTPO.',
      time: 'Sep 06, 2025',
      unread: false,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      id: 4,
      type: 'update',
      icon: Calendar,
      title: 'Campus Fest Registrations Open',
      desc: 'Registrations for the annual campus fest are now open.',
      time: 'Sep 01, 2025',
      unread: false,
      color: 'text-fuchsia-600',
      bg: 'bg-fuchsia-100',
    },
    {
      id: 5,
      type: 'warning',
      icon: Info,
      title: 'Library Will Be Closed',
      desc: 'The library will be closed on 16th Sep due to maintenance.',
      time: 'Aug 28, 2025',
      unread: false,
      color: 'text-amber-600',
      bg: 'bg-amber-100',
    }
  ];

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'All') return true;
    if (filter === 'Unread') return notif.unread;
    if (filter === 'Approvals') return notif.title.toLowerCase().includes('approv');
    if (filter === 'Updates') return !notif.title.toLowerCase().includes('approv');
    return true;
  });

  const counts = {
    All: notifications.length,
    Unread: notifications.filter(n => n.unread).length,
    Approvals: notifications.filter(n => n.title.toLowerCase().includes('approv')).length,
    Updates: notifications.filter(n => !n.title.toLowerCase().includes('approv')).length,
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
          <Bell className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Notifications</h1>
          <p className="text-slate-500 mt-1">Stay updated with your permission requests.</p>
        </div>
      </div>

      <Card className="shadow-sm border-slate-200">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 pb-6">
            <Button 
              variant={filter === 'All' ? 'default' : 'outline'} 
              className={`rounded-full ${filter !== 'All' ? 'text-slate-600 bg-slate-50' : 'shadow-sm'}`}
              onClick={() => setFilter('All')}
            >
              All ({counts.All})
            </Button>
            <Button 
              variant={filter === 'Unread' ? 'default' : 'outline'} 
              className={`rounded-full ${filter !== 'Unread' ? 'text-slate-600 bg-slate-50' : 'shadow-sm'}`}
              onClick={() => setFilter('Unread')}
            >
              Unread ({counts.Unread})
            </Button>
            <Button 
              variant={filter === 'Approvals' ? 'default' : 'outline'} 
              className={`rounded-full ${filter !== 'Approvals' ? 'text-slate-600 bg-slate-50' : 'shadow-sm'}`}
              onClick={() => setFilter('Approvals')}
            >
              Approvals ({counts.Approvals})
            </Button>
            <Button 
              variant={filter === 'Updates' ? 'default' : 'outline'} 
              className={`rounded-full ${filter !== 'Updates' ? 'text-slate-600 bg-slate-50' : 'shadow-sm'}`}
              onClick={() => setFilter('Updates')}
            >
              Updates ({counts.Updates})
            </Button>
          </div>

          <div className="space-y-4">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notif) => (
                <div 
                  key={notif.id} 
                  className={`flex gap-4 p-4 rounded-xl transition-colors hover:bg-slate-50 ${notif.unread ? 'bg-slate-50/80 border border-slate-100' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${notif.bg} ${notif.color}`}>
                    <notif.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold text-base mb-1 truncate ${notif.unread ? 'text-slate-900' : 'text-slate-700'}`}>
                      {notif.title}
                    </h4>
                    <p className="text-slate-500 text-sm truncate">{notif.desc}</p>
                  </div>
                  <div className="flex flex-col items-end shrink-0 gap-2">
                    <span className="text-xs font-medium text-slate-400 whitespace-nowrap">{notif.time}</span>
                    {notif.unread && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                    )}
                  </div>
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

export default Notifications;

