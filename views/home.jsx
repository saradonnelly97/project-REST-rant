const React = require('react');
const Def = require('./default');

function home() {
  return (
    <Def>
      <main>
        <div>
          <img src="../images/dickBell.jpeg" alt="An editorial photo featuring many different Korean dishes in various take out bins." />
          <div>
            Photo by <a href="https://unsplash.com/@maplerockdesign">Richard Bell</a> on <a href="https://unsplash.com/photos/UWQepYM0kLU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <div className="philosophy-container">
          <div className="philosophy">
            <h2><i>Tell It How It Is</i></h2>
            <p>And don't be scared!</p>
            <p>Rest-RANT is a safe space where you can tell the world how you would rate other restaurants in the United States. Add a little blurb about the food and your overall experience there while you're at it! We're all ears! (Unlike your closest family) Was it the BEST Chinese food you've ever had? Did your server spit in your food but it actually added flavor?? Whatever happened, however it tasted, WE NEED TO KNOW.</p>
            <a href="/places">
            <button className="btn btn-danger btn-lg">RANT ABOUT IT BABY!!</button>
          </a>
          </div>
        </div>

        <div className="articles">
          <div className="articleOne">
            <img className="articleOneImage" src="/images/annieSpratt.jpeg" alt="Article One" />
            <div className="container">
              <h4>inserting some words</h4>
              <p>inserting some words here because reasons...</p>
            </div>
          </div>

          <div className="articleTwo">
            <img className="articleTwoImage" src="/images/annieSpratt2.jpeg" alt="Article Two" />
            <div className="container">
              <h4>inserting some words</h4>
              <p>inserting some words here because reasons...</p>
            </div>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = home;
