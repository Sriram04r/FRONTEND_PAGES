import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Building2, Users, FileText, Settings, Bell, 
  Menu, X, LogOut, ChevronDown, CheckSquare, 
  BookOpen, UserCog, UserCheck, Activity, BarChart, GitBranch
} from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: Activity, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Building2, label: 'Colleges', path: '/admin/colleges' },
    { icon: BookOpen, label: 'Departments', path: '/admin/departments' },
    { icon: GitBranch, label: 'Branches', path: '/admin/branches' },
    { icon: UserCheck, label: 'Faculty Registrations', path: '/admin/faculty-registrations' },
    { icon: UserCog, label: 'HOD Management', path: '/admin/hod-management' },
    { icon: Users, label: 'Faculty Management', path: '/admin/faculty-management' },
    { icon: Users, label: 'Student Management', path: '/admin/student-management' },
    { icon: FileText, label: 'All Requests', path: '/admin/requests' },
    { icon: CheckSquare, label: 'My Approvals', path: '/admin/approvals' },
    { icon: Bell, label: 'Notifications', path: '/admin/notifications' },
    { icon: BarChart, label: 'Reports & Analytics', path: '/admin/reports' },
    { icon: UserCog, label: 'User Management', path: '/admin/users' },
    { icon: Settings, label: 'System Settings', path: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-64 bg-[#1e293b] text-white transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-16 flex items-center px-6 border-b border-slate-700 bg-[#0f172a]">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-indigo-400" />
            <span className="text-lg font-bold">CampusFlow</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-auto lg:hidden text-slate-300 hover:text-white hover:bg-slate-700"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-4 flex-1 overflow-y-auto hide-scrollbar h-[calc(100vh-64px)]">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
            Admin Menu
          </div>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname.includes(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-indigo-600/10 text-indigo-400' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }
                  `}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 z-30">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-slate-500"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative text-slate-500 hover:bg-slate-100 rounded-full">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-2 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="pl-2 pr-3 py-1.5 h-10 hover:bg-slate-100 rounded-full flex items-center gap-2">
                  <Avatar className="w-7 h-7 border border-slate-200">
                    <AvatarImage src="https://ui-avatars.com/api/?name=Admin&background=4f46e5&color=fff" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <div className="hidden sm:block text-left mr-1">
                    <div className="text-sm font-medium text-slate-700 leading-none mb-1">Admin</div>
                    <div className="text-[10px] text-slate-500 leading-none">Super Administrator</div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/admin/profile')} className="cursor-pointer">
                  <UserCog className="w-4 h-4 mr-2" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/admin/settings')} className="cursor-pointer">
                  <Settings className="w-4 h-4 mr-2" /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-rose-600 cursor-pointer focus:text-rose-700 focus:bg-rose-50" onClick={() => navigate('/')}>
                  <LogOut className="w-4 h-4 mr-2" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto bg-slate-50/50 p-4 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;

