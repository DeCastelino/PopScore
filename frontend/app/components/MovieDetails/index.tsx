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
    const baseImageUrl = "https://image.tmdb.org/t/p/w500"; // TMDB base URL for images

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
            <div><img src={movieDetails?.backdrop_path ? `${baseImageUrl}${movieDetails.backdrop_path}` : "/placeholder-image.jpg"} alt="" className="object-fill" /></div>
        </MainLayout>
    );
}

export default MovieDetails;