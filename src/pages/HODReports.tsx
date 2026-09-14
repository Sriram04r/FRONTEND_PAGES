import { ChevronDown, Download, FileSpreadsheet } from 'lucide-react';

const HODReports = () => {
  return (
    <div>
      <div className="dash-header">
        <h1>Department Reports</h1>
        <p>View and analyze permission data across all branches.</p>
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
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Branch</label>
            <div className="select-wrapper">
              <select className="form-input">
                <option>All Branches</option>
                <option>CSEM</option>
                <option>CAI</option>
              </select>
              <ChevronDown className="select-icon-right" size={16} />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Permission Type</label>
            <div className="select-wrapper">
              <select className="form-input">
                <option>All Types</option>
                <option>Hostel</option>
                <option>Day Scholar</option>
              </select>
              <ChevronDown className="select-icon-right" size={16} />
            </div>
          </div>
          <button className="action-btn" style={{ height: '44px', background: '#4c1d95' }}>Generate Report</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '32px' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Branch-wise Requests</h3>
            <div className="chart-container" style={{ height: '150px', background: '#f8fafc', padding: '16px', borderRadius: '12px' }}>
              <div className="chart-bar-wrapper">
                <span className="chart-bar-value">12</span>
                <div className="chart-bar" style={{ height: '80%', background: '#a78bfa' }}></div>
                <div className="chart-bar-label"><span>CSEM</span></div>
              </div>
              <div className="chart-bar-wrapper">
                <span className="chart-bar-value">6</span>
                <div className="chart-bar" style={{ height: '40%', background: '#a78bfa' }}></div>
                <div className="chart-bar-label"><span>CAI</span></div>
              </div>
              <div className="chart-bar-wrapper">
                <span className="chart-bar-value">9</span>
                <div className="chart-bar" style={{ height: '60%', background: '#a78bfa' }}></div>
                <div className="chart-bar-label"><span>CSD</span></div>
              </div>
              <div className="chart-bar-wrapper">
                <span className="chart-bar-value">7</span>
                <div className="chart-bar" style={{ height: '45%', background: '#a78bfa' }}></div>
                <div className="chart-bar-label"><span>AID</span></div>
              </div>
              <div className="chart-bar-wrapper">
                <span className="chart-bar-value">10</span>
                <div className="chart-bar" style={{ height: '70%', background: '#a78bfa' }}></div>
                <div className="chart-bar-label"><span>Cyber</span></div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Permission Type Distribution</h3>
            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="pie-chart-container">
                <div className="pie-chart" style={{ width: '100px', height: '100px' }}>
                  <div className="pie-chart-center">
                    <div className="val" style={{ fontSize: '1rem' }}>68</div>
                    <div className="lbl" style={{ fontSize: '0.6rem' }}>Total</div>
                  </div>
                </div>
                <div className="pie-legend">
                  <div className="legend-item" style={{ fontSize: '0.75rem' }}>
                    <div className="legend-color" style={{ background: '#8b5cf6' }}></div>
                    <span>Hostel 42 (62%)</span>
                  </div>
                  <div className="legend-item" style={{ fontSize: '0.75rem' }}>
                    <div className="legend-color" style={{ background: '#e2e8f0' }}></div>
                    <span>Day Scholar 26 (38%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Status Overview</h3>
            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', height: '150px' }}>
              <div className="status-list">
                <div className="status-row">
                  <div className="status-row-left">
                    <div className="status-dot approved"></div>
                    <span>Approved</span>
                  </div>
                  <div className="status-row-right">40 (59%)</div>
                </div>
                <div className="status-row">
                  <div className="status-row-left">
                    <div className="status-dot pending"></div>
                    <span>Pending</span>
                  </div>
                  <div className="status-row-right">20 (29%)</div>
                </div>
                <div className="status-row">
                  <div className="status-row-left">
                    <div className="status-dot rejected"></div>
                    <span>Rejected</span>
                  </div>
                  <div className="status-row-right">8 (12%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button className="action-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'white', color: '#4c1d95', border: '1px solid #4c1d95', padding: '12px 32px' }}>
            <Download size={18} /> Download PDF
          </button>
          <button className="action-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'white', color: '#10b981', border: '1px solid #10b981', padding: '12px 32px' }}>
            <FileSpreadsheet size={18} /> Export Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default HODReports;
