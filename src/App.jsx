import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import CTPOLayout from './components/CTPOLayout';
import HODLayout from './components/HODLayout';
import AdminLayout from './components/AdminLayout';

// Admin Pages
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminColleges from './pages/AdminColleges';
import AdminDepartments from './pages/AdminDepartments';
import AdminFacultyRegistrations from './pages/AdminFacultyRegistrations';
import AdminHODManagement from './pages/AdminHODManagement';
import AdminFacultyManagement from './pages/AdminFacultyManagement';
import AdminStudentManagement from './pages/AdminStudentManagement';
import AdminAllRequests from './pages/AdminAllRequests';
import AdminMyApprovals from './pages/AdminMyApprovals';
import AdminNotifications from './pages/AdminNotifications';
import AdminReportsAnalytics from './pages/AdminReportsAnalytics';
import AdminUserManagement from './pages/AdminUserManagement';
import AdminSystemSettings from './pages/AdminSystemSettings';
import AdminProfile from './pages/AdminProfile';

// Auth Pages
import RoleSelection from './pages/RoleSelection';
import StudentLogin from './pages/StudentLogin';
import CTPOLogin from './pages/CTPOLogin';
import HODLogin from './pages/HODLogin';
import StudentRegistration from './pages/StudentRegistration';
import CTPORegistration from './pages/CTPORegistration';
import HODRegistration from './pages/HODRegistration';

// Student Dashboard Pages
import StudentDashboard from './pages/StudentDashboard';
import MyProfile from './pages/MyProfile';
import PermissionRequest from './pages/PermissionRequest';
import LibraryPermission from './pages/LibraryPermission';
import MyRequests from './pages/MyRequests';
import RequestTracking from './pages/RequestTracking';
import Notifications from './pages/Notifications';
import MyDocuments from './pages/MyDocuments';
import DocumentView from './pages/DocumentView';

// CTPO Dashboard Pages
import CTPODashboard from './pages/CTPODashboard';
import StudentRequests from './pages/StudentRequests';
import RequestDetails from './pages/RequestDetails';
import DigitalSignature from './pages/DigitalSignature';
import MyApprovals from './pages/MyApprovals';
import Reports from './pages/Reports';
import CTPONotifications from './pages/CTPONotifications';
import CTPOProfile from './pages/CTPOProfile';

// HOD Dashboard Pages
import HODDashboard from './pages/HODDashboard';
import HODBranches from './pages/HODBranches';
import HODStudentRequests from './pages/HODStudentRequests';
import HODRequestDetails from './pages/HODRequestDetails';
import HODDigitalSignature from './pages/HODDigitalSignature';
import HODMyApprovals from './pages/HODMyApprovals';
import HODReports from './pages/HODReports';
import HODNotifications from './pages/HODNotifications';
import HODProfile from './pages/HODProfile';

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
          <Route path="login/admin" element={<AdminLogin />} />
          <Route path="register/student" element={<StudentRegistration />} />
          <Route path="register/ctpo" element={<CTPORegistration />} />
          <Route path="register/hod" element={<HODRegistration />} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="colleges" element={<AdminColleges />} />
          <Route path="departments" element={<AdminDepartments />} />
          <Route path="faculty-registrations" element={<AdminFacultyRegistrations />} />
          <Route path="hod-management" element={<AdminHODManagement />} />
          <Route path="faculty-management" element={<AdminFacultyManagement />} />
          <Route path="student-management" element={<AdminStudentManagement />} />
          <Route path="requests" element={<AdminAllRequests />} />
          <Route path="approvals" element={<AdminMyApprovals />} />
          <Route path="notifications" element={<AdminNotifications />} />
          <Route path="reports" element={<AdminReportsAnalytics />} />
          <Route path="users" element={<AdminUserManagement />} />
          <Route path="settings" element={<AdminSystemSettings />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>

        {/* Student Dashboard Routes */}
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

        {/* CTPO Dashboard Routes */}
        <Route path="/ctpo" element={<CTPOLayout />}>
          <Route index element={<Navigate to="/ctpo/dashboard" replace />} />
          <Route path="dashboard" element={<CTPODashboard />} />
          <Route path="student-requests" element={<StudentRequests />} />
          <Route path="request-details" element={<RequestDetails />} />
          <Route path="digital-signature" element={<DigitalSignature />} />
          <Route path="my-approvals" element={<MyApprovals />} />
          <Route path="reports" element={<Reports />} />
          <Route path="notifications" element={<CTPONotifications />} />
          <Route path="profile" element={<CTPOProfile />} />
        </Route>

        {/* HOD Dashboard Routes */}
        <Route path="/hod" element={<HODLayout />}>
          <Route index element={<Navigate to="/hod/dashboard" replace />} />
          <Route path="dashboard" element={<HODDashboard />} />
          <Route path="branches" element={<HODBranches />} />
          <Route path="student-requests" element={<HODStudentRequests />} />
          <Route path="request-details" element={<HODRequestDetails />} />
          <Route path="digital-signature" element={<HODDigitalSignature />} />
          <Route path="my-approvals" element={<HODMyApprovals />} />
          <Route path="reports" element={<HODReports />} />
          <Route path="notifications" element={<HODNotifications />} />
          <Route path="profile" element={<HODProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

