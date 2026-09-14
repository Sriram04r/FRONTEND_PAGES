import { Link } from 'react-router-dom';
import { FileText, Clock, CheckCircle2, XCircle, ArrowRight, GraduationCap, Monitor, Database, Cpu, Shield } from 'lucide-react';

const HODDashboard = () => {
  return (
    <div>
      <div className="dash-header" style={{ backgroundImage: 'url(/campus-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px', borderRadius: '16px', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(76, 29, 149, 0.7)', backdropFilter: 'blur(4px)' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>Welcome, Dr. R. Sharma</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>Head of Department – Computer Science & Engineering</p>
          
          <div className="stats-grid" style={{ marginTop: '24px', marginBottom: 0, gridTemplateColumns: 'repeat(4, auto)', gap: '16px', display: 'inline-grid' }}>
            <div className="stat-card" style={{ padding: '12px 20px' }}>
              <div className="stat-icon total" style={{ width: '32px', height: '32px' }}><FileText size={16} /></div>
              <div className="stat-info">
                <h3 style={{ fontSize: '1.2rem' }}>24</h3>
                <p style={{ fontSize: '0.7rem' }}>Total Requests</p>
              </div>
            </div>
            <div className="stat-card" style={{ padding: '12px 20px' }}>
              <div className="stat-icon pending" style={{ width: '32px', height: '32px', background: '#fef3c7', color: '#d97706' }}><Clock size={16} /></div>
              <div className="stat-info">
                <h3 style={{ fontSize: '1.2rem' }}>12</h3>
                <p style={{ fontSize: '0.7rem' }}>Pending</p>
              </div>
            </div>
            <div className="stat-card" style={{ padding: '12px 20px' }}>
              <div className="stat-icon approved" style={{ width: '32px', height: '32px' }}><CheckCircle2 size={16} /></div>
              <div className="stat-info">
                <h3 style={{ fontSize: '1.2rem' }}>9</h3>
                <p style={{ fontSize: '0.7rem' }}>Approved</p>
              </div>
            </div>
            <div className="stat-card" style={{ padding: '12px 20px' }}>
              <div className="stat-icon rejected" style={{ width: '32px', height: '32px' }}><XCircle size={16} /></div>
              <div className="stat-info">
                <h3 style={{ fontSize: '1.2rem' }}>3</h3>
                <p style={{ fontSize: '0.7rem' }}>Rejected</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px', marginBottom: '16px' }}>
        <h3>Branches under CSE Department</h3>
      </div>

      <div className="branches-grid">
        <div className="branch-card">
          <div className="badge">12</div>
          <div className="branch-header">
            <div className="branch-icon" style={{ background: '#3b82f6' }}><Monitor size={18} /></div>
            <div className="branch-name">CSEM</div>
          </div>
          <div className="branch-desc">Computer Science & Engineering</div>
          <div className="branch-stats">
            <div className="b-stat"><span>Hostel</span><strong>8</strong></div>
            <div className="b-stat"><span>Day Scholar</span><strong>4</strong></div>
          </div>
          <Link to="/hod/student-requests" className="action-btn" style={{ width: '100%', textAlign: 'center', background: '#4c1d95', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>View Requests <ArrowRight size={14} /></Link>
        </div>

        <div className="branch-card">
          <div className="badge">6</div>
          <div className="branch-header">
            <div className="branch-icon" style={{ background: '#10b981' }}><GraduationCap size={18} /></div>
            <div className="branch-name">CAI</div>
          </div>
          <div className="branch-desc">Computer Applications & Informatics</div>
          <div className="branch-stats">
            <div className="b-stat"><span>Hostel</span><strong>4</strong></div>
            <div className="b-stat"><span>Day Scholar</span><strong>2</strong></div>
          </div>
          <Link to="/hod/student-requests" className="action-btn" style={{ width: '100%', textAlign: 'center', background: '#4c1d95', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>View Requests <ArrowRight size={14} /></Link>
        </div>

        <div className="branch-card">
          <div className="badge">9</div>
          <div className="branch-header">
            <div className="branch-icon" style={{ background: '#ef4444' }}><Database size={18} /></div>
            <div className="branch-name">CSD</div>
          </div>
          <div className="branch-desc">Computer Science & Data Science</div>
          <div className="branch-stats">
            <div className="b-stat"><span>Hostel</span><strong>5</strong></div>
            <div className="b-stat"><span>Day Scholar</span><strong>4</strong></div>
          </div>
          <Link to="/hod/student-requests" className="action-btn" style={{ width: '100%', textAlign: 'center', background: '#4c1d95', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>View Requests <ArrowRight size={14} /></Link>
        </div>

        <div className="branch-card">
          <div className="badge">7</div>
          <div className="branch-header">
            <div className="branch-icon" style={{ background: '#3b82f6' }}><Cpu size={18} /></div>
            <div className="branch-name">AID</div>
          </div>
          <div className="branch-desc">Artificial Intelligence & Data</div>
          <div className="branch-stats">
            <div className="b-stat"><span>Hostel</span><strong>4</strong></div>
            <div className="b-stat"><span>Day Scholar</span><strong>3</strong></div>
          </div>
          <Link to="/hod/student-requests" className="action-btn" style={{ width: '100%', textAlign: 'center', background: '#4c1d95', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>View Requests <ArrowRight size={14} /></Link>
        </div>

        <div className="branch-card">
          <div className="badge">10</div>
          <div className="branch-header">
            <div className="branch-icon" style={{ background: '#d946ef' }}><Shield size={18} /></div>
            <div className="branch-name">Cyber</div>
          </div>
          <div className="branch-desc">Cyber Security</div>
          <div className="branch-stats">
            <div className="b-stat"><span>Hostel</span><strong>6</strong></div>
            <div className="b-stat"><span>Day Scholar</span><strong>4</strong></div>
          </div>
          <Link to="/hod/student-requests" className="action-btn" style={{ width: '100%', textAlign: 'center', background: '#4c1d95', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>View Requests <ArrowRight size={14} /></Link>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '32px' }}>
        <div className="dash-card" style={{ flex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3>Recent Requests (All Branches)</h3>
            <Link to="/hod/student-requests" style={{ fontSize: '0.85rem' }}>View All →</Link>
          </div>
          <div className="table-wrapper">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Student Name</th>
                  <th>Branch</th>
                  <th>Permission Type</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>A. Tejaswi</td>
                  <td>CSEM</td>
                  <td>Hostel</td>
                  <td>10 Sep 2025</td>
                  <td><span className="status-badge pending">Pending</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>B. Kiran</td>
                  <td>CAI</td>
                  <td>Day Scholar</td>
                  <td>10 Sep 2025</td>
                  <td><span className="status-badge pending">Pending</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>C. Meghana</td>
                  <td>CSD</td>
                  <td>Hostel</td>
                  <td>09 Sep 2025</td>
                  <td><span className="status-badge approved">Approved</span></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>M. Pavan</td>
                  <td>AID</td>
                  <td>Day Scholar</td>
                  <td>09 Sep 2025</td>
                  <td><span className="status-badge pending">Pending</span></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>K. Divya</td>
                  <td>Cyber</td>
                  <td>Hostel</td>
                  <td>08 Sep 2025</td>
                  <td><span className="status-badge rejected">Rejected</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="dash-card" style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '24px' }}>Permission Type Distribution</h3>
          <div className="pie-chart-container" style={{ justifyContent: 'center' }}>
            <div className="pie-chart">
              <div className="pie-chart-center">
                <div className="val">24</div>
                <div className="lbl">Total</div>
              </div>
            </div>
            <div className="pie-legend">
              <div className="legend-item">
                <div className="legend-color" style={{ background: '#8b5cf6' }}></div>
                <span>Hostel 14 (58%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ background: '#e2e8f0' }}></div>
                <span>Day Scholar 10 (42%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HODDashboard;
