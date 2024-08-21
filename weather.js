const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");
const location_not_found = document.querySelector(".location-notFound");
const weather_body = document.querySelector(".weather-body");

async function checkWeather(city)
{
    const api_key = "7ee994f5acaaa117a3f64b1fd991470b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const response = await fetch(url);
    const weather_data = await response.json();

    weather_body.style.display="flex";
    location_not_found.style.display="none";

    if(weather_data.cod === '404')
    {
        console.log("error");
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    // else{
    //     weather_body.style.display = "flex";
    // }

    console.log(weather_data);
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/h`;
    // console.log(weather_data);
    switch(weather_data.weather[0].main)
    {
        case 'Clouds' :
            weather_img.src = "cloud.png";
            break;

        case 'Clear' :
            weather_img.src = "clear.png";
            break;
        
        case 'Rain' :
            weather_img.src = "rain.png";
            break;
        
        case 'Snow' :
            weather_img.src = "snow.png";
            break;

        case 'Mist' :
            weather_img.src = "mist.png";
            break;        
    }


}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})