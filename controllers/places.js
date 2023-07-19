const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.get("/new", (req, res) => {
  res.render("places/new")
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render("error404")
  }
  else if (!places[id]) {
      res.render("error404")
  }
  else {
    res.send('GET edit form stub')
  }
})

router.put("/:id", (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render("error404")
  }
  else if (!places[id]) {
      res.render("error404")
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = "http://placekitten.com/400/400"
      }
      if (!req.body.city) {
          req.body.city = "Anytown"
      }
      if (!req.body.state) {
          req.body.state = "USA"
      }
      if (!req.body.established) {
        req.body.established = "2099"
      }
      // Save the new data into places[id]
      places[id] = req.body
      res.send('PUT /places/:id')
  }
})

router.delete("/:id", (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render("error404")
  }
  else if (!places[id]) {
    res.render("error404")
  }
  else {
    places.splice(id, 1)
    res.send("DELETE /places/:id stub")
  }
})

module.exports = router;