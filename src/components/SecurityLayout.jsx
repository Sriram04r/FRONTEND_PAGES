import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileCheck, ClipboardList, Users, LogOut, Menu, X, ShieldCheck } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const SecurityLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/security/dashboard' },
    { icon: FileCheck, label: 'Approved Outpass', path: '/security/approved-outpass' },
    { icon: ClipboardList, label: 'Outpass Log', path: '/security/outpass-log' },
    { icon: Users, label: 'Student Records', path: '/security/student-records' },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Deep Indigo (#312e81) */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#2e2b6d] text-white flex flex-col
        transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Brand */}
        <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0">
          <ShieldCheck className="w-6 h-6 text-indigo-300 mr-3" />
          <span className="text-xl font-bold tracking-tight text-white">CampusFlow</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname.includes(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-indigo-100/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-indigo-300'}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10 shrink-0">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg font-medium text-indigo-100/70 hover:bg-rose-500/20 hover:text-rose-200 transition-colors"
          >
            <LogOut className="w-5 h-5 text-rose-300" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 shrink-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-slate-800 hidden sm:block">Security Portal</h2>
              <span className="text-xs text-slate-500 hidden sm:block">Safer Campus, Brighter Tomorrow</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500 mr-4">
              <span className="font-medium text-slate-700">10 Sep 2025</span>
              <span>10:24 AM</span>
            </div>
            
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-semibold text-slate-700">Ramesh</p>
                <p className="text-xs text-slate-500">Security Guard</p>
              </div>
              <Avatar className="h-9 w-9 border-2 border-indigo-100">
                <AvatarImage src="https://ui-avatars.com/api/?name=Ramesh&background=4f46e5&color=fff" />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto bg-slate-50/50 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-6xl h-full">
            <Outlet />
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default SecurityLayout;
