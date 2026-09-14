import { Link } from 'react-router-dom';
import { FileText, Clock, CheckCircle2, XCircle, ArrowRight, Bus, Stethoscope, Home, Briefcase, Calendar, BookOpen, ChevronDown } from 'lucide-react';

const CTPODashboard = () => {
  return (
    <div>
      <div className="dash-header" style={{ backgroundImage: 'url(/campus-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '32px', borderRadius: '16px', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(107, 63, 197, 0.7)', backdropFilter: 'blur(4px)' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>Welcome, Dr. R. Sharma!</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>CTPO | CSM<br/>Manage and process permission requests from CSM students.</p>
          <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.2)', padding: '16px', borderRadius: '12px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.4)', textAlign: 'right' }}>
            <div style={{ fontWeight: 'bold' }}>Empowering</div>
            <div style={{ fontWeight: 'bold' }}>Students</div>
            <div style={{ fontWeight: 'bold' }}>Enabling</div>
            <div style={{ fontWeight: 'bold' }}>Opportunities</div>
          </div>
        </div>
      </div>

      <div className="stats-grid" style={{ marginTop: '24px' }}>
        <div className="stat-card">
          <div className="stat-icon total"><FileText /></div>
          <div className="stat-info">
            <h3>28</h3>
            <p>Total Requests</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon pending" style={{ background: '#fef3c7', color: '#d97706' }}><Clock /></div>
          <div className="stat-info">
            <h3>10</h3>
            <p>Pending</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon approved"><CheckCircle2 /></div>
          <div className="stat-info">
            <h3>16</h3>
            <p>Approved</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon rejected"><XCircle /></div>
          <div className="stat-info">
            <h3>2</h3>
            <p>Rejected</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '32px' }}>
        <div className="dash-card" style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3>Requests by Permission Type</h3>
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>(This Month)</p>
            </div>
            <div className="select-wrapper" style={{ width: '120px' }}>
              <select className="form-input" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                <option>This Month</option>
                <option>Last Month</option>
              </select>
              <ChevronDown className="select-icon-right" size={14} />
            </div>
          </div>
          
          <div className="chart-container">
            <div className="chart-bar-wrapper">
              <span className="chart-bar-value">8</span>
              <div className="chart-bar" style={{ height: '80%' }}></div>
              <div className="chart-bar-label"><Bus /><span>Bus</span></div>
            </div>
            <div className="chart-bar-wrapper">
              <span className="chart-bar-value">5</span>
              <div className="chart-bar" style={{ height: '50%' }}></div>
              <div className="chart-bar-label"><Stethoscope /><span>Medical</span></div>
            </div>
            <div className="chart-bar-wrapper">
              <span className="chart-bar-value">6</span>
              <div className="chart-bar" style={{ height: '60%' }}></div>
              <div className="chart-bar-label"><Home /><span>Hostel</span></div>
            </div>
            <div className="chart-bar-wrapper">
              <span className="chart-bar-value">4</span>
              <div className="chart-bar" style={{ height: '40%' }}></div>
              <div className="chart-bar-label"><Briefcase /><span>Internship</span></div>
            </div>
            <div className="chart-bar-wrapper">
              <span className="chart-bar-value">5</span>
              <div className="chart-bar" style={{ height: '50%' }}></div>
              <div className="chart-bar-label"><Calendar /><span>Event</span></div>
            </div>
            <div className="chart-bar-wrapper">
              <span className="chart-bar-value">2</span>
              <div className="chart-bar" style={{ height: '20%' }}></div>
              <div className="chart-bar-label"><BookOpen /><span>Library</span></div>
            </div>
          </div>
        </div>

        <div className="dash-card" style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3>Recent Requests</h3>
            <Link to="/ctpo/student-requests" style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>View All <ArrowRight size={14} /></Link>
          </div>
          <div className="table-wrapper">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Student Name</th>
                  <th>Permission Type</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>A. Tejaswi</td>
                  <td>Library</td>
                  <td>10 Sep 2025</td>
                  <td><span className="status-badge pending">Pending</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>B. Kiran</td>
                  <td>Outpass</td>
                  <td>10 Sep 2025</td>
                  <td><span className="status-badge pending">Pending</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>C. Meghana</td>
                  <td>Internship</td>
                  <td>09 Sep 2025</td>
                  <td><span className="status-badge approved">Approved</span></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>D. Sai Charan</td>
                  <td>Medical</td>
                  <td>09 Sep 2025</td>
                  <td><span className="status-badge pending">Pending</span></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>E. Vaishnavi</td>
                  <td>Event</td>
                  <td>08 Sep 2025</td>
                  <td><span className="status-badge approved">Approved</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTPODashboard;
