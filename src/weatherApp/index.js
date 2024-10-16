import React from "react";

export const WeatherUi = (weatherData) => {
  if (weatherData?.current?.precip_mm > 0 && weatherData?.current?.temp_c > 5) {
    document.body.style.backgroundImage =
      'url("https://wallpapers.com/images/hd/rain-4k-1id1z53kkpeknf2r.jpg")';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (
    weatherData?.current?.precip_mm > 0 &&
    weatherData?.current?.temp_c <= 5
  ) {
    document.body.style.backgroundImage =
      'url("https://wallpapers.com/images/hd/snow-4k-51o4t1et4nibxaoh.jpg")';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (weatherData?.current?.condition?.text === "Sunny") {
    document.body.style.backgroundImage =
      'url("https://wallpapercave.com/wp/wp8384034.jpg")';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  console.log(weatherData?.current?.condition?.text);

  return (
    <>
      <div className="col-md-6 row pt-3 mx-auto">
        <img
          src={weatherData?.current?.condition?.icon}
          className="col-md-2  img1 mt-md-4"
        />
        <h1 className="hh1 col-md col my-auto">
          {weatherData?.current?.temp_c}
          <p className="pp1 fw-normal">
            RealFeel : {weatherData?.current?.feelslike_c}
          </p>
        </h1>
      </div>
      <div className="col-md-6 pt-md-3">
        <table class="table bg-light">
          <tbody>
            <tr>
              {/* <td className=""></td> */}
              <th className="bg-light text- th1">
                {weatherData?.location?.name}
              </th>
            </tr>
            <tr>
              <td className="bg-light">Region</td>
              <th className="bg-light text-end  ">
                {weatherData?.location?.region}
              </th>
            </tr>
            <tr>
              <td className="bg-light">Wind speed</td>
              <th className="bg-light text-end  ">
                {weatherData?.current?.wind_kph}
              </th>
            </tr>
            <tr>
              <td className="bg-light">Wind gust</td>
              <th className="bg-light text-end  ">
                {weatherData?.current?.gust_kph}
              </th>
            </tr>
            <tr>
              <td className="bg-light">Wind quality</td>
              {weatherData?.current?.gust_kph < 10 ? (
                <th className="bg-light text-end  ">
                  {weatherData?.air_quality[1]}
                </th>
              ) : weatherData?.current?.gust_kph > 11 ? (
                <th className="bg-light text-end  ">
                  {weatherData?.air_quality[2]}
                </th>
              ) : (
                <th className="bg-light text-end  ">
                  {weatherData?.air_quality[0]}
                </th>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
