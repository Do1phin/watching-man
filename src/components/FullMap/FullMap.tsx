import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useMyPosition } from '../Map/hooks/useMyPosition';

import './FullMap.styles.scss';

import { GET_ALL_ISSUES } from '../../apollo/operations';

import {
  CreateIssue,
  Map,
  MyPositionButton,
  draggableMarker,
  markerLayer,
  searchControl,
} from '../index';

const mapState = {
  attributionControl: false,
  center: [50.447844, 30.524545],
  doubleClickZoom: false,
  dragging: true,
  scrollWheelZoom: true,
  zoom: 7,
  zoomControl: true,
};

interface IAddress {
  coords: {
    lat: string;
    lon: string;
  };
  address: {
    building: string;
    house_number: string;
    road: string;
    borough: string;
    city: string;
    postcode: string;
    country: string;
    country_code: string;
  };
}

const mockAddress: IAddress = {
  address: {
    borough: 'Шевченковский район',
    building: 'Дом профсоюзов',
    city: 'Киев',
    country: 'Украина',
    country_code: 'ua',
    house_number: '18/2',
    postcode: '01001',
    road: 'Крещатик улица',
  },
  coords: {
    lat: '50.4432',
    lon: '49.8596',
  },
};

const FullMap: FC = (): JSX.Element => {
  const { data, loading } = useQuery(GET_ALL_ISSUES);
  const { coords } = useMyPosition();
  const { t } = useTranslation();
  const [address, setAddress] = useState(mockAddress);
  const [issues, setIssues] = useState([]);
  const [createIssueMode, setCreateIssueMode] = useState(false);
  const [myPositionMode, setMyPositionMode] = useState(false);

  useEffect(() => {
    if (data) {
      setIssues(data.allIssues);
    }
  }, [data]);

  if (loading) return <p className='hook-loading__msg'>{t('apollo.hook-loading')}</p>;
  // if (error) return <p className='hook-error__msg'>{t('apollo.hook-error')} 😧</p>;

  return (
    <section className='full-map'>
      <div className='full-map__container'>
        <CreateIssue
          address={address}
          setAddress={setAddress}
          createIssueMode={createIssueMode}
          setCreateIssueMode={setCreateIssueMode}
        />
        <MyPositionButton setMyPositionMode={setMyPositionMode} />
        <Map
          data-class={'full-map'}
          draggableMarker={draggableMarker}
          searchControl={searchControl}
          markerLayer={markerLayer}
          markerCluster={true}
          createIssueMode={createIssueMode}
          setCreateIssueMode={setCreateIssueMode}
          myPositionMode={myPositionMode}
          issues={issues}
          coords={coords}
          mapState={mapState}
        />
      </div>
    </section>
  );
};

export { FullMap };
