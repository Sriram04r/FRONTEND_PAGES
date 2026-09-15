import { Outlet, Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-slate-900 bg-[url('/campus-bg.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-0"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex flex-col min-h-screen">
        <header className="flex justify-between items-center mb-12">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary/20 p-2 rounded-xl text-primary-foreground group-hover:bg-primary transition-colors">
              <Building2 className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">CampusFlow</h1>
              <p className="text-sm text-slate-300">Permissions Made Simple</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center text-slate-300 text-sm font-medium">
            <span>Simple</span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary mx-4"></div>
            <span>Secure</span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary mx-4"></div>
            <span>Smart</span>
          </nav>
        </header>
        
        <main className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-white lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-6">
              Your<br/>Campus,<br/>Made <span className="text-primary bg-clip-text">Easier</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-md">Manage your permissions in a simple, secure, and smart way.</p>
          </div>
          
          <div className="w-full max-w-md lg:w-1/2">
            <Outlet />
          </div>
        </main>
        
        <footer className="mt-12 pt-8 border-t border-slate-700/50 flex justify-between items-center text-sm text-slate-400">
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Students</span>
            <span className="hover:text-white cursor-pointer transition-colors">Faculty</span>
          </div>
          <span>A Smarter Campus</span>
        </footer>
      </div>
    </div>
  );
};

export default Layout;

