const router = require('express').Router();
const User = require('../db/models/User')
const Itinerary = require('../db/models/Itinerary')

router.post('/', async (req, res)=> {
  console.log(req.body)
  const itinerary_obj = {}
  location = req.body.location
  startDate = req.body.startDate
  endDate = req.body.endDate
  if(location) itinerary_obj['location'] = location
  if(startDate) itinerary_obj['startDate'] = startDate
  if(endDate) itinerary_obj['endDate'] = endDate
  try {
    const user = await User.findOne()
    try {
      const itinerary_instance = await Itinerary.create(itinerary_obj)
      try {
        const result = await user.addItinerary(itinerary_instance)
        return res.redirect(process.env.CLIENT_BASE_URL)
      } catch (error) {
        return res.send(error)
      }
    } catch (error) {
      return res.send(error)
    }

  } catch (error) {}
})

module.exports = router