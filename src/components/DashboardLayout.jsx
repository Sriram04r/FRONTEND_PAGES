import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Building2, Home, User, FileText, List, Bell, Clock, LogOut, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const navItemClass = ({ isActive }) => 
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      isActive ? 'bg-[#4f46e5] text-white font-medium shadow-sm' : 'text-white/70 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans p-4 gap-4">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e1b4b] rounded-2xl flex flex-col hidden md:flex shadow-xl z-10 overflow-hidden">
        <div className="p-6 flex items-center gap-3 border-b border-white/10">
          <div className="bg-white p-2 rounded-lg text-[#1e1b4b] shadow-sm">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-white tracking-wide">CampusFlow</h2>
            <p className="text-[10px] text-white/70 font-medium">Permissions Made Simple</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          <NavLink to="/student/dashboard" className={navItemClass}>
            <Home className="w-5 h-5" /> Dashboard
          </NavLink>
          <NavLink to="/student/profile" className={navItemClass}>
            <User className="w-5 h-5" /> My Profile
          </NavLink>
          <NavLink to="/student/permission-request" className={navItemClass}>
            <FileText className="w-5 h-5" /> Permission Request
          </NavLink>
          <NavLink to="/student/my-requests" className={navItemClass}>
            <List className="w-5 h-5" /> My Requests
          </NavLink>
          <NavLink to="/student/my-documents" className={navItemClass}>
            <Download className="w-5 h-5" /> My Documents
          </NavLink>
          <NavLink to="/student/notifications" className={navItemClass}>
            <Bell className="w-5 h-5" /> Notifications
          </NavLink>
          <NavLink to="/student/request-tracking" className={navItemClass}>
            <Clock className="w-5 h-5" /> Request Tracking
          </NavLink>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10 rounded-xl" onClick={handleLogout}>
            <LogOut className="w-5 h-5 mr-3" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-white rounded-2xl shadow-sm">
        {/* Top Header */}
        <header className="bg-white h-16 border-b border-slate-100 flex items-center justify-between px-6 shrink-0 z-10">
          <div className="flex items-center">
            {/* Breadcrumbs or Mobile Menu Toggle can go here */}
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-slate-500 hover:text-slate-700 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                S
              </div>
              <div className="hidden sm:block text-sm">
                <p className="font-semibold text-slate-900 leading-tight">Siva Kumar</p>
                <p className="text-xs text-slate-500">Roll No: 23B210AH13</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

