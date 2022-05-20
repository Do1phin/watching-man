import React, { FC, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainLayout } from '../../layouts/';
import { Home, About } from '../../pages/';

import '../../../public/styles/normalize.scss';
import '../../../public/styles/base.scss';

export const App: FC = (): JSX.Element => {
  return (
    <>
      <React.StrictMode>
        <Suspense fallback='loading...'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
      </React.StrictMode>
    </>
  );
};
