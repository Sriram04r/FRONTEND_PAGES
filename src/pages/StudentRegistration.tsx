import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, User, Lock, Eye, EyeOff, Mail, Phone, Building, BookOpen, Calendar, MapPin, ChevronDown } from 'lucide-react';

const StudentRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="auth-card registration-card">
      <div className="card-header">
        <div className="card-icon">
          <GraduationCap size={32} />
        </div>
        <h3>Student Registration</h3>
        <p>Create your account</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <User className="input-icon" />
          <input type="text" className="form-input" placeholder="Full Name" />
        </div>

        <div className="form-group">
          <User className="input-icon" />
          <input type="text" className="form-input" placeholder="Roll Number" />
        </div>

        <div className="form-group">
          <Mail className="input-icon" />
          <input type="email" className="form-input" placeholder="Email Address" />
        </div>

        <div className="form-group">
          <Phone className="input-icon" />
          <input type="tel" className="form-input" placeholder="Mobile Number" />
        </div>

        <div className="two-col-form">
          <div className="form-group select-wrapper">
            <Building className="input-icon" />
            <select className="form-input">
              <option value="" disabled selected>Select College</option>
              <option value="KIET">KIET</option>
              <option value="KIEK">KIEK</option>
              <option value="KIEW">KIEW</option>
            </select>
            <ChevronDown className="select-icon-right" />
          </div>

          <div className="form-group select-wrapper">
            <BookOpen className="input-icon" />
            <select className="form-input">
              <option value="" disabled selected>Select Branch</option>
              <option value="CSM">CSM</option>
              <option value="CAI">CAI</option>
              <option value="CSD">CSD</option>
              <option value="CSE">CSE</option>
              <option value="AD">AD</option>
            </select>
            <ChevronDown className="select-icon-right" />
          </div>

          <div className="form-group select-wrapper">
            <Calendar className="input-icon" />
            <select className="form-input">
              <option value="" disabled selected>Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
            <ChevronDown className="select-icon-right" />
          </div>

          <div className="form-group select-wrapper">
            <MapPin className="input-icon" />
            <select className="form-input">
              <option value="" disabled selected>Select Section</option>
              <option value="Day Scholar">Day Scholar</option>
              <option value="Hostel">Hostel</option>
            </select>
            <ChevronDown className="select-icon-right" />
          </div>
        </div>
        <br />
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

        <div className="form-group">
          <Lock className="input-icon" />
          <input 
            type={showConfirmPassword ? "text" : "password"} 
            className="form-input" 
            placeholder="Confirm Password" 
          />
          <button 
            type="button"
            className="action-icon"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            style={{ background: 'none', border: 'none', outline: 'none' }}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button className="btn-primary">
          Register
        </button>
      </form>

      <div className="card-footer">
        Already have an account? <Link to="/login/student">Login here</Link>
      </div>

      <div className="vertical-badge">
        <span>LEARN</span>
        <span>GROW</span>
        <span>BELONG</span>
      </div>
    </div>
  );
};

export default StudentRegistration;
