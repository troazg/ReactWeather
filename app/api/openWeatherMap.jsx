var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=216a3c2670935221b42c5f5918e2f441&units=imperial';

// 216a3c2670935221b42c5f5918e2f441

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return {
          temp: res.data.main.temp,
          location: res.data.name
        };
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
