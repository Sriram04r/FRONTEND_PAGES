
import { Outlet, Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="layout-overlay"></div>
      
      <div className="app-wrapper">
        <header className="header">
          <Link to="/" className="logo-container">
            <Building2 className="logo-icon" />
            <div className="logo-text">
              <h1>CampusFlow</h1>
              <p>Permissions Made Simple</p>
            </div>
          </Link>
          
          <nav className="header-links">
            <span>Simple <div className="dot"></div> Secure <div className="dot"></div> Smart</span>
          </nav>
        </header>
        
        <main className="main-content">
          <div className="hero-text">
            <h2>Your<br/>Campus,<br/>Made <span>Easier</span></h2>
            <p>Manage your permissions in a simple and secure way.</p>
          </div>
          
          <div className="card-container">
            <Outlet />
          </div>
        </main>
        
        <footer className="footer-nav">
          <span>Students</span>
          <span>Faculty</span>
          <span>A Smarter Campus</span>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
