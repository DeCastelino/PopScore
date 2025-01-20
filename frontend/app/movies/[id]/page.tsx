'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "@/layouts/MainLayout";
import type { TmdbMovieDetails } from "../../types/tmdb";

const MovieDetails = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;
    const [movieDetails, setMovieDetails] = useState<TmdbMovieDetails>();
    useEffect(() => {
        axios.get('http://localhost:3001/getMovieByID', {
            params: {
                movieID: id
            }
        }).then((res) => {
            setMovieDetails(res.data)
        })
    }, [])


    return (
        <MainLayout>
            <div>{ }</div>
        </MainLayout>
    );
}

export default MovieDetails;