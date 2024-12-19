import { ReactNode } from 'react';
import Nav from './Nav';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full p-0 m-0 h-auto flex justify-center">
      <div className="relative max-w-[600px] w-full">
        {children}
        <div className='fixed bottom-0 max-w-[600px] w-full'>
          <Nav/>
        </div>
      </div>
    </div>
  );
}

export default Layout;
