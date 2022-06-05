import { useState } from 'react';
import './App.css';
import WeatherApp from './components/WeatherApp';
import clima from './assets/images/clima.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ background:`url(${clima}) no-repeat`,backgroundSize:'cover'}}>
      <div className="weather-app">
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;
