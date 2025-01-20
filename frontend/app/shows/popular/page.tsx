'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { TmdbTvResult } from "../../types/tmdb";
import MainLayout from "../../layouts/MainLayout";
import Card from "../../components/Card";


const popularShows = () => {

    const [popularShows, setPopularMovies] = useState<TmdbTvResult[]>([]);
    const [pageCount, setPageCount] = useState<number>(1);

    useEffect(() => {
        axios.get('http://localhost:3001/shows/popular', {
            params: {
                page: pageCount
            }
        }).then((res) => {
            // Add media_type to each show
            const showsWithMediaType = res.data.map((show: TmdbTvResult) => ({
                ...show,
                media_type: "tv", // Set the media_type explicitly
            }));
            setPopularMovies((prevMovies) => [...prevMovies, ...showsWithMediaType])

        }).catch(error => console.error(error)
        )
    }, [pageCount])


    return (
        <MainLayout>
            <div className="grid gap-5 grid-cols-4 justify-items-center">
                {popularShows.map((show, index) => (
                    <div
                        key={`all-movies-${index}`}
                    >
                        <Card media={show} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center py-5">
                <button type="button" onClick={() => setPageCount((prevCount) => prevCount + 1)} className="text-white italic tracking-widest hover:text-black bg-orange-500 w-full hover:bg-orange-600 focus:ring-4 focus:ring-white font-extrabold rounded-lg text-lg px-5 py-2 focus:outline-none">LOAD MORE</button>
            </div>
        </MainLayout >
    );
}

export default popularShows;