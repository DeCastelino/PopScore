const router = require("express").Router();
const movieController = require("../controller/movieController");
const showController = require("../controller/showController");

//get routes (movies)
router.get("/movies/all", movieController.allMovies);
router.get("/trendingMovies", movieController.trendingMovies);
router.get("/now-playing", movieController.nowPlaying);
router.get("/popular-movies", movieController.popularMovies);
router.get("/movies/top-rated", movieController.topRatedMovies);
router.get("/movies/upcoming", movieController.upcomingMovies);

// get routes (shwos)
router.get("/trendingShows", showController.trendingShows);

module.exports = router;
