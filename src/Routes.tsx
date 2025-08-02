import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';

import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';
import CalendarPage from './pages/Calendar';
import ProfilePage from './pages/Profile';
import ExtraOnePage from './pages/ExtraOne';
import ExtraTwoPage from './pages/ExtraTwo';
import ExtraThreePage from './pages/ExtraThree';

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/extra" element={<ExtraOnePage />} />
          <Route path="/extra-2" element={<ExtraTwoPage />} />
          <Route path="/extra-3" element={<ExtraThreePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
