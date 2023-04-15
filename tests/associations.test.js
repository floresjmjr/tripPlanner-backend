const User = require('../db/models/User');
const Itinerary = require('../db/models/Itinerary');
const db = require('../db/configuration');
require('../db/associations')

describe('test user relationship with itineraries', () => {
  beforeAll(async () => {
    await db.sync({force: true});
  });

  test('user has itineraries', async () => {
    //Create data and associations
    const user_data = {
      firstName: 'Jorge',
      lastName: 'Flores',
      email: 'jorge@wanderbranch.com',
      password: '123456',
    };
    const seq_user = await User.create(user_data);
    const itinerary_data = {location: 'Japan'}
    const seq_itinerary = await Itinerary.create(itinerary_data);
    await seq_user.addItinerary(seq_itinerary)
    const seq_itineraries = await seq_user.getItineraries()

    // Tests
    expect(seq_itineraries.length).toBe(1)
    expect(seq_itineraries[0].location).toBe('Japan')
  })
});
