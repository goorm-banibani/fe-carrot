import { ReactNode } from 'react';
import Nav from './Nav';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full p-0 m-0 h-auto flex justify-center">
      <div className="max-w-[600px] w-full">
        {children}
        </div>
    </div>
  );
}

export default Layout;