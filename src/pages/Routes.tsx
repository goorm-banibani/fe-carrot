import { Routes as ReactRouterRoutes, Route, Navigate } from 'react-router-dom';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
import SearchPage from './SearchPage';

function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </ReactRouterRoutes>
  );
}

export default Routes;
