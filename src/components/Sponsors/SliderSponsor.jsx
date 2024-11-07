import React from 'react';
// Import Swiper React components
// Import Swiper styles
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import required modules
// Avatar
import AvatarCard from './SponsorCard';

function SliderSponsor({ users }) {

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className='mySwiper'
    >
      {users.map((user, idx) => {
        return (
          <SwiperSlide key={user.name}>
            <AvatarCard
              img={user.img}
              name={user.name}
              detail={user.detail}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SliderSponsor;
