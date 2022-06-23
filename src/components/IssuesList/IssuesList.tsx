import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { map } from 'lodash';

import { Issue } from '../Issue/Issue';

import { GET_ALL_ISSUES } from '../../apollo/operations/queries/allIssues';

import './IssuesList.style.scss';

interface IIssue {
  title: string;
  description: string;
  city: string;
  id: string;
}

const IssuesList = () => {
  const [getAllIssues, { loading, error, data }] = useLazyQuery(GET_ALL_ISSUES);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCreateIssue = (e) => {
    e.preventDefault();
    navigate('/create-issue');
  };

  useEffect(() => {
    getAllIssues();
  }, [data]);

  if (loading) return <p className='hook-loading__msg'>{t('apollo.hook-loading')}</p>;
  if (error) return <p className='hook-error__msg'>{t('apollo.hook-error')} 😧</p>;

  return (
    <>
      <section className='issue'>
        <div className='body-container'>
          {!data?.allIssues.length && (
            <div className='issue__empty-list empty-list'>
              <p className='empty-list__msg'>{t('issues.empty-list')}</p>
              <button className='empty-list__link' onClick={handleCreateIssue}>
                {t('issues.create-issue')}
              </button>
            </div>
          )}
          <div className='issue__list'>
            {data &&
              map(data.allIssues, (issue: IIssue) => {
                return <Issue {...issue} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export { IssuesList };
