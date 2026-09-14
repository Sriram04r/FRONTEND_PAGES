import { Check, User, FileText, Calendar, Info } from 'lucide-react';

const Notifications = () => {
  return (
    <div>
      <div className="dash-header">
        <h1>Notifications</h1>
        <p>Stay updated with your permission requests.</p>
      </div>

      <div className="dash-card">
        <div className="tabs">
          <button className="tab-btn active">All (5)</button>
          <button className="tab-btn">Unread (2)</button>
          <button className="tab-btn">Approvals (3)</button>
          <button className="tab-btn">Updates (2)</button>
        </div>

        <div>
          <div className="notification-item">
            <div className="notif-icon success"><Check size={20} /></div>
            <div className="notif-content">
              <h4>Your Library Permission has been approved.</h4>
              <p>Your request (LIB2025091001) has been approved by Admin.</p>
            </div>
            <div className="notif-time">Sep 11, 2025 <div style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', marginLeft: '8px' }}></div></div>
          </div>

          <div className="notification-item">
            <div className="notif-icon info"><User size={20} /></div>
            <div className="notif-content">
              <h4>HOD has approved your Outpass Request.</h4>
              <p>Your request (OUT2025090803) has been approved by HOD.</p>
            </div>
            <div className="notif-time">Sep 10, 2025 <div style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', marginLeft: '8px' }}></div></div>
          </div>

          <div className="notification-item">
            <div className="notif-icon info" style={{ background: '#8b5cf6' }}><FileText size={20} /></div>
            <div className="notif-content">
              <h4>CTPO has approved your Medical Permission.</h4>
              <p>Your request (MED2025090507) has been approved by CTPO.</p>
            </div>
            <div className="notif-time">Sep 06, 2025</div>
          </div>

          <div className="notification-item">
            <div className="notif-icon info" style={{ background: '#6b3fc5' }}><Calendar size={20} /></div>
            <div className="notif-content">
              <h4>Campus Fest Registrations Open</h4>
              <p>Registrations for the annual campus fest are now open.</p>
            </div>
            <div className="notif-time">Sep 01, 2025</div>
          </div>

          <div className="notification-item" style={{ borderBottom: 'none' }}>
            <div className="notif-icon warning"><Info size={20} /></div>
            <div className="notif-content">
              <h4>Library Will Be Closed</h4>
              <p>The library will be closed on 16th Sep due to maintenance.</p>
            </div>
            <div className="notif-time">Aug 28, 2025</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
