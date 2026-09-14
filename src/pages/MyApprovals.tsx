import { Link } from 'react-router-dom';

const MyApprovals = () => {
  return (
    <div>
      <div className="dash-header">
        <h1>My Approvals</h1>
        <p>Track the requests you have processed.</p>
      </div>

      <div className="dash-card">
        <div className="tabs">
          <button className="tab-btn active">All (18)</button>
          <button className="tab-btn">Approved (16)</button>
          <button className="tab-btn">Rejected (2)</button>
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
                { id: 1, name: 'C. Meghana', type: 'Internship', date: '09 Sep 2025', status: 'Approved' },
                { id: 2, name: 'E. Vaishnavi', type: 'Event', date: '08 Sep 2025', status: 'Approved' },
                { id: 3, name: 'F. Pranavi', type: 'Bus', date: '08 Sep 2025', status: 'Approved' },
                { id: 4, name: 'G. Nikhil', type: 'Hostel', date: '07 Sep 2025', status: 'Approved' },
                { id: 5, name: 'H. Sandeep', type: 'Outpass', date: '07 Sep 2025', status: 'Rejected' },
                { id: 6, name: 'I. Rohan', type: 'Medical', date: '06 Sep 2025', status: 'Approved' },
                { id: 7, name: 'J. Sneha', type: 'Library', date: '06 Sep 2025', status: 'Approved' },
                { id: 8, name: 'K. Lakshmi', type: 'Event', date: '05 Sep 2025', status: 'Approved' },
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
      </div>
    </div>
  );
};

export default MyApprovals;
