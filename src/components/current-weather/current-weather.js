import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city"> </p>
          <p className="weather-description"></p>
        </div>
        <img className="weather-icon" src="icons/01d.png" alt="weather" />
      </div>
      <div className="bottom">
        <p className="temperature">21°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">18°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">18 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humudity</span>
            <span className="parameter-value">18 %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">18 C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
