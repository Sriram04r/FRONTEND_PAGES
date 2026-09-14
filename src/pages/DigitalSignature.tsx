import { useNavigate } from 'react-router-dom';

const DigitalSignature = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="dash-header">
        <h1>Digital Signature</h1>
        <p>Provide your digital signature to approve this request.</p>
      </div>

      <div className="dash-card" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '12px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Request Summary</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '12px', fontSize: '0.95rem' }}>
            <span style={{ color: '#64748b' }}>Student Name</span><span style={{ fontWeight: 600 }}>: A. Tejaswi</span>
            <span style={{ color: '#64748b' }}>Permission Type</span><span style={{ fontWeight: 600 }}>: Library Permission</span>
            <span style={{ color: '#64748b' }}>Date</span><span style={{ fontWeight: 600 }}>: 12 Sep 2025</span>
            <span style={{ color: '#64748b' }}>Reference ID</span><span style={{ fontWeight: 600 }}>: LIB2025091001</span>
          </div>
        </div>

        <div className="sig-tabs">
          <div className="sig-tab active">Draw Signature</div>
          <div className="sig-tab">Type Signature</div>
          <div className="sig-tab">Upload Signature</div>
        </div>

        <div className="signature-pad-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.png" alt="Drawn Signature" style={{ opacity: 0.8 }} />
          <button className="clear-btn">Clear</button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <input type="checkbox" id="confirm" style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }} defaultChecked />
          <label htmlFor="confirm" style={{ fontSize: '0.9rem', color: '#334155', cursor: 'pointer' }}>I confirm that I am approving this request.</label>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button className="action-btn" style={{ background: 'white', border: '1px solid #e2e8f0', color: '#64748b', padding: '12px 32px' }} onClick={() => navigate(-1)}>Back</button>
          <button className="action-btn" style={{ padding: '12px 32px' }} onClick={() => navigate('/ctpo/my-approvals')}>Approve & Submit</button>
        </div>
      </div>
    </div>
  );
};

export default DigitalSignature;
