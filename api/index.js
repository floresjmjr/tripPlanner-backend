const router = require("express").Router();

router.use("/", require("./home"));
router.use("/itinerary", require("./itinerary"));
router.use("/itineraries", require("./itineraries"));
router.use("/", require("./flight"));
router.use("/", require("./lodging"));
router.use("/", require("./budget"));
router.use("/", require("./eat"));


//When no method and/or path matches, returns 404
router.use((req, res) => {
  res
    .status(404)
    .send(
      `Sorry, the "${req.method}" method to the path "${req.path}" is not a valid, please change the either the request, path or both.`
    );
  //Ideally a cool 404 page would be rendered
});
//Error handling function
router.use((err, req, res, next) => {
  console.error(`Start of Error:\n ${err} \nEnd of Error`);
  res.status(500).send("Server error, please try again or at some other time.");
  //Ideally a cool 500 page would be rendered
});


module.exports = router;
