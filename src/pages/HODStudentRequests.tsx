import { Link, useNavigate } from 'react-router-dom';
import { Search, Filter, ArrowLeft, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const HODStudentRequests = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="dash-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={() => navigate('/hod/branches')} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ArrowLeft size={16} /> Back to Branches
          </button>
          <div>
            <h1>CSEM - Student Requests</h1>
            <p>View and manage requests for CSEM branch.</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>Academic Year:</span>
          <div className="select-wrapper">
            <select className="form-input" style={{ padding: '8px 32px 8px 16px', background: 'white' }}>
              <option>2025 - 2026</option>
            </select>
            <ChevronDown className="select-icon-right" size={16} />
          </div>
        </div>
      </div>

      <div className="dash-card">
        <div className="tabs">
          <button className="tab-btn active">All Requests (12)</button>
          <button className="tab-btn">Hostel (8)</button>
          <button className="tab-btn">Day Scholar (4)</button>
        </div>

        <div className="filter-row" style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <div className="select-wrapper" style={{ width: '180px' }}>
            <select className="form-input" style={{ padding: '12px 32px 12px 16px' }}>
              <option>All Status</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
            <ChevronDown className="select-icon-right" size={16} />
          </div>
          <div className="select-wrapper" style={{ width: '180px' }}>
            <select className="form-input" style={{ padding: '12px 32px 12px 16px' }}>
              <option>All Categories</option>
              <option>Hostel</option>
              <option>Day Scholar</option>
            </select>
            <ChevronDown className="select-icon-right" size={16} />
          </div>
          <div className="search-input-wrapper" style={{ flex: 1 }}>
            <Search className="search-icon" size={20} />
            <input type="text" className="search-input" placeholder="Search by name or roll number..." />
          </div>
          <button className="filter-btn" style={{ background: '#4c1d95' }}>
            <Filter size={18} /> Filter
          </button>
        </div>

        <div className="table-wrapper">
          <table className="dash-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Roll No</th>
                <th>Permission Type</th>
                <th>Category</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, name: 'A. Tejaswi', roll: '23B210AH13', type: 'Hostel', category: 'Hostel', date: '10 Sep 2025', status: 'Pending' },
                { id: 2, name: 'S. Lahari', roll: '23B210AH16', type: 'Day Scholar', category: 'Day Scholar', date: '10 Sep 2025', status: 'Pending' },
                { id: 3, name: 'R. Charan', roll: '23B210AH18', type: 'Hostel', category: 'Hostel', date: '09 Sep 2025', status: 'Approved' },
                { id: 4, name: 'M. Pavan', roll: '23B210AH24', type: 'Day Scholar', category: 'Day Scholar', date: '09 Sep 2025', status: 'Pending' },
                { id: 5, name: 'K. Divya', roll: '23B210AH25', type: 'Hostel', category: 'Hostel', date: '08 Sep 2025', status: 'Rejected' },
                { id: 6, name: 'L. Harish', roll: '23B210AH26', type: 'Day Scholar', category: 'Day Scholar', date: '08 Sep 2025', status: 'Pending' },
              ].map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.roll}</td>
                  <td>{row.type}</td>
                  <td>{row.category}</td>
                  <td>{row.date}</td>
                  <td>
                    <span className={`status-badge ${row.status.toLowerCase()}`}>{row.status}</span>
                  </td>
                  <td>
                    <Link to="/hod/request-details" className="action-btn" style={{ background: '#f1f5f9', color: '#4c1d95' }}>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Showing 1 to 6 of 12 entries</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ padding: '8px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><ChevronLeft size={16} /></button>
            <button style={{ padding: '8px 16px', border: 'none', borderRadius: '8px', background: '#4c1d95', color: 'white', fontWeight: 600, cursor: 'pointer' }}>1</button>
            <button style={{ padding: '8px 16px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'white', cursor: 'pointer' }}>2</button>
            <button style={{ padding: '8px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><ChevronRight size={16} /></button>
          </div>
        </div>

        <div style={{ marginTop: '24px', background: '#f8fafc', padding: '16px', borderRadius: '12px', color: '#64748b', fontSize: '0.9rem', textAlign: 'center' }}>
          <strong>ℹ️ Click on "View"</strong> to open request details.
        </div>
      </div>
    </div>
  );
};

export default HODStudentRequests;
