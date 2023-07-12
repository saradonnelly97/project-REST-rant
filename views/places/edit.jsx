const React = require('react')
const Def = require('../default')

function edit (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES EDIT PAGE</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }

module.exports = edit