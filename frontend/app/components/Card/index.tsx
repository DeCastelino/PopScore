import { TmdbMovieResult } from "../Discover/types";

type ListViewProps = {
    movie: TmdbMovieResult;
}

const Card = ({ movie }: ListViewProps) => {

    const baseImageUrl = "https://image.tmdb.org/t/p/w500"; // TMDB base URL for images
    const posterUrl = movie.poster_path ? `${baseImageUrl}${movie.poster_path}` : "/placeholder-image.jpg"; // Fallback for missing poster

    return (
        <div className=" w-40 rounded-lg overflow-hidden bg-gradient-to-b from-transparent to-black">
            <img src={posterUrl} alt="" className="object-fill bg-blend-color-burn" />
        </div>

    );
}

export default Card;