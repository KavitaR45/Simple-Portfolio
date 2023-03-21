import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,EffectFade,Navigation,Pagination} from 'swiper';
SwiperCore.use([Autoplay,EffectFade,Navigation,Pagination]);

export default function Slides({ children, config, }) {
    var props = {
        spaceBetween: 100, autoplay:true,loop: true,slidesPerView: 1, freeMode: false,centeredSlides: true,speed:800,...config
    }
    return (
            <Swiper pagination={true} navigation={true} {...props} style={{ position: "relative" }}  >
                {children.map((X, i) =>  <SwiperSlide key={'SwiperJS' + i}>{X}</SwiperSlide>)}
            </Swiper>
    );
};


