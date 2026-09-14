import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Building2, LayoutDashboard, FileText, CheckSquare, BarChart2, Bell, User, LogOut } from 'lucide-react';

const CTPOLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login/ctpo');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <Building2 className="sidebar-logo-icon" />
          <div className="sidebar-logo-text">
            <h2>CampusFlow</h2>
            <p>Permissions Made Simple</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/ctpo/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <LayoutDashboard className="nav-icon" /> Dashboard
          </NavLink>
          <NavLink to="/ctpo/student-requests" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FileText className="nav-icon" /> Student Requests
          </NavLink>
          <NavLink to="/ctpo/my-approvals" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <CheckSquare className="nav-icon" /> My Approvals
          </NavLink>
          <NavLink to="/ctpo/reports" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <BarChart2 className="nav-icon" /> Reports
          </NavLink>
          <NavLink to="/ctpo/notifications" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Bell className="nav-icon" /> Notifications
            <span className="sidebar-badge">4</span>
          </NavLink>
          <NavLink to="/ctpo/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <User className="nav-icon" /> Profile
          </NavLink>
        </nav>

        <div className="sidebar-footer" style={{ padding: '24px 16px' }}>
          <div style={{ padding: '0 12px 24px 12px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
            Learn<br/>Grow<br/>Belong
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut className="nav-icon" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="main-area">
        {/* Top Header */}
        <header className="top-header">
          <div className="header-left"></div>
          <div className="header-right">
            <div className="notification-bell">
              <Bell size={20} />
              <span className="badge">4</span>
            </div>
            <div className="user-profile">
              <div className="avatar" style={{ background: 'var(--primary)' }}>D</div>
              <div className="user-info">
                <span className="name">Dr. R. Sharma</span>
                <span className="roll">CTPO | CSM</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CTPOLayout;
