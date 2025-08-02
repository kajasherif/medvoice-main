import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import Layout from './components/common/Layout';
import { NavigationProvider } from './context/NavigationContext';
import { ThemeProvider } from './context/ThemeContext';

const AppRoutes = () => {
  return (
    <Router>
      <ThemeProvider>
        <NavigationProvider>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <Layout>
                  <DashboardPage />
                </Layout>
              }
            />
            <Route
              path="/"
              element={
                <Layout>
                  <DashboardPage />
                </Layout>
              }
            />
          </Routes>
        </NavigationProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppRoutes;