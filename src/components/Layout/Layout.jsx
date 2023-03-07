import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';
import Footer from 'components/Footer';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
