import { Link } from 'react-router-dom';

const MyDocuments = () => {
  return (
    <div>
      <div className="dash-header">
        <h1>My Documents</h1>
        <p>View and download your approved permission documents.</p>
      </div>

      <div className="dash-card">
        <div className="table-wrapper">
          <table className="dash-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Permission</th>
                <th>Generated On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Event Permission</td>
                <td>11 Sep 2025</td>
                <td><Link to="/student/document-view" className="action-btn">View</Link></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Library Permission</td>
                <td>01 Sep 2025</td>
                <td><Link to="/student/document-view" className="action-btn">View</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyDocuments;
