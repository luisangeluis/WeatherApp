import { useState } from 'react';
import './App.css';
import WeatherApp from './components/WeatherApp';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="weather-app">
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;
