const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
      <img src="../images/404error.gif" alt="404: Page Not Found" />
      <div>
        illustrated by sara
      </div>
              <p>Oops, sorry man; we couldn't find that page for ya. Try again.</p>

          </main>
      </Def>
    )
  }  

module.exports = error404
