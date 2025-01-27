import axios from "axios";

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

export const popularMovies = async (req, res) => {
    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${req.query.page}`,
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

export const topRatedMovies = async (req, res) => {
    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${req.query.page}`,
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

export const upcomingMovies = async (req, res) => {
    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${req.query.page}`,
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

export const allMovies = async (req, res) => {
    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${req.query.page}&sort_by=popularity.desc`,
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
export const getMovieByID = async (req, res) => {
    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${req.query.movieID}?language=en-US`,
        headers: {
            accept: "application/json",
            Authorization: process.env.TMDB_API,
        },
    };

    axios
        .request(options)
        .then((response) => {
            return res.status(200).json(response.data);
        })
        .catch((err) => {
            return res.status(401).json(err);
        });
};
