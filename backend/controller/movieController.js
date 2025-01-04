import axios from "axios";
// const run = require("../database/Mongo.database");
const getMovieByID = async (req, res) => {};

export const trendingMovies = async (req, res) => {
    const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
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

export const nowPlaying = async (req, res) => {
    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${req.query.page}`,
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
