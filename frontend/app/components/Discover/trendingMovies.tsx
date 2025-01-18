'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import type { TmdbMovieResult } from "../../types/tmdb";
import ScrollListView from "../ScrollListView";

const TrendingMovies = () => {

    const [trendingMovies, setTrendingMovies] = useState<TmdbMovieResult[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/trendingMovies').then((res) => {
            setTrendingMovies(res.data)

        }).catch(error => console.error(error)
        )
    }, [])

    return (
        <div className="md:container">
            <ScrollListView mediaList={trendingMovies} />
        </div>

    );
}

export default TrendingMovies;