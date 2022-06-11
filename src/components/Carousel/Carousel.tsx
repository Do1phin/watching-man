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
    url: 'https://swiperjs.com/demos/images/nature-1.jpg',
  },
  {
    id: 2,
    type: 'video',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    id: 3,
    type: 'img',
    url: 'https://swiperjs.com/demos/images/nature-2.jpg',
  },
  {
    id: 4,
    type: 'img',
    url: 'https://swiperjs.com/demos/images/nature-3.jpg',
  },
  {
    id: 5,
    type: 'img',
    url: 'https://swiperjs.com/demos/images/nature-3.jpg',
  },
  {
    id: 6,
    type: 'img',
    url: 'https://swiperjs.com/demos/images/nature-4.jpg',
  },
];

const Carousel: FC = (props): JSX.Element => {
  const { id } = props;

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
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <picture className='item__photo'>
              <source srcSet={`/images/issues/${id}/0${slide.id}.webp`} type='image/webp'></source>
              <img src={`/images/issues/${id}/0${slide.id}.jpeg`} alt='Фото-факт обращения'></img>
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
              <source srcSet={`/images/issues/${id}/0${slide.id}.webp`} type='image/webp'></source>
              <img src={`/images/issues/${id}/0${slide.id}.jpeg`} alt='Фото-факт обращения'></img>
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export { Carousel };
