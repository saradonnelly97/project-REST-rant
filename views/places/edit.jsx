const React = require("react")
const Def = require("../default.jsx")

function edit_form(data) {
  return (
    <Def title="Edit Restaurant">
      <main>
        <h1>Edit Restaurant</h1>
        <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">Restaurant Name</label>
              <input className="form-control" id="name" name="name" 
              value={data.place.name}
                onChange={(event) => {
                  data.place.name = event.target.value
                }}
                required
              />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="pic">Place Picture</label>
              <input
                className="form-control"
                id="pic"
                name="pic"
                pattern="https?://.+"
                value={data.place.pic}
                onChange={(event) => {
                  data.place.pic = event.target.value
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <div className="form-group">
                <label htmlFor="cuisines">Cuisines</label>
                <input
                  className="form-control"
                  id="cuisines"
                  name="cuisines"
                  value={data.place.cuisines}
                  onChange={(event) => {
                    data.place.cuisines = event.target.value
                  }}
                  required
                />
              </div>
            </div>
            <div className="form-group col-sm-6">
              <div className="form-group">
                <label htmlFor="established">Established</label>
                <input
                  className="form-control"
                  id="established"
                  name="established"
                  pattern="(19|20)\d{2}"
                  title="Please enter a valid year beginning with either 19 or 20"
                  value={data.place.established}
                  onChange={(event) => {
                    data.place.established = event.target.value
                  }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="city">City</label>
              <input
                className="form-control"
                id="city"
                name="city"
                value={data.place.city}
                onChange={(event) => {
                  data.place.city = event.target.value
                }}
              />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="state">State</label>
              <select
                className="form-control"
                id="state"
                name="state"
                value={data.place.state}
                onChange={(event) => {
                  data.place.state = event.target.value
                }}
              >
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </select>
            </div>
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Update Place"
          />
        </form>
      </main>
    </Def>
  )
}

module.exports = edit_form