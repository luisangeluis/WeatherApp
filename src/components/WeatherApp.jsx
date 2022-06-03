import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
    getApi(coord);
  }, []);

  let coord = {
    latitude: 1,
    longitude: 1,
  };

  function success(crd) {
    console.log(crd);
    coord.latitude = crd.coords.latitude;
    coord.longitude = crd.coords.latitude;
    console.log(crd.coords.latitude);
    console.log(crd.coords.latitude);
  }

  const getApi = (coord) => {
    const key = '4214c6fe0c0be71f13084263dd5761b1';
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat={${coord.latitude}}&lon={${coord.longitude}}&appid={${key}}`
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
