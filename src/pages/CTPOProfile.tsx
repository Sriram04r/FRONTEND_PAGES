import { Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const CTPOProfile = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div>
      <div className="dash-header">
        <h1>My Profile</h1>
        <p>View and manage your profile information.</p>
      </div>

      <div style={{ display: 'flex', gap: '32px' }}>
        <div className="dash-card" style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--primary)', color: 'white', fontSize: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            D
          </div>
          <button className="action-btn" style={{ background: 'white', color: '#64748b', border: '1px solid #e2e8f0', marginBottom: '24px' }}>Change Photo</button>
          
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Name</span>
              <span style={{ fontWeight: 500, color: '#1e293b' }}>Dr. R. Sharma</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Faculty ID</span>
              <span style={{ fontWeight: 500, color: '#1e293b' }}>FA1023</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Email</span>
              <span style={{ fontWeight: 500, color: '#1e293b' }}>rsharma@college.edu</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Mobile Number</span>
              <span style={{ fontWeight: 500, color: '#1e293b' }}>9876543210</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Designation</span>
              <span style={{ fontWeight: 500, color: '#1e293b' }}>CTPO CSM</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Department</span>
              <span style={{ fontWeight: 500, color: '#1e293b' }}>CSM</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Account Status</span>
              <span><span className="status-badge active">Active</span></span>
            </div>
          </div>
        </div>

        <div className="dash-card" style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '24px' }}>Change Password</h3>
          <form onSubmit={e => e.preventDefault()}>
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

export default CTPOProfile;
