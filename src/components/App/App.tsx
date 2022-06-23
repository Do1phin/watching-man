import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { client } from '../../apollo/config';

import './App.styles.scss';
import '/public/styles/normalize.scss';
import '/public/styles/base.scss';

import { MainLayout } from '../../layouts';
import { About, Home, NotFound } from '../../pages';
import { CreateIssue, FullMap, IssueDetails, IssuesList, Organizations } from '../index';

export const App: FC = (): JSX.Element => {
  return (
    <>
      <React.StrictMode>
        <ApolloProvider client={client}>
          <Suspense fallback='loading...'>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/organizations' element={<Organizations />} />
                  <Route path='/issues' element={<IssuesList />} />
                  <Route path='/issues/create' element={<CreateIssue />} />
                  <Route path='/issues/:id' element={<IssueDetails />} />
                  <Route path='/map' element={<FullMap />} />
                  <Route path='*' element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Suspense>
        </ApolloProvider>
      </React.StrictMode>
    </>
  );
};
