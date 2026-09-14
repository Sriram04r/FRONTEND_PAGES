import { useNavigate } from 'react-router-dom';
import { Info } from 'lucide-react';

const HODDigitalSignature = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="dash-header">
        <h1>Digital Signature</h1>
        <p>Provide your digital signature to approve this request.</p>
      </div>

      <div className="dash-card" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', padding: '16px', borderRadius: '12px', marginBottom: '32px', display: 'flex', gap: '12px' }}>
          <Info color="#3b82f6" />
          <div style={{ fontSize: '0.9rem', color: '#1e3a8a' }}>
            You are approving this request for <strong style={{ color: '#3b82f6' }}>A. Tejaswi (23B210AH13)</strong><br/>
            <strong>Hostel Permission – CSEM</strong>
          </div>
        </div>

        <div className="signature-pad-container" style={{ height: '300px' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.png" alt="Drawn Signature" style={{ opacity: 0.8 }} />
          <button className="clear-btn">Clear</button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px', marginBottom: '32px' }}>
          <input type="checkbox" id="confirm" style={{ width: '18px', height: '18px', accentColor: '#4c1d95' }} defaultChecked />
          <label htmlFor="confirm" style={{ fontSize: '0.9rem', color: '#334155', cursor: 'pointer' }}>I confirm that I am approving this request.</label>
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button className="action-btn" style={{ background: 'white', border: '1px solid #e2e8f0', color: '#64748b', padding: '12px 32px' }} onClick={() => navigate(-1)}>Cancel</button>
          <button className="action-btn" style={{ background: '#4c1d95', padding: '12px 32px' }} onClick={() => navigate('/hod/my-approvals')}>Approve & Submit</button>
        </div>
      </div>
    </div>
  );
};

export default HODDigitalSignature;
