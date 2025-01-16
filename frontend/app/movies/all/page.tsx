'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { TmdbMovieResult } from "../../types/tmdb";
import MainLayout from "../../layouts/MainLayout";
import Card from "../../components/Card";


const AllMovies = () => {

    const [allMovies, setAllMovies] = useState<TmdbMovieResult[]>([]);
    const [pageCount, setPageCount] = useState<number>(1);

    useEffect(() => {
        axios.get('http://localhost:3001/movies/all', {
            params: {
                page: pageCount
            }
        }).then((res) => {
            setAllMovies((prevMovies) => [...prevMovies, ...res.data])

        }).catch(error => console.error(error)
        )
    }, [pageCount])


    return (
        <MainLayout>
            <div className="grid gap-5 grid-cols-6 justify-items-center">
                {
                    allMovies.map((movie) => {
                        return (
                            <Card key={movie.id} media={movie} />
                        )
                    })
                }
            </div>
            <div className="flex justify-center py-5">
                <button type="button" onClick={() => setPageCount((prevCount) => prevCount + 1)} className="text-white italic tracking-widest hover:text-black bg-orange-500 w-full hover:bg-orange-600 focus:ring-4 focus:ring-white font-extrabold rounded-lg text-lg px-5 py-2 focus:outline-none">LOAD MORE</button>
            </div>
        </MainLayout >
    );
}

export default AllMovies;