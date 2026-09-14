import { Link } from 'react-router-dom';
import { LayoutDashboard, CheckCircle2, Clock, XCircle, ArrowRight, Bus, Stethoscope, Home, Briefcase, Calendar, BookOpen, UserMinus, MoreHorizontal } from 'lucide-react';

const StudentDashboard = () => {
  return (
    <div>
      <div className="dash-header" style={{ backgroundImage: 'url(/campus-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px', borderRadius: '16px', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(107, 63, 197, 0.7)', backdropFilter: 'blur(4px)' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>Hello, Siva Kumar!</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>Manage your permissions and stay updated.</p>
          <div style={{ marginTop: '24px', background: 'white', color: 'var(--primary)', display: 'inline-block', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold' }}>
            LEARN • GROW • BELONG
          </div>
        </div>
      </div>

      <div className="stats-grid" style={{ marginTop: '24px' }}>
        <div className="stat-card">
          <div className="stat-icon total"><LayoutDashboard /></div>
          <div className="stat-info">
            <h3>5</h3>
            <p>Total Requests</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon approved"><CheckCircle2 /></div>
          <div className="stat-info">
            <h3>3</h3>
            <p>Approved</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon pending"><Clock /></div>
          <div className="stat-info">
            <h3>1</h3>
            <p>Pending</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon rejected"><XCircle /></div>
          <div className="stat-info">
            <h3>1</h3>
            <p>Rejected</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '32px', marginBottom: '32px' }}>
        <div className="dash-card" style={{ flex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3>Request a Permission</h3>
            <Link to="/student/permission-request" style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>View All <ArrowRight size={16} /></Link>
          </div>
          
          <div className="permission-grid">
            <div className="perm-card">
              <div className="icon-wrapper"><Bus /></div>
              <h4>Bus Permission</h4>
            </div>
            <div className="perm-card">
              <div className="icon-wrapper"><Stethoscope /></div>
              <h4>Medical Permission</h4>
            </div>
            <div className="perm-card">
              <div className="icon-wrapper"><Home /></div>
              <h4>Hostel Permission</h4>
            </div>
            <div className="perm-card">
              <div className="icon-wrapper"><Briefcase /></div>
              <h4>Internship Permission</h4>
            </div>
            <div className="perm-card">
              <div className="icon-wrapper"><Calendar /></div>
              <h4>Event Permission</h4>
            </div>
            <Link to="/student/library-permission" className="perm-card" style={{ textDecoration: 'none' }}>
              <div className="icon-wrapper"><BookOpen /></div>
              <h4>Library Permission</h4>
            </Link>
            <div className="perm-card">
              <div className="icon-wrapper"><UserMinus /></div>
              <h4>Outpass Permission</h4>
            </div>
            <div className="perm-card">
              <div className="icon-wrapper"><MoreHorizontal /></div>
              <h4>Other Permission</h4>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '32px' }}>
        <div className="dash-card" style={{ flex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3>Recent Requests</h3>
            <Link to="/student/my-requests" style={{ fontSize: '0.85rem' }}>View All →</Link>
          </div>
          <div className="table-wrapper">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Library</td>
                  <td>10 Sep 2025</td>
                  <td><span className="status-badge approved">Approved</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Outpass</td>
                  <td>08 Sep 2025</td>
                  <td><span className="status-badge pending">Pending</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Medical</td>
                  <td>05 Sep 2025</td>
                  <td><span className="status-badge approved">Approved</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="dash-card" style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3>Announcements</h3>
            <Link to="/student/notifications" style={{ fontSize: '0.85rem' }}>View All →</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', marginTop: '6px' }}></div>
              <div>
                <p style={{ fontSize: '0.9rem', color: '#1e293b' }}>Campus Fest registrations are open!</p>
                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Sep 12, 2025</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#dc2626', marginTop: '6px' }}></div>
              <div>
                <p style={{ fontSize: '0.9rem', color: '#1e293b' }}>Library will be closed on 16th Sep</p>
                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Sep 10, 2025</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ca8a04', marginTop: '6px' }}></div>
              <div>
                <p style={{ fontSize: '0.9rem', color: '#1e293b' }}>Submit your internship details early</p>
                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Sep 09, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
