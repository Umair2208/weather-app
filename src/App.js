import logo from "./logo.svg";
import "./App.css";
import { WeatherUi } from "./weatherApp";
import { useEffect, useState } from "react";

function App() {
  const [city1, setCity] = useState("Mumbai");
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  console.log("From App", weatherData);

  function inputHandler(e) {
    setInputValue(e.target.value);
  }

  function addHandler() {
    if (inputValue === "") {
      alert("Please type something");
    } else {
      setCity(inputValue.toLowerCase());
      setInputValue("");
    }
  }

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=da5d9ee6369049959ae112934240508&q=${city1}&aqi=no`
    )
      .then((data) => {
        return data.json();
      })
      .then((resp) => {
        if (resp.location) {
          setWeatherData(resp);
        } else {
          alert("Invalid City");
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, [city1]);
  // console.log(weatherData?.current?.wind_kph);

  return (
    <div className="grid-container">
      <div className="grid-child1 row bg-light py-md-5 py-4">
        <div className="grid2 text-start row mx-auto">
          <input
            onChange={inputHandler}
            placeholder="Enter City"
            value={inputValue}
            className="fetchInput col-md-9 col bg-light py-md-3 "
          />
          <div className="text-start col-md col-4 mx-auto">
            <button className="btn btn-dark btn1 py-md-3 " onClick={addHandler}>
              Search
            </button>
          </div>
        </div>
        <WeatherUi
          {...weatherData}
          air_quality={["good", "poor", "excellent"]}
        />
      </div>
    </div>
  );
}

export default App;
