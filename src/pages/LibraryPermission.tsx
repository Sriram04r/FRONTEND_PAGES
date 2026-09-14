import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, ChevronDown } from 'lucide-react';

const LibraryPermission = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="dash-header" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px', cursor: 'pointer' }}>
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1>Library Permission</h1>
          <p>Fill in the details for library permission.</p>
        </div>
      </div>

      <div className="dash-card" style={{ maxWidth: '600px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <div className="icon-wrapper" style={{ width: '64px', height: '64px', background: '#f5f3ff', color: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BookOpen size={32} />
          </div>
        </div>

        <form onSubmit={e => { e.preventDefault(); navigate('/student/my-requests'); }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>Purpose <span style={{ color: 'red' }}>*</span></label>
            <div className="select-wrapper">
              <select className="form-input" style={{ paddingLeft: '16px' }}>
                <option value="">Select Purpose</option>
                <option value="access">Access Library After Hours</option>
                <option value="borrow">Borrow Special Collection</option>
                <option value="group">Group Study</option>
                <option value="research">Research Work</option>
                <option value="others">Others</option>
              </select>
              <ChevronDown className="select-icon-right" />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>Date <span style={{ color: 'red' }}>*</span></label>
            <input type="date" className="form-input" style={{ paddingLeft: '16px' }} />
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>Time From <span style={{ color: 'red' }}>*</span></label>
              <input type="time" className="form-input" style={{ paddingLeft: '16px' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>Time To <span style={{ color: 'red' }}>*</span></label>
              <input type="time" className="form-input" style={{ paddingLeft: '16px' }} />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>Reason <span style={{ color: 'red' }}>*</span></label>
            <textarea className="form-input" placeholder="Enter reason for library permission..." rows={4} style={{ paddingLeft: '16px', resize: 'vertical' }}></textarea>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>Attach Documents (Optional)</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button type="button" style={{ padding: '8px 16px', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '0.9rem', cursor: 'pointer' }}>Choose File</button>
              <span style={{ fontSize: '0.9rem', color: '#64748b' }}>No file chosen</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '8px' }}>PDF, JPG, PNG (Max 5 MB)</p>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <button type="button" className="action-btn" style={{ flex: 1, background: 'white', color: '#64748b', border: '1px solid #e2e8f0' }} onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="action-btn" style={{ flex: 2 }}>Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LibraryPermission;
