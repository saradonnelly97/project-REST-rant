const React = require("react")
const Def = require("../default")

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
    <Def title="Restaurant Details">
      <main>
        <div className="row flex-column flex-md-row">
          <div className="col-md-4 p">
          <img src={data.place.pic} alt={data.place.name} />
            <h3>Located in {data.place.city}, {data.place.state}</h3>
          </div>
          <div className="col-md-8">
            <h1>{data.place.name}</h1>
            <h2 className="mb-4">Rating</h2>
            <p className="show">Not Rated </p>
            <h2 className="mb-4">Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
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
        <h2>Comments</h2>
        {comments}
      </main>
    </Def>
  )
}

module.exports = show