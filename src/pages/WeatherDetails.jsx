import { useLocation, useNavigate } from "react-router-dom";
import { GiWhirlwind } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsFillCloudsFill } from "react-icons/bs";

function WeatherDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const weather = location.state?.weather;

  if (!weather) {
    return (
      <div className="no-weather">
        <h2>No weather data found</h2>
        <p>Please search for a city from the home page.</p>

        <button onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    );
  }
  return (
    <main className="details-page">
      <div className="details-container">

        <button className="back-btn" onClick={() => navigate("/")}>
          ← Search Another City
        </button>

        <div className="location">
          <h1>{weather.name}</h1>
          <p>{weather.sys.country}</p>
        </div>

        <div className="main-weather">
         
<BsFillCloudsFill />
          <div>
            <h2>{Math.round(weather.main.temp)}°C</h2>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>

        <div className="weather-cards">

          <div className="weather-card">
            <span><FaTemperatureHigh  className="text-danger"/></span>
            <h3>Feels Like</h3>
            <p>{Math.round(weather.main.feels_like)}°C</p>
          </div>

          <div className="weather-card">
            <span><IoIosWater  className="text-primary"/></span>
            <h3>Humidity</h3>
            <p>{weather.main.humidity}%</p>
          </div>

          <div className="weather-card">
            <span><GiWhirlwind className="text-primary"/> </span>
            <h3>Wind Speed</h3>
            <p>{weather.wind.speed} m/s</p>
          </div>

          <div className="weather-card">
            <span><FaTemperatureHigh  className="text-danger"/></span>
            <h3>Pressure</h3>
            <p>{weather.main.pressure} hPa</p>
          </div>

        </div>

        <div className="temperature-info">
          <div>
            <span>Minimum</span>
            <strong>{Math.round(weather.main.temp_min)}°C</strong>
          </div>

          <div>
            <span>Maximum</span>
            <strong>{Math.round(weather.main.temp_max)}°C</strong>
          </div>
        </div>

      </div>
    </main>
  );
}

export default WeatherDetails;
