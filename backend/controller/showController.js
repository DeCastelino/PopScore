import axios from "axios";

export const popularShows = async (req, res) => {
    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${req.query.page}`,
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
export const showsAiringToday = async (req, res) => {
    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${req.query.page}`,
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
export const showsOnAir = async (req, res) => {
    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${req.query.page}`,
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
export const topRatedShows = async (req, res) => {
    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${req.query.page}`,
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
export const allShows = async (req, res) => {
    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${req.query.page}&sort_by=popularity.desc`,
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
