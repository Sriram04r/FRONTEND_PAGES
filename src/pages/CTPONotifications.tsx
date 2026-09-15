import { FileText, CheckCircle2, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CTPONotifications = () => {
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
          <Button variant="default" className="rounded-full bg-blue-600 hover:bg-blue-700 h-9 px-4">All (4)</Button>
          <Button variant="outline" className="rounded-full h-9 px-4 border-slate-200 text-slate-600 hover:bg-slate-50">Unread (2)</Button>
          <Button variant="outline" className="rounded-full h-9 px-4 border-slate-200 text-slate-600 hover:bg-slate-50">Approvals (1)</Button>
          <Button variant="outline" className="rounded-full h-9 px-4 border-slate-200 text-slate-600 hover:bg-slate-50">Updates (1)</Button>
        </div>

        <CardContent className="p-0">
          <div className="divide-y divide-slate-100">
            <div className="flex items-start gap-4 p-5 hover:bg-slate-50/80 transition-colors group relative bg-blue-50/30">
              <div className="p-2 rounded-full bg-indigo-100 text-indigo-600 shrink-0 mt-1">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-900 mb-1">New Permission Request</h4>
                <p className="text-sm text-slate-600 truncate group-hover:whitespace-normal">A. Tejaswi (23B210AH13) has submitted a Library permission request.</p>
                <div className="text-xs text-slate-400 mt-2 flex items-center gap-2">
                  10 Sep 2025, 09:15 AM
                </div>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 mt-2 shadow-sm"></div>
            </div>

            <div className="flex items-start gap-4 p-5 hover:bg-slate-50/80 transition-colors group relative">
              <div className="p-2 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-900 mb-1">Request Approved</h4>
                <p className="text-sm text-slate-600 truncate group-hover:whitespace-normal">You have approved C. Meghana's Internship request.</p>
                <div className="text-xs text-slate-400 mt-2 flex items-center gap-2">
                  09 Sep 2025, 11:20 AM
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 hover:bg-slate-50/80 transition-colors group relative bg-blue-50/30">
              <div className="p-2 rounded-full bg-indigo-100 text-indigo-600 shrink-0 mt-1">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-900 mb-1">New Permission Request</h4>
                <p className="text-sm text-slate-600 truncate group-hover:whitespace-normal">B. Kiran (23B210AH12) has submitted an Outpass request.</p>
                <div className="text-xs text-slate-400 mt-2 flex items-center gap-2">
                  10 Sep 2025, 10:00 AM
                </div>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 mt-2 shadow-sm"></div>
            </div>

            <div className="flex items-start gap-4 p-5 hover:bg-slate-50/80 transition-colors group relative">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600 shrink-0 mt-1">
                <Info className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-900 mb-1">System Update</h4>
                <p className="text-sm text-slate-600 truncate group-hover:whitespace-normal">Permission module has been updated with new features.</p>
                <div className="text-xs text-slate-400 mt-2 flex items-center gap-2">
                  08 Sep 2025, 04:10 PM
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CTPONotifications;
