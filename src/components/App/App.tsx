import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainLayout } from '../../layouts/MainLayout';
import { Home } from '../../pages/Home/Home';

import '../../../public/styles/normilize.css';
import '../../../public/styles/base.scss'

export const App: FC = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
