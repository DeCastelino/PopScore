import { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "@/layouts/MainLayout";
import type { TmdbMovieDetails } from "../../types/tmdb";
import MovieDetails from "@/components/MovieDetails";

const MovieDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;

    return (
        <MovieDetails movieID={id} />
    )
}

export default MovieDetailsPage;