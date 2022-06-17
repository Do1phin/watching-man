import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import { debounce } from 'lodash';

import './SetCityModal.styles.scss';

import { Input } from '../UI/Input/Input';

const SetCityModal = (props) => {
  const { isOpen, setIsOpen, setLocality } = props;

  const inputRef = useRef(null);
  const { t } = useTranslation();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = debounce((e) => {
    setLocality(e.target.value);
  }, 2000);

  const initialState = {
    maxLength: 168,
    onChange: handleChange,
    ref: inputRef,
    textPosition: 'center',
  };

  return (
    <>
      <Modal
        className='set-city__modal'
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'>
        <p className='modal-error__message'>{t('set-city.modal-error-permission')}</p>
        <hr />
        <p className='modal-title'>{t('set-city.title')}</p>
        <span className='modal-close-btn' onClick={toggleModal}>
          X
        </span>
        <Input {...initialState} />
      </Modal>
    </>
  );
};

export { SetCityModal };
