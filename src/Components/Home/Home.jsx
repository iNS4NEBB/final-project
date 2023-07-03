import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./home.css";

export const Home = () => {
  return (
    <main className="home">
      <h1>Потеряли велосипед?</h1>
      <p className="text-title">Мы поможем его найти</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="text-main">
            <p>Наша компания является лидером по поиску велосипедов по всему миру</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-main">
            <p>Главное не волнуйтесь и следуйте нашим инструкциям для поиска вашего велосипеда</p>
            </div>          
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-main">
          <p>Заполните на нашем сайте специальную форму чтобы сообщить о происшествии</p>
          </div>
          </SwiperSlide>
      </Swiper>      
    </main>
  );
};