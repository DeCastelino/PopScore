'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import { TmdbMovieDetails } from "@/types/tmdb"
import MainLayout from "@/layouts/MainLayout"

type MovieIDProps = {
    movieID: string;
}

const MovieDetails = ({ movieID }: MovieIDProps) => {

    const [movieDetails, setMovieDetails] = useState<TmdbMovieDetails>();
    const baseImageUrl = "https://image.tmdb.org/t/p/original"; // TMDB base URL for images

    useEffect(() => {
        axios.get('http://localhost:3001/getMovieByID', {
            params: {
                movieID: movieID
            }
        }).then((res) => {
            console.log('Data:', res.data);

            setMovieDetails(res.data)
        })
    }, [])


    return (
        <MainLayout>
            <div className="flex">
                {/* Movie Poster */}
                <img src={movieDetails?.poster_path ? `${baseImageUrl}${movieDetails.poster_path}` : "/placeholder-image.jpg"} alt="" className="w-1/3 object-cover rounded-3xl" />
                {/* Movie Details */}
                <div className="text-white ml-32">
                    <h1>{movieDetails?.title}</h1>
                </div>
            </div>
        </MainLayout>
    );
}

export default MovieDetails;