import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherBtn from './WeatherBtn';

const WeatherApp = () => {
  const [coord, setCoord] = useState();
  const [weather, setWeather] = useState();
  const [fahrenheit, setFahrenheit] = useState(false);

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    // if (coord != undefined) {
    //   getApi();
    // }
  }, [coord]);

  function success(crd) {
    console.log(crd);
    let latitude = crd.coords.latitude;
    let longitude = crd.coords.longitude;

    setCoord({ latitude, longitude });
  }

  const getApi = () => {
    const key = '4214c6fe0c0be71f13084263dd5761b1';
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coord?.latitude}&lon=${coord?.longitude}&units=metric&appid=${key}`
      )
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch((error) => console.log(error));
  };

  const convertDegrees = () => {
    setFahrenheit(!fahrenheit);
  };

  const convert = () => {
    let fahrenheitValue = (9 / 5) * weather?.main.temp + 32;
    return fahrenheitValue;
  };
  // console.log(weather);

  return (
    <div className="container wheather-app_container">
      {
        // weather ? (
        <div className="card">
          <div className="card-body">
            <h2>Weather App</h2>
            <h2 className="card-title p-2">
              {weather?.name}, {weather?.sys.country}
            </h2>
            <div className="row">
              <div className="col-sm-5 p-2">
                <img
                  src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
                  alt=""
                  className="img-fluid"
                />
                <h3>
                  {fahrenheit
                    ? `${convert().toFixed(2)} °F`
                    : `${weather?.main.temp} °C`}
                </h3>
              </div>
              <div className="col-sm-7 text-center text-sm-start p-2">
                <h3 className="text-center">
                  "{weather?.weather[0].description}"
                </h3>
                <h3>
                  <i className="fa-solid fa-wind"></i>Wind speed{' '}
                  <b>{weather?.wind.speed} m/s</b>
                </h3>
                <h3>
                  <i className="fa-solid fa-cloud"></i>Clouds{' '}
                  <b>{weather?.clouds.all}%</b>
                </h3>
                <h3>
                  <i className="fa-solid fa-temperature-half"></i>Pressure{' '}
                  <b>{weather?.main.pressure}mb</b>
                </h3>
              </div>
            </div>
            <WeatherBtn convertDegrees={convertDegrees} />
          </div>
        </div>
        // )
        // : (
        //   <div className="spinner-border" role="status">
        //     <span className="visually-hidden">Loading...</span>
        //   </div>
        // )
      }
    </div>
  );
};

export default WeatherApp;
