import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Popup: FC = (props): JSX.Element => {
  const { item } = props;
  const { t } = useTranslation();
  return (
    <>
      <span className='popup-id'>
        {t('details.issue-id')}: {item.id}
      </span>

      <hr />
      <span className='popup-title'>{t('details.title')}: </span>
      <p>{item.title}</p>
    </>
  );
};

export { Popup };
