import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Building2, LayoutDashboard, FileText, CheckSquare, BarChart2, Bell, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTPOLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const navItemClass = ({ isActive }) => 
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      isActive ? 'bg-[#6d28d9] text-white font-medium shadow-sm' : 'text-white/70 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#4c1d95] flex flex-col hidden md:flex shadow-xl z-10">
        <div className="p-6 flex items-center gap-3 border-b border-white/10">
          <div className="bg-white p-2 rounded-lg text-[#4c1d95] shadow-sm">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-white tracking-wide">CampusFlow</h2>
            <p className="text-[10px] text-white/70 font-medium">Permissions Made Simple</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          <NavLink to="/ctpo/dashboard" className={navItemClass}>
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </NavLink>
          <NavLink to="/ctpo/student-requests" className={navItemClass}>
            <FileText className="w-5 h-5" /> Student Requests
          </NavLink>
          <NavLink to="/ctpo/my-approvals" className={navItemClass}>
            <CheckSquare className="w-5 h-5" /> My Approvals
          </NavLink>
          <NavLink to="/ctpo/reports" className={navItemClass}>
            <BarChart2 className="w-5 h-5" /> Reports
          </NavLink>
          <NavLink to="/ctpo/notifications" className={navItemClass}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5" /> Notifications
              </div>
              <span className="bg-[#7c3aed] text-white py-0.5 px-2.5 rounded-full text-xs font-bold shadow-sm">4</span>
            </div>
          </NavLink>
          <NavLink to="/ctpo/profile" className={navItemClass}>
            <User className="w-5 h-5" /> Profile
          </NavLink>
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="px-3 pb-6 text-xs text-white/50 leading-relaxed font-medium">
            Learn<br/>Grow<br/>Belong
          </div>
          <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10 rounded-xl" onClick={handleLogout}>
            <LogOut className="w-5 h-5 mr-3" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="bg-white h-16 border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center">
             <span className="font-semibold text-blue-700 flex items-center gap-2">
              <Building2 className="w-5 h-5" /> Chief Training & Placement Officer
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-slate-500 hover:text-slate-700 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">4</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                D
              </div>
              <div className="hidden sm:block text-sm">
                <p className="font-semibold text-slate-900 leading-tight">Dr. R. Sharma</p>
                <p className="text-xs text-slate-500">CTPO | CSM</p>
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

export default CTPOLayout;

