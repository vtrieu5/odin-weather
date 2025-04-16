export async function weatherAPI(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=5ZWEHG4ENKD487NUPFU4DR9HP`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    clearPage();
    const content = document.querySelector("#content");
    const weatherDiv = document.createElement("div");
    weatherDiv.classList.add("weather");
    const weatherCity = document.createElement("h1");
    weatherCity.innerText = `${city}`;
    const weatherText = document.createElement("p");
    weatherText.innerText = `Temperature: ${weatherData.currentConditions.temp} °C
    Feels like: ${weatherData.currentConditions.feelslike} °C
    Conditions: ${weatherData.currentConditions.conditions} 
    Humidity: ${weatherData.currentConditions.humidity} %
    UV Index: ${weatherData.currentConditions.uvindex}`;
    weatherDiv.appendChild(weatherCity);
    weatherDiv.appendChild(weatherText);
    content.appendChild(weatherDiv);
  } catch (error) {
    window.alert(
      "City not found. Please try again with a different city name."
    );
  }
}

export function clearPage() {
  document.querySelector("#content").innerHTML = "";
}

// {"datetime":"11:25:00",
// "datetimeEpoch":1744824300,
// "temp":4.7,
// "feelslike":1.1,
// "humidity":48.9,
// "dew":-5.2,
// "precip":0,
// "precipprob":0,
// "snow":0,
// "snowdepth":0,
// "preciptype":null,
// "windgust":28.4,
// "windspeed":16.4,
// "winddir":299,
// "pressure":1017,
// "visibility":24,
// "cloudcover":88,
// "solarradiation":198,
// "solarenergy":0.7,
// "uvindex":2,
// "conditions":"Partially cloudy",
// "icon":"partly-cloudy-day",
// "stations":["F6211","AV337","CYED","CXEC","AU867"],
// "source":"obs",
// "sunrise":"06:30:41",
// "sunriseEpoch":1744806641,
// "sunset":"20:37:53",
// "sunsetEpoch":1744857473,
// "moonphase":0.63}
