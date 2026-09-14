import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, FileText, Building, Mail, Phone, Download } from 'lucide-react';

const HODRequestDetails = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="dash-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={() => navigate(-1)} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ArrowLeft size={16} /> Back to CSEM Requests
          </button>
          <div>
            <h1>Request Details</h1>
            <p>Review the student's permission request.</p>
          </div>
        </div>
      </div>

      <div className="details-grid">
        <div className="details-left">
          <div className="details-card">
            <h3>Student Information</h3>
            <div className="info-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="info-item">
                <User className="info-icon" size={18} />
                <div className="info-content">
                  <div className="label">Name</div>
                  <div className="value">A. Tejaswi</div>
                </div>
              </div>
              <div className="info-item">
                <FileText className="info-icon" size={18} />
                <div className="info-content">
                  <div className="label">Roll Number</div>
                  <div className="value">23B210AH13</div>
                </div>
              </div>
              <div className="info-item">
                <Building className="info-icon" size={18} />
                <div className="info-content">
                  <div className="label">Branch</div>
                  <div className="value">CSEM</div>
                </div>
              </div>
              <div className="info-item">
                <Building className="info-icon" size={18} />
                <div className="info-content">
                  <div className="label">Year / Semester</div>
                  <div className="value">III Year / I Sem</div>
                </div>
              </div>
              <div className="info-item">
                <Mail className="info-icon" size={18} />
                <div className="info-content">
                  <div className="label">Email</div>
                  <div className="value">tejaswi23@example.com</div>
                </div>
              </div>
              <div className="info-item">
                <Phone className="info-icon" size={18} />
                <div className="info-content">
                  <div className="label">Mobile</div>
                  <div className="value">9876543210</div>
                </div>
              </div>
            </div>
          </div>

          <div className="details-card">
            <h3>Supporting Documents</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#4c1d95', fontWeight: 500 }}>
                  <FileText size={18} /> application_form.pdf
                </div>
                <Download size={18} color="#64748b" style={{ cursor: 'pointer' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#4c1d95', fontWeight: 500 }}>
                  <FileText size={18} /> id_card.pdf
                </div>
                <Download size={18} color="#64748b" style={{ cursor: 'pointer' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#4c1d95', fontWeight: 500 }}>
                  <FileText size={18} /> bonafide_certificate.pdf
                </div>
                <Download size={18} color="#64748b" style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="details-right">
          <div className="details-card">
            <h3>Permission Details</h3>
            <div className="info-list">
              <div className="info-item">
                <div className="info-content">
                  <div className="label">Permission Type</div>
                  <div className="value">Hostel</div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-content">
                  <div className="label">Category</div>
                  <div className="value">Hostel</div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-content">
                  <div className="label">From Date</div>
                  <div className="value">12 Sep 2025</div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-content">
                  <div className="label">To Date</div>
                  <div className="value">30 Sep 2025</div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-content">
                  <div className="label">Reason</div>
                  <div className="value">Need hostel accommodation for project work.</div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-content">
                  <div className="label">Applied On</div>
                  <div className="value">10 Sep 2025</div>
                </div>
              </div>
            </div>
          </div>

          <div className="details-card">
            <h3>Approval Action</h3>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <button className="action-btn" style={{ flex: 1, background: '#10b981' }} onClick={() => navigate('/hod/digital-signature')}>Approve & Sign</button>
              <button className="action-btn" style={{ flex: 1, background: 'white', border: '1px solid #ef4444', color: '#ef4444' }}>Reject</button>
            </div>

            <div className="form-group" style={{ marginBottom: '0' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Remarks (Optional)</label>
              <textarea className="form-input" placeholder="Enter remarks..." rows={3} style={{ padding: '12px', resize: 'vertical' }}></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HODRequestDetails;
