import React, from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';

import './SetCityModal.styles.scss';

const SetCityModal = (props) => {
  const { isOpen, setIsOpen, setLocality } = props;
ß
  const { t } = useTranslation();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Modal
        className='set-city__modal'
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'>
        <p className='modal-error__message'>{t('set-city.modal-error-permission')}ß</p>
        <hr />
        <p className='modal-title'>{t('set-city.title')}</p>
        <span className='modal-close-btn' onClick={toggleModal}>
          X
        </span>
      </Modal>
    </>
  );
};

export { SetCityModal };
