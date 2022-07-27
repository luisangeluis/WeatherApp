import { useEffect, useRef, useState } from 'react';
import './App.css';
import WeatherApp from './components/WeatherApp';

function App() {
  const app = useRef(null);
  const [mainBg, setMainBg] = useState();

  const imagesClima = {
    clear_sky: 'clear',
    few_clouds: 'few',
    scattered_clouds: 'scattered',
    broken_clouds: 'broken',
    shower_rain: 'shower',
    rain: 'rain',
    thunderstorm: 'thunderstorm',
    snow: 'snow',
    mist: 'mist',
  };

  const setBg = (bg) => {
    let currentBg = '';
    for (let clave in imagesClima) {
      if (imagesClima[clave] === bg) {
        currentBg = imagesClima[clave];
      }
    }
    console.log(currentBg);
    setMainBg(currentBg);
  };

  useEffect(() => {
    if (mainBg) {
      console.log(mainBg);
      setBg(mainBg);
    }
  }, [mainBg]);

  console.log(mainBg);
  return (
    <div
      className="App"
      ref={app}
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <div className="weather-app">
        <WeatherApp setMainBg={setMainBg} />
      </div>
    </div>
  );
}

export default App;
