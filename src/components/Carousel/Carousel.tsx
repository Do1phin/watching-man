import React, { FC, useState } from 'react';
import { A11y, FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import './Carousel.styles.scss';

const slidesData = [
  {
    id: 1,
    type: 'img',
    url: 'https://img.freepik.com/free-photo/hostomil-reg-ukraine-apr-22-2022-an-unexploded-rocket-of-the-russian-occupying-troops-sticks-out-of-the-road_173948-7894.jpg',
  },
  {
    id: 2,
    type: 'img',
    url: 'https://img.freepik.com/free-photo/panorama-of-grunge-wall-of-building-on-street-in-summer-day-modern-and-luxury-3d-illustration-style-for-hipster-and-cyberpunk-grunge-template_510351-7455.jpg',
  },
  {
    id: 3,
    type: 'img',
    url: 'https://img.freepik.com/free-photo/neatly-collected-construction-debris-in-bags-and-piled-in-a-heap-in-city-courtyard-outside-building_262238-2300.jpg',
  },
  {
    id: 4,
    type: 'img',
    url: 'https://img.freepik.com/free-photo/stone-cover-and-manhole-of-an-ancient-deep-well_361360-993.jpg',
  },
];

const Carousel: FC = (props): JSX.Element => {
  // const { id } = props;
  const id = '629a1619ef811a385fcd83c6';
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        className='swiper-main'
        modules={[Navigation, Pagination, Thumbs, A11y]}
        spaceBetween={50}
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <picture className='item__photo'>
              {/*<source srcSet={`/images/issues/${id}/0${slide.id}.webp`} type='image/webp'></source>*/}
              <img src={slide.url} alt='Фото к обращению'></img>
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className='swiper-thumbs'
        freeMode={true}
        slidesPerView={4}
        spaceBetween={20}
        modules={[Thumbs, FreeMode]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}>
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <picture className='item__photo'>
              {/*<source srcSet={`/images/issues/${id}/0${slide.id}.webp`} type='image/webp'></source>*/}
              <img src={slide.url} alt='Превью обращения'></img>
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export { Carousel };
