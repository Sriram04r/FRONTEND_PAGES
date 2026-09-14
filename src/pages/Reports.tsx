import { FileText, Download, FileSpreadsheet, Bus, Stethoscope, Home, Briefcase, Calendar, BookOpen, UserMinus, MoreHorizontal } from 'lucide-react';

const Reports = () => {
  return (
    <div>
      <div className="dash-header">
        <h1>Permission Reports</h1>
        <p>View and analyze permission data for CSM branch.</p>
      </div>

      <div className="dash-card">
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', alignItems: 'flex-end' }}>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '8px' }}>From Date</label>
            <input type="date" className="form-input" defaultValue="2025-09-01" />
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '8px' }}>To Date</label>
            <input type="date" className="form-input" defaultValue="2025-09-30" />
          </div>
          <button className="action-btn" style={{ height: '44px' }}>Generate Report</button>
        </div>

        <div className="stats-grid" style={{ marginBottom: '32px' }}>
          <div className="stat-card" style={{ padding: '16px', gap: '12px' }}>
            <div className="stat-icon total" style={{ width: '40px', height: '40px' }}><FileText size={20} /></div>
            <div className="stat-info">
              <h3 style={{ fontSize: '1.2rem' }}>28</h3>
              <p style={{ fontSize: '0.7rem' }}>Total Requests</p>
            </div>
          </div>
          <div className="stat-card" style={{ padding: '16px', gap: '12px' }}>
            <div className="stat-icon" style={{ background: '#dbeafe', color: '#3b82f6', width: '40px', height: '40px' }}><Bus size={20} /></div>
            <div className="stat-info">
              <h3 style={{ fontSize: '1.2rem' }}>6</h3>
              <p style={{ fontSize: '0.7rem' }}>Bus</p>
            </div>
          </div>
          <div className="stat-card" style={{ padding: '16px', gap: '12px' }}>
            <div className="stat-icon" style={{ background: '#fee2e2', color: '#ef4444', width: '40px', height: '40px' }}><Stethoscope size={20} /></div>
            <div className="stat-info">
              <h3 style={{ fontSize: '1.2rem' }}>4</h3>
              <p style={{ fontSize: '0.7rem' }}>Medical</p>
            </div>
          </div>
          <div className="stat-card" style={{ padding: '16px', gap: '12px' }}>
            <div className="stat-icon" style={{ background: '#fef3c7', color: '#f59e0b', width: '40px', height: '40px' }}><Home size={20} /></div>
            <div className="stat-info">
              <h3 style={{ fontSize: '1.2rem' }}>5</h3>
              <p style={{ fontSize: '0.7rem' }}>Hostel</p>
            </div>
          </div>
          <div className="stat-card" style={{ padding: '16px', gap: '12px' }}>
            <div className="stat-icon" style={{ background: '#dcfce7', color: '#22c55e', width: '40px', height: '40px' }}><Briefcase size={20} /></div>
            <div className="stat-info">
              <h3 style={{ fontSize: '1.2rem' }}>3</h3>
              <p style={{ fontSize: '0.7rem' }}>Internship</p>
            </div>
          </div>
          <div className="stat-card" style={{ padding: '16px', gap: '12px' }}>
            <div className="stat-icon" style={{ background: '#f3e8ff', color: '#a855f7', width: '40px', height: '40px' }}><Calendar size={20} /></div>
            <div className="stat-info">
              <h3 style={{ fontSize: '1.2rem' }}>4</h3>
              <p style={{ fontSize: '0.7rem' }}>Event</p>
            </div>
          </div>
          <div className="stat-card" style={{ padding: '16px', gap: '12px' }}>
            <div className="stat-icon" style={{ background: '#e0f2fe', color: '#0ea5e9', width: '40px', height: '40px' }}><BookOpen size={20} /></div>
            <div className="stat-info">
              <h3 style={{ fontSize: '1.2rem' }}>4</h3>
              <p style={{ fontSize: '0.7rem' }}>Library</p>
            </div>
          </div>
          <div className="stat-card" style={{ padding: '16px', gap: '12px' }}>
            <div className="stat-icon" style={{ background: '#ffe4e6', color: '#f43f5e', width: '40px', height: '40px' }}><UserMinus size={20} /></div>
            <div className="stat-info">
              <h3 style={{ fontSize: '1.2rem' }}>0</h3>
              <p style={{ fontSize: '0.7rem' }}>Outpass</p>
            </div>
          </div>
          <div className="stat-card" style={{ padding: '16px', gap: '12px' }}>
            <div className="stat-icon" style={{ background: '#f1f5f9', color: '#64748b', width: '40px', height: '40px' }}><MoreHorizontal size={20} /></div>
            <div className="stat-info">
              <h3 style={{ fontSize: '1.2rem' }}>2</h3>
              <p style={{ fontSize: '0.7rem' }}>Others</p>
            </div>
          </div>
        </div>

        <h3 style={{ marginBottom: '16px' }}>Permission Type Summary</h3>
        <div className="table-wrapper" style={{ marginBottom: '32px' }}>
          <table className="dash-table">
            <thead>
              <tr>
                <th>Permission Type</th>
                <th>Total</th>
                <th>Approved</th>
                <th>Pending</th>
                <th>Rejected</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Bus</td><td>6</td><td>4</td><td>2</td><td>0</td></tr>
              <tr><td>Medical</td><td>4</td><td>3</td><td>1</td><td>0</td></tr>
              <tr><td>Hostel</td><td>5</td><td>4</td><td>1</td><td>0</td></tr>
              <tr><td>Internship</td><td>3</td><td>2</td><td>1</td><td>0</td></tr>
              <tr><td>Event</td><td>4</td><td>2</td><td>1</td><td>1</td></tr>
              <tr><td>Library</td><td>4</td><td>2</td><td>2</td><td>0</td></tr>
              <tr><td>Outpass</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
              <tr><td>Others</td><td>2</td><td>1</td><td>0</td><td>1</td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="action-btn" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Download size={18} /> Download PDF
          </button>
          <button className="action-btn" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'white', color: '#10b981', border: '1px solid #10b981' }}>
            <FileSpreadsheet size={18} /> Export Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
