import { Link } from 'react-router-dom';
import { Bus, Stethoscope, Home, Briefcase, Calendar, BookOpen, UserMinus, MoreHorizontal } from 'lucide-react';

const PermissionRequest = () => {
  return (
    <div>
      <div className="dash-header">
        <h1>Request a Permission</h1>
        <p>Select the type of permission and fill in the details.</p>
      </div>

      <div className="dash-card">
        <div className="wizard-steps">
          <div className="w-step active">
            <div className="w-icon">1</div>
            <span>Select Type</span>
          </div>
          <div className="w-step">
            <div className="w-icon">2</div>
            <span>Fill Details</span>
          </div>
          <div className="w-step">
            <div className="w-icon">3</div>
            <span>Review</span>
          </div>
          <div className="w-step">
            <div className="w-icon">4</div>
            <span>Submit</span>
          </div>
        </div>

        <h3 style={{ marginBottom: '24px' }}>Choose Permission Type</h3>
        
        <div className="permission-grid">
          <div className="perm-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '24px' }}>
            <div className="icon-wrapper" style={{ margin: '0 0 16px 0', width: '48px', height: '48px' }}><Bus /></div>
            <h4 style={{ fontSize: '1.1rem' }}>Bus Permission</h4>
            <p style={{ textAlign: 'left' }}>For bus travel related requests</p>
          </div>
          <div className="perm-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '24px' }}>
            <div className="icon-wrapper" style={{ margin: '0 0 16px 0', width: '48px', height: '48px' }}><Stethoscope /></div>
            <h4 style={{ fontSize: '1.1rem' }}>Medical Permission</h4>
            <p style={{ textAlign: 'left' }}>For medical leave / hospital visits</p>
          </div>
          <div className="perm-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '24px' }}>
            <div className="icon-wrapper" style={{ margin: '0 0 16px 0', width: '48px', height: '48px' }}><Home /></div>
            <h4 style={{ fontSize: '1.1rem' }}>Hostel Permission</h4>
            <p style={{ textAlign: 'left' }}>For hostel in/out permissions</p>
          </div>
          <div className="perm-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '24px' }}>
            <div className="icon-wrapper" style={{ margin: '0 0 16px 0', width: '48px', height: '48px' }}><Briefcase /></div>
            <h4 style={{ fontSize: '1.1rem' }}>Internship Permission</h4>
            <p style={{ textAlign: 'left' }}>For internship / industry visit</p>
          </div>
          <div className="perm-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '24px' }}>
            <div className="icon-wrapper" style={{ margin: '0 0 16px 0', width: '48px', height: '48px' }}><Calendar /></div>
            <h4 style={{ fontSize: '1.1rem' }}>Event Permission</h4>
            <p style={{ textAlign: 'left' }}>For event participation</p>
          </div>
          <Link to="/student/library-permission" className="perm-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '24px', textDecoration: 'none' }}>
            <div className="icon-wrapper" style={{ margin: '0 0 16px 0', width: '48px', height: '48px' }}><BookOpen /></div>
            <h4 style={{ fontSize: '1.1rem' }}>Library Permission</h4>
            <p style={{ textAlign: 'left' }}>For library access / extended hours</p>
          </Link>
          <div className="perm-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '24px' }}>
            <div className="icon-wrapper" style={{ margin: '0 0 16px 0', width: '48px', height: '48px' }}><UserMinus /></div>
            <h4 style={{ fontSize: '1.1rem' }}>Outpass Permission</h4>
            <p style={{ textAlign: 'left' }}>For outstation / out of campus movement</p>
          </div>
          <div className="perm-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '24px' }}>
            <div className="icon-wrapper" style={{ margin: '0 0 16px 0', width: '48px', height: '48px' }}><MoreHorizontal /></div>
            <h4 style={{ fontSize: '1.1rem' }}>Other Permission</h4>
            <p style={{ textAlign: 'left' }}>For any other type of request</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionRequest;
