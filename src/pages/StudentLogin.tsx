import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, User, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="auth-card">
      <div className="card-header">
        <div className="card-icon">
          <GraduationCap size={32} />
        </div>
        <h3>Student Login</h3>
        <p>Login to your account</p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); navigate('/student/dashboard'); }}>
        <div className="form-group">
          <User className="input-icon" />
          <input type="text" className="form-input" placeholder="Roll Number" />
        </div>

        <div className="form-group">
          <Lock className="input-icon" />
          <input 
            type={showPassword ? "text" : "password"} 
            className="form-input" 
            placeholder="Password" 
          />
          <button 
            type="button"
            className="action-icon"
            onClick={() => setShowPassword(!showPassword)}
            style={{ background: 'none', border: 'none', outline: 'none' }}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button className="btn-primary">
          Login <ArrowRight size={18} />
        </button>
      </form>

      <div className="card-footer">
        Don't have an account? <Link to="/register/student">Register here</Link>
      </div>

      <div className="vertical-badge">
        <span>LEARN</span>
        <span>GROW</span>
        <span>BELONG</span>
      </div>
    </div>
  );
};

export default StudentLogin;
