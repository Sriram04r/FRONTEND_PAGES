import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, GraduationCap, Users, Building, ChevronDown, ArrowRight } from 'lucide-react';

const RoleSelection = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<{id: string, name: string, icon: any} | null>(null);

  const roles = [
    { id: 'student', name: 'Student', icon: GraduationCap },
    { id: 'ctpo', name: 'CTPO', icon: Users },
    { id: 'hod', name: 'HOD', icon: Building }
  ];

  const handleContinue = () => {
    if (selectedRole) {
      navigate(`/login/${selectedRole.id}`);
    }
  };

  return (
    <div className="auth-card">
      <div className="card-header">
        <h3>Welcome</h3>
        <p>Select your role to continue</p>
      </div>

      <div className="form-group role-dropdown">
        <div 
          className={`role-dropdown-btn ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {selectedRole ? (
              <>
                <selectedRole.icon className="input-icon" style={{ position: 'relative', left: 0, transform: 'none' }} />
                <span>{selectedRole.name}</span>
              </>
            ) : (
              <>
                <User className="input-icon" style={{ position: 'relative', left: 0, transform: 'none' }} />
                <span style={{ color: '#9ca3af' }}>Select your role</span>
              </>
            )}
          </div>
          <ChevronDown className="action-icon" style={{ position: 'relative', right: 0, transform: 'none' }} />
        </div>

        <div className={`role-dropdown-menu ${isOpen ? 'show' : ''}`}>
          {roles.map(role => (
            <div 
              key={role.id} 
              className="role-option"
              onClick={() => {
                setSelectedRole(role);
                setIsOpen(false);
              }}
            >
              <role.icon className="role-icon" />
              <span>{role.name}</span>
            </div>
          ))}
        </div>
      </div>

      <button 
        className="btn-primary" 
        onClick={handleContinue}
        disabled={!selectedRole}
        style={{ opacity: selectedRole ? 1 : 0.7 }}
      >
        Continue <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default RoleSelection;
