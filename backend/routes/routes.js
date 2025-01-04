const router = require("express").Router();
const movieController = require("../controller/movieController");

//get routes
// router.get("/getMovieByID", movieController.getMovieByID);
router.get("/trendingMovies", movieController.trendingMovies);
router.get("/nowPlaying", movieController.nowPlaying);

module.exports = router;
