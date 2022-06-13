import React, { FC } from 'react';
import { Marker, Popup } from 'react-leaflet';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';

import { markerStyleHelper } from '../../helpers/markerStyleHelper';

const MarkerWrapper: FC = (props): JSX.Element => {
  const { markers, noPopupMarker } = props;
  const { t } = useTranslation();

  return (
    markers &&
    _.map(markers, (item) => (
      <>
        <Marker
          key={`marker-${item.id}`}
          position={[item.point.lat, item.point.lon]}
          icon={markerStyleHelper(item.status)}>
          {!noPopupMarker
            ? item.status !== 'MY' && (
                <Popup key={`popup-${item.id}`}>
                  <>
                    <p className='popup-id'>
                      {t('details.issue-id')}
                      {item.id}
                    </p>
                    <hr />
                    <p className='popup-title'>
                      {t('details.title')}
                      {item.title}
                    </p>
                  </>
                </Popup>
              )
            : null}
        </Marker>
      </>
    ))
  );
};

export { MarkerWrapper };
