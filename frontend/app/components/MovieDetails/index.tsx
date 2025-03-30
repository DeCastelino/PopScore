'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import { TmdbMovieDetails, TmdbCreditCast } from "@/types/tmdb"
import MainLayout from "@/layouts/MainLayout"

type MovieIDProps = {
    movieID: string;
}

const MovieDetails = ({ movieID }: MovieIDProps) => {

    const [movieDetails, setMovieDetails] = useState<TmdbMovieDetails>();
    const [castDetails, setCastDetails] = useState<TmdbCreditCast[]>([]);
    const baseImageUrl = "https://image.tmdb.org/t/p/original"; // TMDB base URL for images

    useEffect(() => {
        axios.get('http://localhost:3001/getMovieByID', {
            params: {
                movieID: movieID
            }
        }).then((res) => {
            setMovieDetails(res.data)
        })
        axios.get('http://localhost:3001/getCastByMovieID', {
            params: {
                movieID: movieID
            }
        }).then((res) => {
            setCastDetails(res.data);
        })
    }, [])


    return (
        <MainLayout>
            <div className="flex">
                {/* Movie Poster */}
                <img src={movieDetails?.poster_path ? `${baseImageUrl}${movieDetails.poster_path}` : "/placeholder-image.jpg"} alt="" className="w-1/3 object-cover rounded-3xl" />
                {/* Movie Details */}
                <div className="text-white ml-32">
                    <h1 className="text-4xl font-semibold pb-2">{movieDetails?.title}</h1>
                    <div className="flex gap-x-5 pb-2">
                        <p>{movieDetails?.release_date.slice(0, 4)}</p>
                        <p>{movieDetails?.runtime} minutes</p>
                    </div>
                    <div className="flex gap-5 pb-8">
                        {movieDetails?.genres.map((genre, index) => (
                            <h1 key={index} className="italic text-gray-400">{genre.name}</h1>
                        ))}
                    </div>
                    <p className="pb-5">{movieDetails?.overview}</p>
                    {/* CAST SECTION */}
                    <h1 className="text-2xl font-medium pb-3">Cast</h1>
                    <div className="flex justify-between">
                        {castDetails.length > 0 ? castDetails?.slice(0, 5).map((cast, index) => (
                            <div key={index} className="w-24 text-pretty text-center text-sm">
                                <img src={cast.profile_path ? `${baseImageUrl}${cast.profile_path}` : '/placeholder-image.jpg'} alt="" className="w-24 h-24 mb-4 rounded-full object-cover" />
                                <h3 className="">
                                    {cast.name}
                                </h3>
                                <h3 className="text-gray-500 italic">as</h3>
                                <h3 className="">{cast.character}</h3>
                            </div>
                        )) : (
                            <div>No cast members found</div>
                        )}
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}

export default MovieDetails;