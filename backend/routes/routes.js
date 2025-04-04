const router = require("express").Router();
const movieController = require("../controller/movieController");
const showController = require("../controller/showController");
const userController = require("../controller/userController");

//get routes (movies)
router.get("/movies/all", movieController.allMovies);
router.get("/trendingMovies", movieController.trendingMovies);
router.get("/now-playing", movieController.nowPlaying);
router.get("/popular-movies", movieController.popularMovies);
router.get("/movies/top-rated", movieController.topRatedMovies);
router.get("/movies/upcoming", movieController.upcomingMovies);
router.get("/getMovieByID", movieController.getMovieByID);
router.get("/getCastByMovieID", movieController.getCastByMovieID);

// get routes (shwos)
router.get("/shows/popular", showController.popularShows);
router.get("/shows/airing-today", showController.showsAiringToday);
router.get("/shows/on-air", showController.showsOnAir);
router.get("/shows/top-rated", showController.topRatedShows);
router.get("/shows/all", showController.allShows);

// user routes

//get routes
router.post("/signup", userController.register);
router.get("/login", userController.login);

module.exports = router;
