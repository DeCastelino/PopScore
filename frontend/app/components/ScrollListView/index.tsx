import { useRef, useState, useCallback, useEffect } from "react";
import { debounce } from 'lodash';
import { useSpring } from 'react-spring';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import 'swiper/swiper-bundle.css';
import { TmdbMovieResult, TmdbTvResult } from "../Discover/types";
import Card from "../Card";



type CarouselProps = {
    mediaList: (TmdbMovieResult | TmdbTvResult)[];
};


enum Direction {
    RIGHT,
    LEFT,
}


const ScrollListView = ({ mediaList }: CarouselProps) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollPos, setScrollPos] = useState({ isStart: true, isEnd: false });

    const handleScroll = useCallback(() => {
        const scrollWidth = containerRef.current?.scrollWidth ?? 0;
        const clientWidth =
            containerRef.current?.getBoundingClientRect().width ?? 0;
        const scrollPosition = containerRef.current?.scrollLeft ?? 0;

        if (!mediaList || mediaList?.length === 0) {
            setScrollPos({ isStart: true, isEnd: true });
        } else if (clientWidth >= scrollWidth) {
            setScrollPos({ isStart: true, isEnd: true });
        } else if (
            scrollPosition >=
            (containerRef.current?.scrollWidth ?? 0) - clientWidth
        ) {
            setScrollPos({ isStart: false, isEnd: true });
        } else if (scrollPosition > 0) {
            setScrollPos({ isStart: false, isEnd: false });
        } else {
            setScrollPos({ isStart: true, isEnd: false });
        }
    }, [mediaList]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedScroll = useCallback(
        debounce(() => handleScroll(), 50),
        [handleScroll]
    );

    useEffect(() => {
        const handleResize = () => {
            debouncedScroll();
        };

        window.addEventListener('resize', handleResize, { passive: true });

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [debouncedScroll]);

    useEffect(() => {
        handleScroll();
    }, [mediaList, handleScroll]);

    const onScroll = () => {
        debouncedScroll();
    };

    const [, setX] = useSpring(() => ({
        from: { x: 0 },
        to: { x: 0 },
        onChange: (results) => {
            if (containerRef.current) {
                containerRef.current.scrollLeft = results.value.x;
            }
        },
    }));

    const slide = (direction: Direction) => {
        const clientWidth =
            containerRef.current?.getBoundingClientRect().width ?? 0;
        const cardWidth =
            containerRef.current?.firstElementChild?.getBoundingClientRect().width ??
            0;
        const scrollPosition = containerRef.current?.scrollLeft ?? 0;
        const visiblemediaList = Math.floor(clientWidth / cardWidth);
        const scrollOffset = scrollPosition % cardWidth;

        if (direction === Direction.LEFT) {
            const newX = Math.max(
                scrollPosition - scrollOffset - visiblemediaList * cardWidth,
                0
            );
            setX.start({
                from: { x: scrollPosition },
                to: { x: newX },
                onChange: (results) => {
                    if (containerRef.current) {
                        containerRef.current.scrollLeft = results.value.x;
                    }
                },
                reset: true,
                config: { friction: 60, tension: 500, velocity: 20 },
            });

            if (newX === 0) {
                setScrollPos({ isStart: true, isEnd: false });
            } else {
                setScrollPos({ isStart: false, isEnd: false });
            }
        } else if (direction === Direction.RIGHT) {
            const newX = Math.min(
                scrollPosition - scrollOffset + visiblemediaList * cardWidth,
                containerRef.current?.scrollWidth ?? 0 - clientWidth
            );
            setX.start({
                from: { x: scrollPosition },
                to: { x: newX },
                onChange: (results) => {
                    if (containerRef.current) {
                        containerRef.current.scrollLeft = results.value.x;
                    }
                },
                reset: true,
                config: { friction: 60, tension: 500, velocity: 20 },
            });

            if (newX >= (containerRef.current?.scrollWidth ?? 0) - clientWidth) {
                setScrollPos({ isStart: false, isEnd: true });
            } else {
                setScrollPos({ isStart: false, isEnd: false });
            }
        }
    };
    return (
        <div className="relative flex py-5" data-testid="media-slider">
            <div className="absolute right-0 -mt-10 flex text-gray-400">
                <button
                    className={`${scrollPos.isStart ? 'text-gray-800' : 'hover:text-white'
                        }`}
                    onClick={() => slide(Direction.LEFT)}
                    disabled={scrollPos.isStart}
                    type="button"
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                    className={`${scrollPos.isEnd ? 'text-gray-800' : 'hover:text-white'
                        }`}
                    onClick={() => slide(Direction.RIGHT)}
                    disabled={scrollPos.isEnd}
                    type="button"
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </button>
            </div>
            <div
                className="hide-scrollbar relative -my-2 -ml-4 -mr-4 overflow-y-auto overflow-x-scroll overscroll-x-contain whitespace-nowrap px-2 py-2"
                ref={containerRef}
                onScroll={onScroll}
            >
                {mediaList?.map((media, index) => (
                    <div
                        key={`trending-${index}`}
                        className="inline-block px-2 align-top"
                    >
                        <Card media={media} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ScrollListView;