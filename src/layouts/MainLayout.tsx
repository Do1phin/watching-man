import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout: FC = (): JSX.Element => {
  return (
    <>
      <p>header</p>
      <Outlet />
      <p>footer</p>
    </>
  )
}