import React from 'react';
import { useAuth } from './hooks/useAuth';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const { isAuthenticated, loading, error } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return isAuthenticated ? <Dashboard /> : <Landing />;
}

export default App;