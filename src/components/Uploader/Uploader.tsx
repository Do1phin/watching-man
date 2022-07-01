import React, { FC, useState } from 'react';
import { filter, map, slice } from 'lodash';
import { useTranslation } from 'react-i18next';

import './Uploader.styles.scss';

const Uploader: FC = (): JSX.Element => {
  const [photosToUpload, setPhotosToUpload] = useState([]);
  const [drag, setDrag] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleDragStart = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    const files = slice([...e.dataTransfer.files], 0, 8);
    setPhotosToUpload([...files]);
  };

  const handleFilesSelect = (e) => {
    e.preventDefault();
    const files = slice(
      map(e.target.files, (file) => {
        return {
          lastModified: file.lastModified,
          lastModifiedDate: file.lastModifiedDate,
          name: file.name,
          size: file.size,
        };
      }),
      0,
      9,
    );
    setPhotosToUpload([...files]);
  };

  const handleClickRemoveItmeBtn = (e, name) => {
    e.preventDefault();
    const photos = filter(photosToUpload, (photo) => {
      return photo.name !== name;
    });
    return setPhotosToUpload(photos);
  };

  const NoPhoto = (): JSX.Element | null => {
    return <div className='photos__no-photo'>{t('issues.no-photo-title')}</div>;
  };

  const PhotoList = (): JSX.Element | null => {
    return !photosToUpload.length ? (
      <NoPhoto />
    ) : (
      <ul className='photos__list list'>
        {map(photosToUpload, (photo, index) => (
          <li className='list-item'>
            <span className='list-item__index'>{index + 1}. </span>
            <p className='list-item__name'>{photo.name}</p>
            <span
              className='list-item__remove-btn'
              onClick={(e) => handleClickRemoveItmeBtn(e, photo.name)}>
              X
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className='form__photo-loader-wrapper photo-loader__wrapper'>
      <div
        className='photo-loader'
        onDragStart={handleDragStart}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleOnDrop}>
        <p className='photo-loader__title'>{t('issues.drag-and-drop')}</p>

        <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <g>
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z' />
          </g>
        </svg>
        {photosToUpload.length < 10 && (
          <input
            type='file'
            className='photo-loader__input'
            accept='.png, .jpg, .jpeg'
            multiple
            onChange={handleFilesSelect}
          />
        )}
      </div>

      <div className='form__photo-wrapper photo-wrapper'>
        <PhotoList />
      </div>
    </div>
  );
};

export { Uploader };
