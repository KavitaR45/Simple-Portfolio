import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, Mousewheel, Lazy, Virtual, EffectFade, Scrollbar, Parallax,EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel, Virtual, EffectFade, Scrollbar, Parallax, Lazy,EffectCoverflow]);


export default function Slider({ children, config, name, }) {

    var props = {
        spaceBetween: 0,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 3,
            watchSlidesVisibility: true,
            checkInView: true,
            loadOnTransitionStart: true
        },
        slidesPerView: "auto",
        pagination: {
            el: '.pagination', clickable: true,
            renderBullet: function (index, className) {
                return '<span  class="' + className + '">' + '</span>';
            },
        },
        direction: "vertical",
        speed:700,
        simulateTouch:false,
        mousewheel: {
            releaseOnEdges: true,
            sensitivity: 1,
            thresholdTime: 700,
            thresholdDelta: 50,
        },
        slidesPerView:1,
        ...config
    }

    return (
        <>
            <Swiper style={{ height:"100vh" }}  {...props} >
                {children.map((x, index) =>
                    <SwiperSlide key={name + index}>
                        {x}
                    </SwiperSlide>)}
            </Swiper>
        </>
    );
};



