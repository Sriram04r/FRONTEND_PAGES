import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Phone, Mail, Building, FileText, Calendar, Clock, BookOpen, CheckCircle, XCircle } from 'lucide-react';

const RequestDetails = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="dash-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={() => navigate(-1)} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ArrowLeft size={16} /> Back to Requests
          </button>
          <div>
            <h1>Request Details</h1>
            <p>Review the student's permission request and take action.</p>
          </div>
        </div>
        <div style={{ background: '#fef3c7', color: '#d97706', padding: '8px 16px', borderRadius: '20px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Clock size={16} /> Pending at CTPO
        </div>
      </div>

      <div className="details-grid">
        <div className="details-left">
          <div className="details-card">
            <h3>Student Information</h3>
            <div className="info-list">
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
                  <div className="label">Year / Section</div>
                  <div className="value">3rd Year / Section A</div>
                </div>
              </div>
              <div className="info-item">
                <Building className="info-icon" size={18} />
                <div className="info-content">
                  <div className="label">Department</div>
                  <div className="value">CSM</div>
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
            <h3>Permission Details</h3>
            <div className="info-list">
              <div className="info-item">
                <BookOpen className="info-icon" size={18} />
                <div className="info-content">
                  <div className="label">Permission Type</div>
                  <div className="value">Library Permission</div>
                </div>
              </div>
              <div className="info-item">
                <FileText className="info-icon" size={18} />
                <div className="info-content">
                  <div className="label">Purpose</div>
                  <div className="value">Access library after hours</div>
                </div>
              </div>
              <div className="info-item">
                <Calendar className="info-icon" size={18} />
                <div className="info-content">
                  <div className="label">From Date</div>
                  <div className="value">12 Sep 2025</div>
                </div>
              </div>
              <div className="info-item">
                <Calendar className="info-icon" size={18} />
                <div className="info-content">
                  <div className="label">To Date</div>
                  <div className="value">12 Sep 2025</div>
                </div>
              </div>
              <div className="info-item">
                <Clock className="info-icon" size={18} />
                <div className="info-content">
                  <div className="label">Time</div>
                  <div className="value">05:00 PM - 07:00 PM</div>
                </div>
              </div>
              <div className="info-item">
                <FileText className="info-icon" size={18} />
                <div className="info-content">
                  <div className="label">Description</div>
                  <div className="value">I need to use the library for my mini project work.</div>
                </div>
              </div>
              
              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Supporting Document :</span>
                <div style={{ background: '#f5f3ff', color: 'var(--primary)', padding: '8px 16px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileText size={16} /> library_request.pdf
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="details-right">
          <div className="details-card" style={{ background: '#f8fafc' }}>
            <h3 style={{ borderBottom: 'none' }}>Student Message</h3>
            <div style={{ background: '#e0e7ff', padding: '16px', borderRadius: '12px', fontSize: '0.9rem', color: '#3730a3', fontStyle: 'italic' }}>
              "I need to access the library after hours for my project work. Please approve."
            </div>
          </div>

          <div className="details-card">
            <h3>Approval Action</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', border: '1px solid #22c55e', borderRadius: '12px', background: '#f0fdf4', cursor: 'pointer' }}>
                <CheckCircle color="#22c55e" />
                <span style={{ fontWeight: 600, color: '#166534' }}>Approve Request</span>
              </label>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textAlign: 'center' }}>
                You will be required to provide your digital signature to approve this request.
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', border: '1px solid #ef4444', borderRadius: '12px', background: 'white', cursor: 'pointer' }}>
                <XCircle color="#ef4444" />
                <span style={{ fontWeight: 600, color: '#991b1b' }}>Reject Request</span>
              </label>
            </div>

            <div className="form-group" style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Remarks (Optional)</label>
              <textarea className="form-input" placeholder="Enter any remarks..." rows={3} style={{ padding: '12px', resize: 'vertical' }}></textarea>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="action-btn" style={{ flex: 1, background: 'white', border: '1px solid #e2e8f0', color: '#64748b' }}>Cancel</button>
              <button className="action-btn" style={{ flex: 2 }} onClick={() => navigate('/ctpo/digital-signature')}>Proceed to Sign</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
