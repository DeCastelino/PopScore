const router = require("express").Router();
const movieController = require("../controller/movieController");

//get routes
router.get("/getMovieByID", movieController.getMovieByID);

module.exports = router;
