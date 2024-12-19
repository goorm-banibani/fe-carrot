import { Routes as ReactRouterRoutes, Route, Navigate } from 'react-router-dom';

import MainPage from './MainPage';
import PayPage from './PayPage';

function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/pay" element={<PayPage />} />

      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </ReactRouterRoutes>
  );
}

export default Routes;
