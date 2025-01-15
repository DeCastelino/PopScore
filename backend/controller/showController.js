import axios from "axios";

export const trendingShows = async (req, res) => {
    const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
        headers: {
            accept: "application/json",
            Authorization: process.env.TMDB_API,
        },
    };

    axios
        .request(options)
        .then((response) => {
            return res.status(200).json(response.data.results);
        })
        .catch((err) => {
            return res.status(401).json(err);
        });
};
