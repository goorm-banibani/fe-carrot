import { Routes as ReactRouterRoutes, Route, Navigate } from 'react-router-dom';

import LoginPage from './LoginPage';

function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </ReactRouterRoutes>
  );
}

export default Routes;
