const React = require("react")
const Def = require("../default")

function show(data) {
  return (
    <Def title="Restaurant Details">
      <head>
        <link rel="icon" type="image/png" href="favicons/wine.png" />
      </head>
      <main>
        <div className="row flex-column flex-md-row">
          <div className="col-md-4 p">
            <img
              src={data.place.pic}
              alt={data.place.name}
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h1>{data.place.name}</h1>
            <h2 className="mb-4">Rating</h2>
            <p className="show">Not Rated </p>
            <h2 className="mb-4">Description</h2>
            <p className="show">
            {data.place.name} has been serving {data.place.cuisines} in {data.place.city}, {data.place.state} since {data.place.established}.
            </p>
          </div>
        </div>
        <div className="edits">
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            EDIT
          </a>
          <form
            method="POST"
            action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              DELETE
            </button>
          </form>
        </div>
      </main>
    </Def>
  )
}

module.exports = show