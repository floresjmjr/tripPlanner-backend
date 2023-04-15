const db = require('./configuration')
const User = require('./models/User')
const Flight = require('./models/Flight')
const Itinerary = require('./models/Itinerary')

User.hasMany(Itinerary)
Itinerary.belongsTo(User)
Itinerary.hasMany(Flight)
Flight.belongsTo(Itinerary)

module.exports = { db, User, Itinerary, Flight };