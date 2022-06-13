import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import _ from 'lodash';

import { Issue } from '../Issue/Issue';

import { GET_ALL_ISSUES } from '../../apollo/operations/queries/allIssues';

import './IssuesList.style.scss';

interface Issue {
  title: string;
  description: string;
  city: string;
  id: string;
}

const IssuesList = () => {
  const [getAllIssues, { loading, error, data }] = useLazyQuery(GET_ALL_ISSUES);

  useEffect(() => {
    getAllIssues();
  }, [data]);

  return (
    <>
      <section className='issue'>
        <div className='body-container'>
          <div className='issue__list'>
            {data &&
              _.map(data.allIssues, (issue: Issue) => {
                return <Issue {...issue} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export { IssuesList };
