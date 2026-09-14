import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ChevronDown } from 'lucide-react';

const RequestTracking = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="dash-header" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px', cursor: 'pointer' }}>
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1>Request Tracking</h1>
          <p>Track the progress of your permission request.</p>
        </div>
      </div>

      <div className="dash-card">
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '40px', maxWidth: '500px' }}>
          <span style={{ fontWeight: 600, color: '#64748b' }}>Tracking ID</span>
          <div className="select-wrapper" style={{ flex: 1 }}>
            <select className="form-input" style={{ paddingLeft: '16px' }}>
              <option value="LIB2025091001">LIB2025091001</option>
              <option value="OUT2025090803">OUT2025090803</option>
            </select>
            <ChevronDown className="select-icon-right" />
          </div>
          <button className="action-btn">Track</button>
        </div>

        <div className="tracking-container">
          <div className="tracking-step">
            <div className="step-icon"><Check size={16} /></div>
            <div className="step-content">
              <h4>Submitted by Student</h4>
              <p className="step-time">10 Sep 2025, 09:15 AM</p>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Your request has been submitted.</div>
          </div>
          
          <div className="tracking-step">
            <div className="step-icon"><Check size={16} /></div>
            <div className="step-content">
              <h4>Viewed by CTPO</h4>
              <p className="step-time">10 Sep 2025, 11:30 AM</p>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Viewed by CTPO.</div>
          </div>
          
          <div className="tracking-step">
            <div className="step-icon"><Check size={16} /></div>
            <div className="step-content">
              <h4>Approved by CTPO</h4>
              <p className="step-time">10 Sep 2025, 12:10 PM</p>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Approved and forwarded to HOD.</div>
          </div>
          
          <div className="tracking-step">
            <div className="step-icon"><Check size={16} /></div>
            <div className="step-content">
              <h4>Approved by HOD</h4>
              <p className="step-time">11 Sep 2025, 10:45 AM</p>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Approved and forwarded to Admin.</div>
          </div>
          
          <div className="tracking-step">
            <div className="step-icon"><Check size={16} /></div>
            <div className="step-content">
              <h4>Approved by Admin</h4>
              <p className="step-time">11 Sep 2025, 04:20 PM</p>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Final approval completed.</div>
          </div>

          <div className="tracking-final-msg">
            <Check size={20} /> Your library permission request has been approved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestTracking;
