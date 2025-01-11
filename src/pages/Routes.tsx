import { Routes as ReactRouterRoutes, Route, Navigate } from 'react-router-dom';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
import SignupPage from './SignupPage';
import SearchPage from './SearchPage'
import MyPage from './MyPage';
import WishPage from './WishPage';
import SalesPage from './SalesPage';
import PurchasesPage from './PurchasesPage';
import WritePage from './WritePage';
import DetailPage from './DetailPage';
import EditPage from './EditPage';

function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/profile" element={<MyPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/wishlist" element={<WishPage />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/purchases" element={<PurchasesPage />} />
      <Route path="/write-post" element={<WritePage />} />
      <Route path="/details/:id" element={<DetailPage />} />
      <Route path="/edit-post/:id" element={<EditPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </ReactRouterRoutes>
  );
}

export default Routes;
