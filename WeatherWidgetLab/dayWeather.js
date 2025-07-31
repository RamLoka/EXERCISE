const apiKey = '51c2e657ee753a995346be1ff2ce8868';

function getTodayWeather() {
const city = document.getElementById('cityInput').value.trim();
const display = document.getElementById('weatherDisplay');
display.innerHTML = '<p>Loading...</p>';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
    .then(response => {
    if (!response.ok) throw new Error("City not found");
    return response.json();
    })
    .then(data => {
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const icon = getWeatherIcon(desc);  

    display.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${icon}" alt="${desc}">
        <p>${capitalize(desc)}</p>
        <p>${temp}°F</p>
    `;
    })
    .catch(error => {
    display.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    });
}

function getWeatherIcon(description) {
switch (description.toLowerCase()) {
    case 'clear sky': return 'Images/ClearSkiesImage.jpg';
    case 'few clouds': return 'Images/FewCloudsWeatherImage.jpg';
    case 'scattered clouds': return 'Images/FewCloudsWeatherImage.jpg';
    case 'broken clouds': return 'Images/FewCloudsWeatherImage.jpg';
    case 'overcast clouds': return 'Images/OverCastCloudsWeatherImage.jpg';
    case 'rain': return 'Images/rainweatherimage.jpg';
    case 'light rain': return 'Images/rainweatherimage.jpg';
    case 'moderate rain': return 'Images/ModerateRainWeatherImage.jpg';
    case 'shower rain': return 'Images/ShowerRainWeatherImage.jpg';
    case 'drizzle': return 'Images/DrizzleWeatherImage.jpg';
    case 'thunderstorm': return 'Images/ThunderStormWeatherImage.jpg';
    case 'snow': return 'Images/snowweatherimage.jpg';
    case 'light snow': return 'Images/LightSnowWeatherImage.jpg';
    case 'mist': return 'Images/MistWeatherImage.jpg';
    case 'smoke': return 'Images/SmokeWeatherImage.png';
    case 'haze': return 'Images/HazeWeatherImage.webp';
    default: return 'Images/sunnyweatherimage.webp'; 
}
}


function capitalize(str) {
return str.replace(/\b\w/g, char => char.toUpperCase());
}
