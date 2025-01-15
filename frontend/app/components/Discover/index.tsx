import TrendingMovies from "./trendingMovies";
import TrendingShows from "./trendingShows";
const Discover = () => {
    return (
        <>
            <h1 className="text-2xl text-white tracking-wide font-bold">Trending Movies</h1>
            <TrendingMovies />
            <h1 className="text-2xl text-white tracking-wide font-bold">Trending Series</h1>
            <TrendingShows />
        </>

    );
}

export default Discover;