'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { TmdbMovieResult } from "../../types/tmdb";
import MainLayout from "../../layouts/MainLayout";
import Card from "../../components/Card";


const AllMovies = () => {

    const [topRatedMovies, setTopRatedMovies] = useState<TmdbMovieResult[]>([]);
    const [pageCount, setPageCount] = useState<number>(1);

    useEffect(() => {
        axios.get('http://localhost:3001/movies/top-rated', {
            params: {
                page: pageCount
            }
        }).then((res) => {
            // Add media_type to each movie
            const moviesWithMediaType = res.data.map((movie: TmdbMovieResult) => ({
                ...movie,
                media_type: "movie", // Set the media_type explicitly
            }));
            setTopRatedMovies((prevMovies) => [...prevMovies, ...moviesWithMediaType])

        }).catch(error => console.error(error)
        )
    }, [pageCount])


    return (
        <MainLayout>
            <div className="grid gap-5 grid-cols-4 justify-items-center">
                {topRatedMovies.map((movie, index) => (
                    <div
                        key={`all-movies-${index}`}
                    >
                        <Card media={movie} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center py-5">
                <button type="button" onClick={() => setPageCount((prevCount) => prevCount + 1)} className="text-white italic tracking-widest hover:text-black bg-orange-500 w-full hover:bg-orange-600 focus:ring-4 focus:ring-white font-extrabold rounded-lg text-lg px-5 py-2 focus:outline-none">LOAD MORE</button>
            </div>
        </MainLayout >
    );
}

export default AllMovies;