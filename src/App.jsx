import { useEffect, useRef, useState } from 'react';
import './App.css';
import WeatherApp from './components/WeatherApp';

function App() {
  const app = useRef(null);
  const [mainBg, setMainBg] = useState();

  const imagesClima = {
    clear_sky: 'clear.webp',
    few_clouds: 'few.webp',
    scattered_clouds: 'scattered.jpg',
    broken_clouds: 'broken.jpg',
    shower_rain: 'shower.jpg',
    rain: 'rain.jpg',
    thunderstorm: 'thunder.jpg',
    snow: 'snow.jpg',
    mist: 'mist.jpg',
  };

  const setBg = (bg) => {
    // let currentBg = '';
    // for (let clave in imagesClima) {
    //   if (imagesClima[clave] === bg) {
    //     currentBg = imagesClima[clave].value;
    //   }
    // }
    // console.log(currentBg);
    // setMainBg(currentBg);
  };

  useEffect(() => {
    // if (mainBg) {
    //   console.log(mainBg);
    //   setBg(mainBg);
    // }
  }, []);

  console.log(mainBg);
  return (
    <div
      className="App"
      ref={app}
      style={{ backgroundImage: `url('./${imagesClima[mainBg]}')` }}
      // style={{ backgroundImage:`url(./src/mist.jpg)` }}
    >
      <div className="weather-app">
        <WeatherApp setMainBg={setMainBg} />
      </div>
    </div>
  );
}

export default App;
