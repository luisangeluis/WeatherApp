import { useState } from 'react';
import './App.css';
import WeatherApp from './components/WeatherApp';
import clima from './clima.png';

function App() {
  const [count, setCount] = useState(0);
  console.log(clima);
  return (
    <div
      className="App"
      style={{
        backgroundImage: 'url("' + clima + '")',
        // backgroundColor: 'red',
      }}
    >
      <img src={clima} alt="clima" />
      <div className="weather-app">
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;
