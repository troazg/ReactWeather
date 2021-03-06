var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About:</h1>
      <p>This simple weather app was built on React and uses Foundation
        for styling.</p>
      <p>Here you can find some of the tools I used for this project.</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> -
            The JavaScript framework used.
        </li>
        <li>
          <a href="http://foundation.zurb.com/">Foundation</a> -
            The front-end framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> -
            The Open Weather Map API was used for weather information.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
