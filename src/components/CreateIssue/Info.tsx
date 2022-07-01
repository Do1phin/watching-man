import React, { FC, useEffect, useRef } from 'react';
import { Input } from '../UI';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const Info: FC = (props): JSX.Element => {
  const { info, setInfo, setIsValid } = props;

  const { t } = useTranslation();
  const titleRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    setIsValid(isValid);
  }, [isValid]);

  const onSubmit = (data) => {
    return setInfo({ description: '', title: '' });
  };

  const handleChangeTitle = (e) => {
    e.preventDefault();
    return setInfo({ ...info, title: e.target.value });
  };

  const handleChangeDescription = (e) => {
    e.preventDefault();
    return setInfo({ ...info, description: e.target.value });
  };

  return (
    <>
      <form className='create-issue__info info' onSubmit={handleSubmit(onSubmit)}>
        <Input
          className='info__title'
          id='info__title'
          ref={titleRef}
          onChange={(e: Event) => handleChangeTitle(e)}
          value={info.title}
          placeholder={t('details.title')}
        />
        <div className='info__title-error'>
          {errors?.title && <span>🔺 {errors.title.message}</span>}
        </div>
        <textarea
          className='info__description'
          {...register('description', {
            maxLength: { message: 'Не более 250 символов', value: 250 },
            minLength: { message: 'Не менее 10 символов', value: 10 },
            required: 'Описание не должно быть пустым',
          })}
          onChange={(e: Event) => handleChangeDescription(e)}
          placeholder={t('details.description')}
          value={info.description}
        />
        <div className='info__description-error'>
          {errors?.description && <span>🔺 {errors.description.message}</span>}
        </div>
      </form>
    </>
  );
};

export { Info };
