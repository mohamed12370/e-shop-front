import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ auth, children }) {
  if (!auth) return <Navigate to={`/`} replace />;

  return children ? children : <Outlet />;
}
