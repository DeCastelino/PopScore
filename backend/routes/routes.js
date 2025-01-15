const router = require("express").Router();
const movieController = require("../controller/movieController");
const showController = require("../controller/showController");

//get routes
// router.get("/getMovieByID", movieController.getMovieByID);
router.get("/trendingMovies", movieController.trendingMovies);
router.get("/nowPlaying", movieController.nowPlaying);
router.get("/trendingShows", showController.trendingShows);

module.exports = router;
