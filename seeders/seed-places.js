const db = require('../models')

db.Place.create([{
    name: 'Pho-Getta-Boutit',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Vietnamese, Pan-Asian',
    pic: '/images/lizaPooor.jpeg',
    founded: 1989
}, {
    name: 'The O-Curry-ence',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Indian',
    pic: '/images/amiraliMirha.jpeg',
    founded: 2020
}])
    .then(() => {
        console.log('Success!')
        process.exit()
    })
    .catch(err => {
        console.log('Failure!', err)
        process.exit()
    })
