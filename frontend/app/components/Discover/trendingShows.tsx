'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import type { TmdbMovieResult } from "../../types/tmdb";
import ScrollListView from "../ScrollListView";

const TrendingShows = () => {

    const [trendingShows, setTrendingShows] = useState<TmdbMovieResult[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/trendingShows').then((res) => {
            setTrendingShows(res.data)

        }).catch(error => console.error(error)
        )
    }, [])

    return (
        <div className="md:container px-2">
            <ScrollListView mediaList={trendingShows} />
        </div>

    );
}

export default TrendingShows;