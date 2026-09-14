import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HODMyApprovals = () => {
  return (
    <div>
      <div className="dash-header">
        <h1>My Approvals</h1>
        <p>Track all the requests you have processed.</p>
      </div>

      <div className="dash-card">
        <div className="tabs">
          <button className="tab-btn active">All (38)</button>
          <button className="tab-btn">Approved (28)</button>
          <button className="tab-btn">Rejected (10)</button>
          <button className="tab-btn">Pending (0)</button>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, name: 'C. Meghana', branch: 'CSD', type: 'Hostel', date: '09 Sep 2025', status: 'Approved' },
                { id: 2, name: 'K. Divya', branch: 'CSEM', type: 'Day Scholar', date: '08 Sep 2025', status: 'Approved' },
                { id: 3, name: 'L. Harish', branch: 'CSEM', type: 'Day Scholar', date: '08 Sep 2025', status: 'Rejected' },
                { id: 4, name: 'M. Pavan', branch: 'AID', type: 'Hostel', date: '07 Sep 2025', status: 'Approved' },
                { id: 5, name: 'S. Sneha', branch: 'CAI', type: 'Day Scholar', date: '07 Sep 2025', status: 'Approved' },
              ].map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.branch}</td>
                  <td>{row.type}</td>
                  <td>{row.date}</td>
                  <td>
                    <span className={`status-badge ${row.status.toLowerCase()}`}>{row.status}</span>
                  </td>
                  <td>
                    <Link to="/hod/request-details" className="action-btn" style={{ background: '#f3e8ff', color: '#6b3fc5' }}>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Showing 1 to 5 of 38 entries</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ padding: '8px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><ChevronLeft size={16} /></button>
            <button style={{ padding: '8px 16px', border: 'none', borderRadius: '8px', background: '#4c1d95', color: 'white', fontWeight: 600, cursor: 'pointer' }}>1</button>
            <button style={{ padding: '8px 16px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'white', cursor: 'pointer' }}>2</button>
            <button style={{ padding: '8px 16px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'white', cursor: 'pointer' }}>3</button>
            <span style={{ padding: '8px' }}>...</span>
            <button style={{ padding: '8px 16px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'white', cursor: 'pointer' }}>8</button>
            <button style={{ padding: '8px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HODMyApprovals;
