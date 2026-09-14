import { FileText, CheckCircle2, UserPlus, Info } from 'lucide-react';

const HODNotifications = () => {
  return (
    <div>
      <div className="dash-header">
        <h1>Notifications</h1>
        <p>Stay updated with the latest activities.</p>
      </div>

      <div className="dash-card">
        <div className="tabs">
          <button className="tab-btn active">All (9)</button>
          <button className="tab-btn">Branch Requests (5)</button>
          <button className="tab-btn">Approvals (2)</button>
          <button className="tab-btn">System (2)</button>
        </div>

        <div>
          <div className="notification-item">
            <div className="notif-icon" style={{ background: '#8b5cf6' }}><UserPlus size={20} /></div>
            <div className="notif-content">
              <h4>New Request - Hostel (CSEM)</h4>
              <p>A. Tejaswi (23B210AH13) has submitted a hostel request.</p>
            </div>
            <div className="notif-time">10:25 AM <div style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#4c1d95', marginLeft: '8px' }}></div></div>
          </div>

          <div className="notification-item">
            <div className="notif-icon" style={{ background: '#f59e0b' }}><FileText size={20} /></div>
            <div className="notif-content">
              <h4>New Request - Day Scholar (CAI)</h4>
              <p>B. Kiran (23B210AH27) has submitted a day scholar request.</p>
            </div>
            <div className="notif-time">09:40 AM <div style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#4c1d95', marginLeft: '8px' }}></div></div>
          </div>

          <div className="notification-item">
            <div className="notif-icon success"><CheckCircle2 size={20} /></div>
            <div className="notif-content">
              <h4>CTPO Approved - Event Permission</h4>
              <p>Request from C. Meghana has been approved by CTPO.</p>
            </div>
            <div className="notif-time">08:15 AM <div style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#4c1d95', marginLeft: '8px' }}></div></div>
          </div>

          <div className="notification-item">
            <div className="notif-icon" style={{ background: '#ef4444' }}><Info size={20} /></div>
            <div className="notif-content">
              <h4>New Request - Hostel (Cyber)</h4>
              <p>G. Naresh (23B210AH42) has submitted a hostel request.</p>
            </div>
            <div className="notif-time">08:00 AM <div style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#4c1d95', marginLeft: '8px' }}></div></div>
          </div>

          <div className="notification-item" style={{ borderBottom: 'none' }}>
            <div className="notif-icon" style={{ background: '#3b82f6' }}><Info size={20} /></div>
            <div className="notif-content">
              <h4>New Request - Day Scholar (AID)</h4>
              <p>H. Priya (23B210AH55) has submitted a day scholar request.</p>
            </div>
            <div className="notif-time">07:45 AM <div style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#4c1d95', marginLeft: '8px' }}></div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HODNotifications;
