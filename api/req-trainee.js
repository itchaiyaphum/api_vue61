const express = require('express')
const router = express.Router()

module.exports = router


router.get('/', function (req, res) {

})

//     /req/trainee/about

router.get('/about', function (req, res) {
  res.send('About birds')
})

