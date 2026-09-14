import { Link } from 'react-router-dom';
import { ChevronDown, Monitor, GraduationCap, Database, Cpu, Shield } from 'lucide-react';

const HODBranches = () => {
  return (
    <div>
      <div className="dash-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>Branches - CSE Department</h1>
          <p>Select a branch to view student requests and details.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>Academic Year:</span>
          <div className="select-wrapper">
            <select className="form-input" style={{ padding: '8px 32px 8px 16px', background: 'white' }}>
              <option>2025 - 2026</option>
              <option>2024 - 2025</option>
            </select>
            <ChevronDown className="select-icon-right" size={16} />
          </div>
        </div>
      </div>

      <div className="dash-card">
        <div className="table-wrapper">
          <table className="dash-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Branch Code</th>
                <th>Branch Name</th>
                <th style={{ textAlign: 'center' }}>Hostel<br/>Requests</th>
                <th style={{ textAlign: 'center' }}>Day Scholar<br/>Requests</th>
                <th style={{ textAlign: 'center' }}>Total</th>
                <th style={{ textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: '#1e293b' }}>
                  <div className="branch-icon" style={{ background: '#3b82f6', width: '24px', height: '24px' }}><Monitor size={14} /></div>
                  CSEM
                </td>
                <td>Computer Science & Engineering</td>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#3b82f6' }}>8</td>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#10b981' }}>4</td>
                <td style={{ textAlign: 'center', fontWeight: 700, color: '#ef4444' }}>12</td>
                <td style={{ textAlign: 'center' }}>
                  <Link to="/hod/student-requests" className="action-btn" style={{ background: '#f3e8ff', color: '#6b3fc5' }}>View</Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: '#1e293b' }}>
                  <div className="branch-icon" style={{ background: '#10b981', width: '24px', height: '24px' }}><GraduationCap size={14} /></div>
                  CAI
                </td>
                <td>Computer Applications & Informatics</td>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#3b82f6' }}>4</td>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#10b981' }}>2</td>
                <td style={{ textAlign: 'center', fontWeight: 700, color: '#ef4444' }}>6</td>
                <td style={{ textAlign: 'center' }}>
                  <Link to="/hod/student-requests" className="action-btn" style={{ background: '#f3e8ff', color: '#6b3fc5' }}>View</Link>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: '#1e293b' }}>
                  <div className="branch-icon" style={{ background: '#ef4444', width: '24px', height: '24px' }}><Database size={14} /></div>
                  CSD
                </td>
                <td>Computer Science & Data Science</td>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#3b82f6' }}>5</td>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#10b981' }}>4</td>
                <td style={{ textAlign: 'center', fontWeight: 700, color: '#ef4444' }}>9</td>
                <td style={{ textAlign: 'center' }}>
                  <Link to="/hod/student-requests" className="action-btn" style={{ background: '#f3e8ff', color: '#6b3fc5' }}>View</Link>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: '#1e293b' }}>
                  <div className="branch-icon" style={{ background: '#3b82f6', width: '24px', height: '24px' }}><Cpu size={14} /></div>
                  AID
                </td>
                <td>Artificial Intelligence & Data</td>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#3b82f6' }}>4</td>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#10b981' }}>3</td>
                <td style={{ textAlign: 'center', fontWeight: 700, color: '#ef4444' }}>7</td>
                <td style={{ textAlign: 'center' }}>
                  <Link to="/hod/student-requests" className="action-btn" style={{ background: '#f3e8ff', color: '#6b3fc5' }}>View</Link>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: '#1e293b' }}>
                  <div className="branch-icon" style={{ background: '#d946ef', width: '24px', height: '24px' }}><Shield size={14} /></div>
                  Cyber
                </td>
                <td>Cyber Security</td>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#3b82f6' }}>6</td>
                <td style={{ textAlign: 'center', fontWeight: 600, color: '#10b981' }}>4</td>
                <td style={{ textAlign: 'center', fontWeight: 700, color: '#ef4444' }}>10</td>
                <td style={{ textAlign: 'center' }}>
                  <Link to="/hod/student-requests" className="action-btn" style={{ background: '#f3e8ff', color: '#6b3fc5' }}>View</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div style={{ marginTop: '24px', background: '#f8fafc', padding: '16px', borderRadius: '12px', color: '#64748b', fontSize: '0.9rem', textAlign: 'center' }}>
          <strong>ℹ️ Click on "View"</strong> to see branch-wise detailed requests (Hostel & Day Scholar).
        </div>
      </div>
    </div>
  );
};

export default HODBranches;
