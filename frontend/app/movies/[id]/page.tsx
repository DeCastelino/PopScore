import MovieDetails from "@/components/MovieDetails";

const MovieDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;

    return (
        <MovieDetails movieID={id} />
    )
}

export default MovieDetailsPage;