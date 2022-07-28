import { useEffect, useRef, useState } from 'react';
import './App.css';
import WeatherApp from './components/WeatherApp';

function App() {
  const app = useRef(null);
  const [mainBg, setMainBg] = useState();

  const imagesClima = {
    clear_sky:
      'https://cdn.jsdelivr.net/gh/luisangeluis/WeatherApp@master/src/clear.webp',
    few_clouds:
      'https://airstudiopaducah.files.wordpress.com/2013/07/bright-blue-sky-with-a-few-tiny-white-clouds-e1380556952793.jpg?w=810',
    scattered_clouds:
      'https://img.freepik.com/premium-photo/vivid-blue-sky-with-white-scattered-clouds_76000-7220.jpg?w=1000',
    broken_clouds:
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/broken-clouds-darrell-maciver.jpg',
    shower_rain:
      'https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/images/weather/learn-about/weather/rain-storm.jpg',
    rain: 'https://image.shutterstock.com/image-photo/heavy-rain-tree-parking-260nw-681346432.jpg',
    thunderstorm:
      'https://www.rescueairtx.com/images/blog/png-base64dd1fe11ef962dc81.png',
    snow: 'https://www.collinsdictionary.com/images/full/snow_306991961.jpg',
    mist: 'https://res.cloudinary.com/dtpgi0zck/image/upload/s--f6RuTVBB--/c_fit,h_580,w_860/v1/EducationHub/photos/blue-mist.jpg',
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
      style={{ backgroundImage: `url('${imagesClima[mainBg]}')` }}
      // style={{ backgroundImage:`url(./src/mist.jpg)` }}
    >
      <div className="weather-app">
        <WeatherApp setMainBg={setMainBg} />
      </div>
    </div>
  );
}

export default App;
