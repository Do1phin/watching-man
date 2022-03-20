import React, { FC, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainLayout } from '../../layouts/MainLayout';
import { Home } from '../../pages/Home/Home';
import { About } from '../../pages/About/About';

import '../../../public/styles/normilize.css';
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
