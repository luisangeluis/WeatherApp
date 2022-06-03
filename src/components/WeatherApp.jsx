import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [coord, setCoord] = useState();
  const [weather, setWeather] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
    getApi();
  }, []);

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
        `https://api.openweathermap.org/data/2.5/weather?lat=${coord?.latitude}&lon=${coord?.longitude}&exclude=hourly&appid=${key}`
      )
      .then((res) => {
        console.log(res.data);
        // setWeather(res.data);
      })
      .catch((error) => console.log(error));
  };

  console.log(coord);
  return (
    <>
      <div className="card">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{weather?.name}</h5>
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
