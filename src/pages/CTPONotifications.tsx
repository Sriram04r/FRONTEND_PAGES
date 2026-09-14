import { FileText, CheckCircle2, Info } from 'lucide-react';

const CTPONotifications = () => {
  return (
    <div>
      <div className="dash-header">
        <h1>Notifications</h1>
        <p>Stay updated with the latest activities.</p>
      </div>

      <div className="dash-card">
        <div className="tabs">
          <button className="tab-btn active">All (4)</button>
          <button className="tab-btn">Unread (2)</button>
          <button className="tab-btn">Approvals (1)</button>
          <button className="tab-btn">Updates (1)</button>
        </div>

        <div>
          <div className="notification-item">
            <div className="notif-icon" style={{ background: '#8b5cf6' }}><FileText size={20} /></div>
            <div className="notif-content">
              <h4>New Permission Request</h4>
              <p>A. Tejaswi (23B210AH13) has submitted a Library permission request.</p>
            </div>
            <div className="notif-time">10 Sep 2025, 09:15 AM <div style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', marginLeft: '8px' }}></div></div>
          </div>

          <div className="notification-item">
            <div className="notif-icon success"><CheckCircle2 size={20} /></div>
            <div className="notif-content">
              <h4>Request Approved</h4>
              <p>You have approved C. Meghana's Internship request.</p>
            </div>
            <div className="notif-time">09 Sep 2025, 11:20 AM</div>
          </div>

          <div className="notification-item">
            <div className="notif-icon" style={{ background: '#8b5cf6' }}><FileText size={20} /></div>
            <div className="notif-content">
              <h4>New Permission Request</h4>
              <p>B. Kiran (23B210AH12) has submitted an Outpass request.</p>
            </div>
            <div className="notif-time">10 Sep 2025, 10:00 AM <div style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', marginLeft: '8px' }}></div></div>
          </div>

          <div className="notification-item" style={{ borderBottom: 'none' }}>
            <div className="notif-icon" style={{ background: '#3b82f6' }}><Info size={20} /></div>
            <div className="notif-content">
              <h4>System Update</h4>
              <p>Permission module has been updated with new features.</p>
            </div>
            <div className="notif-time">08 Sep 2025, 04:10 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTPONotifications;
