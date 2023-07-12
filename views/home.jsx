const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
           <main>
    <h1>Rest-RANT</h1>
    <div>
      <img src="../images/onigiricheese.jpeg" alt="Cheesecake" />
      <div>
        Photo by <a href="https://unsplash.com/@fukayamamo">おにぎり (Onigiri)</a> on <a href="https://unsplash.com/photos/UWQepYM0kLU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn btn-danger btn-lg">RANT ABOUT IT BABY!!</button><button className="btn btn-danger btn-lg">RANT ABOUT IT BABY!!</button><button className="btn btn-danger btn-lg">RANT ABOUT IT BABY!!</button><button className="btn btn-danger btn-lg">RANT ABOUT IT BABY!!</button>
        </a>
        <footer>please for the love of god style me, sara. please.</footer>
</main>

        </Def>
    )
}

module.exports = home
