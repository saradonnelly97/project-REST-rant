const React = require('react')

function Def (html) {
    return (
        <html>
<head>
        <title>{html.title}</title>
        <link rel="icon" type="image/png" href="favicons/wine.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        ></link>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
            <body>
            <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/places">Places</a>
            </li>
            <li>
              <a href="/places/new">Add Place</a>
            </li>
          </ul>
        </nav>
                <div id="root">{html.children}</div>
                <div className="footer">
                    
                    there should be a footer here
                </div>
            </body>
        </html>
    )
}

module.exports = Def
