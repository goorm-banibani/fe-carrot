import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white-100">
      <div className="max-w-md w-full p-4 bg-white shadow-lg rounded">{children}</div>
    </div>
  );
};

export default Layout;
