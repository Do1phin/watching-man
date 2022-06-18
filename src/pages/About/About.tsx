import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import './About.styles.scss';

export const About: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <section className='about'>
        <div className='about__container'>
          <div className='about__wrapper'>
            <div className='about__supervision supervision'>
              <h2 className='supervision__title'>{t('about.supervision.title')}</h2>
              <p className='supervision__text'>{t('about.supervision.text')}</p>
            </div>

            <div className='about__awareness awareness'>
              <h2 className='awareness__title'>{t('about.awareness.title')}</h2>
              <p className='awareness__text'>{t('about.awareness.text')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
