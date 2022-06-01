import React, { FC, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";

import { MainLayout } from '../../layouts/';
import { Home, About } from '../../pages/';

import '../../../public/styles/normalize.scss';
import '../../../public/styles/base.scss';

import './App.styles.scss';

import { IssuesList } from '../IssuesList/IssuesList';

export const client = new ApolloClient({
  uri: 'http://localhost:9000/api/graphql',
  connectToDevTools: true,
  cache: new InMemoryCache()
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
                <Route path='/issues' element={<IssuesList />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
        </ApolloProvider>
      </React.StrictMode>
    </>
  );
};
