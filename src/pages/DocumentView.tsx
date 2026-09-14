import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

const DocumentView = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="dash-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={() => navigate(-1)} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ArrowLeft size={16} /> Back to My Documents
          </button>
        </div>
        <button className="action-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Download size={16} /> Download
        </button>
      </div>

      <div className="cert-container">
        <div className="cert-header">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1e293b' }}>KIET</h2>
          <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Kakinada Institute of Engineering & Technology<br/>Kakinada, Telangana - 533003</p>
          <div className="cert-title">EVENT PERMISSION</div>
        </div>

        <div className="cert-body">
          <div className="cert-details">
            <div className="cert-row"><span>Student Name</span><span>: Anjali</span></div>
            <div className="cert-row"><span>Roll Number</span><span>: 23K1A0123</span></div>
            <div className="cert-row"><span>Department</span><span>: CSE</span></div>
            <div className="cert-row"><span>Year / Section</span><span>: III Year / A</span></div>
            <div className="cert-row"><span>Event Name</span><span>: TechFest 2025</span></div>
            <div className="cert-row"><span>From Date</span><span>: 15 Sep 2025</span></div>
            <div className="cert-row"><span>To Date</span><span>: 16 Sep 2025</span></div>
            <div className="cert-row"><span>Reason</span><span>: Participating in college event.</span></div>
            <div className="cert-row"><span>Status</span><span>: Approved</span></div>
          </div>
          <div>
            <div className="cert-photo">
              <span>Student Photo</span>
            </div>
          </div>
        </div>

        <div className="cert-signatures">
          <div className="signature-block">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.png" alt="Signature" style={{ opacity: 0.6 }} />
            <hr style={{ borderTop: '1px solid #1e293b', marginBottom: '8px' }} />
            <h5>Dr. Kumar</h5>
            <p>CTPO</p>
            <p style={{ fontSize: '0.65rem' }}>10 Sep 2025, 02:30 PM</p>
          </div>
          <div className="signature-block">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.png" alt="Signature" style={{ opacity: 0.6 }} />
            <hr style={{ borderTop: '1px solid #1e293b', marginBottom: '8px' }} />
            <h5>Dr. Ramesh</h5>
            <p>HOD - CSE</p>
            <p style={{ fontSize: '0.65rem' }}>11 Sep 2025, 11:15 AM</p>
          </div>
          <div className="signature-block">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.png" alt="Signature" style={{ opacity: 0.6 }} />
            <hr style={{ borderTop: '1px solid #1e293b', marginBottom: '8px' }} />
            <h5>Admin</h5>
            <p>Services</p>
            <p style={{ fontSize: '0.65rem' }}>11 Sep 2025, 05:00 PM</p>
          </div>
        </div>

        <div className="cert-footer">
          * This is a system-generated document and does not require a physical signature.
        </div>
      </div>
    </div>
  );
};

export default DocumentView;
