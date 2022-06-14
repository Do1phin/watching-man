import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../components';

export const MainLayout: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
