import cx from 'classnames';
import React, { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { map, orderBy, assign } from 'lodash';
import { useTranslation } from 'react-i18next';
import { GET_ORGANIZATIONS } from '';

import './Organizations.styles.scss';

import { Map } from '../Map/Map';

type Contact = {
  phone: string;
  title: string;
};
interface IOrganization {
  address: string;
  contacts: Contact[];
  icon: string;
  title: string;
}

const Organizations: FC = (): JSX.Element => {
  const organizationsList = [
    {
      address: 'Киев, проспект Мира, 14А',
      contacts: [
        {
          phone: '+380501111111',
          title: 'Приемная',
        },
        {
          phone: '+380502222222',
          title: 'Начальник',
        },
        {
          phone: '+380503333333',
          title: 'Бригадир',
        },
      ],
      icon: 'https://office-flora.ru/local/templates/flora_index/images/services/icon/1.png',
      id: 1,
      order: 1,
      title: 'ЗеленСтройПорядок',
    },
    {
      address: 'Киев, улица Мыколы, 22',
      contacts: [
        {
          phone: '+380931111111',
          title: 'Приемная',
        },
        {
          phone: '+380932222222',
          title: 'Начальник',
        },
        {
          phone: '+380933333333',
          title: 'Бригадир',
        },
      ],
      icon: 'https://office-flora.ru/local/templates/flora_index/images/services/icon/6.png',
      id: 2,
      order: 2,
      title: 'УтильСервисПолигон',
    },
  ];

  // const [getOrganizations, { loading, error, data }] = useQuery(GET_ORGANIZATIONS);
  const [organizations, setOrganizations] = useState<IOrganization[]>(organizationsList);
  const [currentOrganization, setCurrentOrganization] = useState(null);
  const { t } = useTranslation();

  const comparedOrganizations = (organizations) => orderBy(organizations, 'order', ['asc']);

  const handleCreateOrganization = () => {};

  const handleDragStart = (e, organization) => {
    setCurrentOrganization(organization);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, organization) => {
    e.preventDefault();
    const reorderedOrganizatinos = map(organizations, (org) => {
      if (org.id === organization.id) {
        return assign({}, org, { order: currentOrganization.order });
      }
      if (org.id === currentOrganization.id) {
        return assign({}, org, { order: organization.order });
      }
      return org;
    });
    setOrganizations(comparedOrganizations(reorderedOrganizatinos));
  };

  const data = organizations;
  const loading = '';
  const error = '';

  if (loading) return <p className='hook-loading__msg'>{t('apollo.hook-loading')}</p>;
  if (error)
    return (
      <p className='hook-error__msg'>
        {t('apollo.hook-error')} ${error.message}
      </p>
    );

  const initialMapState = {
    attributionControl: false,
    center: [50.447844, 30.524545],
    doubleClickZoom: false,
    dragging: true,
    drawControl: true,
    scrollWheelZoom: true,
    zoom: 15,
    zoomControl: true,
  };

  const fakeMarker = {
    id: '53453453453',
    point: {
      lat: 50,
      lon: 40,
    },
    status: 'MY',
    title: 'test',
  };

  return (
    <>
      <section className='organizations'>
        <div className='organizations__container'>
          <div className='organizations__wrapper'>
            {!data?.length && (
              <div className='organizations__empty-list empty-list'>
                <p className='empty-list__msg'>{t('organizations.empty-list')}</p>
                <button className='empty-list__link' onClick={handleCreateOrganization}>
                  {t('organizations.create-organization')}
                </button>
              </div>
            )}

            {data && (
              <>
                <div className='organizations__list'>
                  {map(organizations, (organization: IOrganization) => (
                    <div
                      className={cx('organization', {})}
                      draggable={true}
                      onDragStart={(e) => handleDragStart(e, organization)}
                      onDragLeave={handleDragLeave}
                      onDragEnd={handleDragEnd}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, organization)}>
                      <div className='organization__header-wrapper'>
                        <img
                          src={organization.icon}
                          className='organization__icon'
                          alt='Логотип организации'></img>
                        <div className='organization__title'>{organization.title}</div>
                      </div>
                      <div className='organization__contacts contact'>
                        {map(organization.contacts, (contact) => (
                          <div className='contact__item'>
                            <div className='contact__title'>{contact.title}</div>
                            <a href={`tel:${contact.phone}`} className='contact__phone'>
                              {contact.phone}
                            </a>
                          </div>
                        ))}
                      </div>
                      <div className='organization__address'>{organization.address}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
            <div className='organizations__territory'>
              {<Map initialMapState={initialMapState} markers={[fakeMarker]} noPopupMarker />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Organizations };
