import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';

// Import page components
import DashboardPage from './pages/Dashboard';
import CalendarPage from './pages/Calendar';
import ProfilePage from './pages/Profile';
import ExtraPage from './pages/Extra';
import ExtraTwoPage from './pages/ExtraTwo';
import ExtraThreePage from './pages/ExtraThree';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/extra" element={<ExtraPage />} />
          <Route path="/extra-2" element={<ExtraTwoPage />} />
          <Route path="/extra-3" element={<ExtraThreePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
