import { useRef, useState, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import { TmdbMovieResult } from "../Discover/types";
import Card from "../Card";



type CarouselProps = {
    movies: TmdbMovieResult[];
};


const ScrollListView = ({ movies }: CarouselProps) => {

    return (
        <div className="relative w-full py-6">
            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={1} // Spacing between slides
                slidesPerView={6} // Number of visible slides
                navigation // Enable navigation arrows
                loop={false} // Infinite loop
                breakpoints={{
                    // Responsive breakpoints
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                }}
                className="px-4"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <Card movie={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ScrollListView;