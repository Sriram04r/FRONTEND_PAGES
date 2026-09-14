import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, User, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

const CTPOLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-card">
      <div className="card-header">
        <div className="card-icon">
          <Users size={32} />
        </div>
        <h3>CTPO Login</h3>
        <p>Login to your account</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <User className="input-icon" />
          <input type="text" className="form-input" placeholder="Faculty ID" />
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
        Don't have an account? <Link to="/register/ctpo">Register here</Link>
      </div>

      <div className="vertical-badge">
        <span>LEARN</span>
        <span>GROW</span>
        <span>BELONG</span>
      </div>
    </div>
  );
};

export default CTPOLogin;
