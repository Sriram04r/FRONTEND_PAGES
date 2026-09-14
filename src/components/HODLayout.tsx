import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Building2, LayoutDashboard, GitBranch, FileText, CheckSquare, BarChart2, Bell, User, LogOut } from 'lucide-react';

const HODLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login/hod');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar" style={{ background: '#4c1d95' }}>
        <div className="sidebar-header">
          <Building2 className="sidebar-logo-icon" />
          <div className="sidebar-logo-text">
            <h2>CampusFlow</h2>
            <p>Permissions Made Simple</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/hod/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <LayoutDashboard className="nav-icon" /> Dashboard
          </NavLink>
          <NavLink to="/hod/branches" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <GitBranch className="nav-icon" /> Branches
          </NavLink>
          <NavLink to="/hod/student-requests" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FileText className="nav-icon" /> Student Requests
          </NavLink>
          <NavLink to="/hod/my-approvals" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <CheckSquare className="nav-icon" /> My Approvals
          </NavLink>
          <NavLink to="/hod/reports" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <BarChart2 className="nav-icon" /> Reports
          </NavLink>
          <NavLink to="/hod/notifications" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Bell className="nav-icon" /> Notifications
            <span className="sidebar-badge">9</span>
          </NavLink>
          <NavLink to="/hod/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <User className="nav-icon" /> Profile
          </NavLink>
        </nav>

        <div className="sidebar-footer" style={{ padding: '24px 16px' }}>
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut className="nav-icon" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="main-area">
        {/* Top Header */}
        <header className="top-header">
          <div className="header-left">
            <span style={{ fontWeight: 600, color: '#4c1d95', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Building2 size={20} /> Head of Department (CSE)
            </span>
          </div>
          <div className="header-right">
            <div className="notification-bell">
              <Bell size={20} />
              <span className="badge">9</span>
            </div>
            <div className="user-profile">
              <div className="avatar" style={{ background: '#4c1d95' }}>H</div>
              <div className="user-info">
                <span className="name">Dr. R. Sharma</span>
                <span className="roll">HOD | CSE</span>
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

export default HODLayout;
