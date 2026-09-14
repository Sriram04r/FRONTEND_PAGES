import { Link } from 'react-router-dom';

const MyRequests = () => {
  return (
    <div>
      <div className="dash-header">
        <h1>My Requests</h1>
        <p>Track the status of your permission requests.</p>
      </div>

      <div className="dash-card">
        <div className="tabs">
          <button className="tab-btn active">All (5)</button>
          <button className="tab-btn">Pending (1)</button>
          <button className="tab-btn">Approved (3)</button>
          <button className="tab-btn">Rejected (1)</button>
        </div>

        <div className="table-wrapper">
          <table className="dash-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Permission Type</th>
                <th>Date</th>
                <th>Tracking ID</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Library</td>
                <td>10 Sep 2025</td>
                <td>LIB2025091001</td>
                <td><span className="status-badge approved">Approved</span></td>
                <td><Link to="/student/request-tracking" className="action-btn">View</Link></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Outpass</td>
                <td>08 Sep 2025</td>
                <td>OUT2025090803</td>
                <td><span className="status-badge pending">Pending</span></td>
                <td><Link to="/student/request-tracking" className="action-btn" style={{ background: '#f1f5f9', color: '#64748b' }}>View</Link></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Medical</td>
                <td>05 Sep 2025</td>
                <td>MED2025090507</td>
                <td><span className="status-badge approved">Approved</span></td>
                <td><Link to="/student/request-tracking" className="action-btn" style={{ background: '#f1f5f9', color: '#64748b' }}>View</Link></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Event</td>
                <td>01 Sep 2025</td>
                <td>EVN2025090102</td>
                <td><span className="status-badge rejected">Rejected</span></td>
                <td><Link to="/student/request-tracking" className="action-btn" style={{ background: '#f1f5f9', color: '#64748b' }}>View</Link></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Bus</td>
                <td>28 Aug 2025</td>
                <td>BUS2025082804</td>
                <td><span className="status-badge approved">Approved</span></td>
                <td><Link to="/student/request-tracking" className="action-btn" style={{ background: '#f1f5f9', color: '#64748b' }}>View</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyRequests;
