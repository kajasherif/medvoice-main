import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/Dashboard';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider } from './context/NavigationContext';

const AppRoutes = () => {
  return (
    <Router>
      <ThemeProvider>
        <NavigationProvider>
          <Layout>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/" element={<DashboardPage />} />
            </Routes>
          </Layout>
        </NavigationProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppRoutes;
