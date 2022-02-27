import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header/Header';

export const MainLayout: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <p>footer</p>
    </>
  );
};
