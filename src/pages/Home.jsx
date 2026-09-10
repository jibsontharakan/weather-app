import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCloudSunRain } from "react-icons/fa6";

function Home() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const searchWeather = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "City not found");
      }

      navigate("/weather", {
        state: {
          weather: data,
        },
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="home">
      <div className="weather-container">

        <div className="weather-content">
          <p className="small-title text-success">WEATHER APP</p>

          <h1>
            Check the weather
            <br />
            <span className="text-success">anywhere in the world</span>
          </h1>

          <p className="description">
            Enter a city name to get the latest weather information,
            temperature, humidity and wind details.
          </p>

          <form onSubmit={searchWeather} className="search-form">
            <input
              type="text"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <button type="submit" disabled={loading} className="text-light bg-success">
              {loading ? "Searching..." : "Search"}
            </button>
          </form>

          {error && <p className="error">{error}</p>}
        </div>

        <div className="weather-icon">
          <FaCloudSunRain className="text-primary"/>
        </div>

      </div>
    </main>
  );
}

export default Home;