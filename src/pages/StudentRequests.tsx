import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';

const StudentRequests = () => {
  return (
    <div>
      <div className="dash-header">
        <h1>Student Requests</h1>
        <p>View and process permission requests from CSM students.</p>
      </div>

      <div className="dash-card">
        <div className="tabs">
          <button className="tab-btn active">All (28)</button>
          <button className="tab-btn">Pending (10)</button>
          <button className="tab-btn">Approved (16)</button>
          <button className="tab-btn">Rejected (2)</button>
        </div>

        <div className="filter-row">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input type="text" className="search-input" placeholder="Search by student name or roll number..." />
          </div>
          <button className="filter-btn">
            <Filter size={18} /> Filter
          </button>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, name: 'A. Tejaswi', type: 'Library', date: '10 Sep 2025', status: 'Pending' },
                { id: 2, name: 'B. Kiran', type: 'Outpass', date: '10 Sep 2025', status: 'Pending' },
                { id: 3, name: 'C. Meghana', type: 'Internship', date: '09 Sep 2025', status: 'Approved' },
                { id: 4, name: 'D. Sai Charan', type: 'Medical', date: '09 Sep 2025', status: 'Pending' },
                { id: 5, name: 'E. Vaishnavi', type: 'Event', date: '08 Sep 2025', status: 'Approved' },
                { id: 6, name: 'F. Pranavi', type: 'Bus', date: '08 Sep 2025', status: 'Pending' },
                { id: 7, name: 'G. Nikhil', type: 'Hostel', date: '07 Sep 2025', status: 'Pending' },
                { id: 8, name: 'H. Sandeep', type: 'Outpass', date: '07 Sep 2025', status: 'Approved' },
              ].map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.type}</td>
                  <td>{row.date}</td>
                  <td>
                    <span className={`status-badge ${row.status.toLowerCase()}`}>{row.status}</span>
                  </td>
                  <td>
                    <Link to="/ctpo/request-details" className="action-btn" style={{ background: '#f1f5f9', color: '#64748b' }}>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', padding: '16px', background: '#f8fafc', borderRadius: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ width: '18px', height: '18px' }} /> Select All
          </label>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button className="action-btn" style={{ background: '#e2e8f0', color: '#94a3b8', cursor: 'not-allowed' }}>Approve</button>
            <button className="action-btn" style={{ background: '#e2e8f0', color: '#94a3b8', cursor: 'not-allowed' }}>Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRequests;
