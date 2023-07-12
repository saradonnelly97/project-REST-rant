const router = require('express').Router()

// More code here in a moment
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/fukuBGA.jpeg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/fukuBGB.jpeg'
      }]

    res.render('places/index', { places })
})

module.exports = router