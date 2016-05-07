var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <p>It is {temp}&deg; F in {location}.</p>
    </div>
  );
};

module.exports = WeatherMessage;
