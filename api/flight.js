const router = require('express').Router();

router.post('/plan', async(req, res)=> {
  console.log('request body', req.body)
  res.send('Works')
})

module.exports = router