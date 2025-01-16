const router = require("express").Router();
const movieController = require("../controller/movieController");
const showController = require("../controller/showController");

//get routes (movies)
router.get("/movies/all", movieController.allMovies);
router.get("/trendingMovies", movieController.trendingMovies);
router.get("/nowPlaying", movieController.nowPlaying);

// get routes (shwos)
router.get("/trendingShows", showController.trendingShows);

module.exports = router;
