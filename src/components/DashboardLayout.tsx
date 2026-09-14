import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Building2, Home, User, FileText, List, Bell, Clock, LogOut, Download } from 'lucide-react';

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login/student');
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
          <NavLink to="/student/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Home className="nav-icon" /> Dashboard
          </NavLink>
          <NavLink to="/student/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <User className="nav-icon" /> My Profile
          </NavLink>
          <NavLink to="/student/permission-request" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FileText className="nav-icon" /> Permission Request
          </NavLink>
          <NavLink to="/student/my-requests" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <List className="nav-icon" /> My Requests
          </NavLink>
          <NavLink to="/student/my-documents" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Download className="nav-icon" /> My Documents
          </NavLink>
          <NavLink to="/student/notifications" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Bell className="nav-icon" /> Notifications
          </NavLink>
          <NavLink to="/student/request-tracking" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Clock className="nav-icon" /> Request Tracking
          </NavLink>
        </nav>

        <div className="sidebar-footer">
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
            {/* Can put breadcrumbs or title here if needed */}
          </div>
          <div className="header-right">
            <div className="notification-bell">
              <Bell size={20} />
              <span className="badge">3</span>
            </div>
            <div className="user-profile">
              <div className="avatar">S</div>
              <div className="user-info">
                <span className="name">Siva Kumar</span>
                <span className="roll">Roll No: 23B210AH13</span>
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

export default DashboardLayout;
