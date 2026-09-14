import { Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const MyProfile = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div>
      <div className="dash-header">
        <h1>My Profile</h1>
        <p>View and manage your personal information.</p>
      </div>

      <div style={{ display: 'flex', gap: '32px' }}>
        <div className="dash-card" style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--primary)', color: 'white', fontSize: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            S
          </div>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Siva Kumar</h2>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '8px' }}>Roll No: 23B210AH13</p>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '24px' }}>3rd Year | CSM<br/>KIET</p>
          <button className="action-btn" style={{ width: '100%' }}>Edit Profile</button>
        </div>

        <div className="dash-card" style={{ flex: 2 }}>
          <h3 style={{ marginBottom: '24px' }}>Personal Information</h3>
          <div className="profile-info-grid">
            <div className="profile-info-row">
              <div className="profile-label">Full Name</div>
              <div className="profile-value">: Siva Kumar</div>
            </div>
            <div className="profile-info-row">
              <div className="profile-label">Roll Number</div>
              <div className="profile-value">: 23B210AH13</div>
            </div>
            <div className="profile-info-row">
              <div className="profile-label">Email</div>
              <div className="profile-value">: sivakumar@example.com</div>
            </div>
            <div className="profile-info-row">
              <div className="profile-label">Mobile Number</div>
              <div className="profile-value">: 9876543210</div>
            </div>
            <div className="profile-info-row">
              <div className="profile-label">College</div>
              <div className="profile-value">: KIET</div>
            </div>
            <div className="profile-info-row">
              <div className="profile-label">Branch</div>
              <div className="profile-value">: CSM</div>
            </div>
            <div className="profile-info-row">
              <div className="profile-label">Year</div>
              <div className="profile-value">: 3rd Year</div>
            </div>
            <div className="profile-info-row">
              <div className="profile-label">Section</div>
              <div className="profile-value">: Hostel</div>
            </div>
            <div className="profile-info-row">
              <div className="profile-label">Account Status</div>
              <div className="profile-value">: <span className="status-badge active">Active</span></div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '32px 0' }} />
          
          <h3 style={{ marginBottom: '24px' }}>Change Password</h3>
          <form style={{ maxWidth: '400px' }} onSubmit={e => e.preventDefault()}>
            <div className="form-group" style={{ marginBottom: '16px' }}>
              <Lock className="input-icon" />
              <input type={showCurrent ? "text" : "password"} className="form-input" placeholder="Current Password" />
              <button type="button" className="action-icon" onClick={() => setShowCurrent(!showCurrent)} style={{ background: 'none', border: 'none' }}>
                {showCurrent ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="form-group" style={{ marginBottom: '16px' }}>
              <Lock className="input-icon" />
              <input type={showNew ? "text" : "password"} className="form-input" placeholder="New Password" />
              <button type="button" className="action-icon" onClick={() => setShowNew(!showNew)} style={{ background: 'none', border: 'none' }}>
                {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="form-group" style={{ marginBottom: '24px' }}>
              <Lock className="input-icon" />
              <input type={showConfirm ? "text" : "password"} className="form-input" placeholder="Confirm New Password" />
              <button type="button" className="action-icon" onClick={() => setShowConfirm(!showConfirm)} style={{ background: 'none', border: 'none' }}>
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <button className="btn-primary" style={{ marginTop: '0' }}>Update Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
