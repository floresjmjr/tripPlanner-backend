const router = require('express').Router();
const User = require('../db/models/User')

router.get('/', async(req, res)=> {
  const user = await User.findOne()
  try {
    const all_itineraries = await user.getItineraries()
    return res.send(all_itineraries)
  } catch (error) {
    return res.send(error)
  }
})


module.exports = router