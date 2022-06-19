import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import './App.styles.scss';
import '/public/styles/normalize.scss';
import '/public/styles/base.scss';

import { MainLayout } from '../../layouts/';
import { About, Home } from '../../pages/';
import { IssuesList } from '../IssuesList/IssuesList';
import { IssueDetails } from '../IssueDetails/IssueDetails';
import { FullMap } from '../FullMap/FullMap';
import { Organizations } from '../Organizations/Organizations';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  uri: 'http://localhost:9000/api/graphql',
});

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
                  <Route path='/issues/:id' element={<IssueDetails />} />
                  <Route path='/map' element={<FullMap />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Suspense>
        </ApolloProvider>
      </React.StrictMode>
    </>
  );
};
