import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import RoleSelection from './pages/RoleSelection';
import StudentLogin from './pages/StudentLogin';
import CTPOLogin from './pages/CTPOLogin';
import HODLogin from './pages/HODLogin';
import StudentRegistration from './pages/StudentRegistration';
import CTPORegistration from './pages/CTPORegistration';
import HODRegistration from './pages/HODRegistration';

// Dashboard Pages
import StudentDashboard from './pages/StudentDashboard';
import MyProfile from './pages/MyProfile';
import PermissionRequest from './pages/PermissionRequest';
import LibraryPermission from './pages/LibraryPermission';
import MyRequests from './pages/MyRequests';
import RequestTracking from './pages/RequestTracking';
import Notifications from './pages/Notifications';
import MyDocuments from './pages/MyDocuments';
import DocumentView from './pages/DocumentView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes (Auth) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<RoleSelection />} />
          <Route path="login/student" element={<StudentLogin />} />
          <Route path="login/ctpo" element={<CTPOLogin />} />
          <Route path="login/hod" element={<HODLogin />} />
          <Route path="register/student" element={<StudentRegistration />} />
          <Route path="register/ctpo" element={<CTPORegistration />} />
          <Route path="register/hod" element={<HODRegistration />} />
        </Route>

        {/* Authenticated Dashboard Routes */}
        <Route path="/student" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/student/dashboard" replace />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="permission-request" element={<PermissionRequest />} />
          <Route path="library-permission" element={<LibraryPermission />} />
          <Route path="my-requests" element={<MyRequests />} />
          <Route path="request-tracking" element={<RequestTracking />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="my-documents" element={<MyDocuments />} />
          <Route path="document-view" element={<DocumentView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
