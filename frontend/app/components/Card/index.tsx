import Link from "next/link";
import { TmdbMovieResult, TmdbTvResult } from "../Discover/types";

type ListViewProps = {
    media: (TmdbMovieResult | TmdbTvResult);
}

const Card = ({ media }: ListViewProps) => {

    const baseImageUrl = "https://image.tmdb.org/t/p/w500"; // TMDB base URL for images
    const posterUrl = media.poster_path ? `${baseImageUrl}${media.backdrop_path}` : "/placeholder-image.jpg"; // Fallback for missing poster

    return (
        <Link href={media.media_type == "movie" ? `/movies/${media.id}` : `/shows/${media.id}`}>
            <div className="">
                <div className="relative w-72 rounded-lg overflow-hidden bg-transparent">
                    {/* <div className="absolute left-0 right-0 h-full bg-gradient-to-b from-transparent to-black"></div> */}
                    <img src={posterUrl} alt="" className="object-fill rounded-2xl" />
                    <div className="pt-2 pl-2 text-white">
                        <h2 className="relative">
                            {media.media_type == "movie" ? media.title : media.name}
                        </h2>
                        <h3>{media.media_type == "movie" ? media.release_date?.slice(0, 4) : media.first_air_date?.slice(0, 4)}</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;