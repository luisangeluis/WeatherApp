import { useState } from 'react';
import './App.css';
import WeatherApp from './components/WeatherApp';
import log from './logo.svg';
import clima from './clima.png';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App" style={{ backgroundImage: `url(${clima})` }}>
      <div className="weather-app">
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;
