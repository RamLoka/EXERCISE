const apiKey = '51c2e657ee753a995346be1ff2ce8868';

function getForecast() {
const city = document.getElementById('cityInputForecast').value.trim();
const display = document.getElementById('forecastDisplay');
display.innerHTML = '<p>Loading forecast...</p>';

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`)
    .then(response => {
    if (!response.ok) throw new Error("City not found");
    return response.json();
    })
    .then(data => {
    const forecast = data.list;
    const dailyData = forecast.filter(item => item.dt_txt.includes('12:00:00'));
    display.innerHTML = '';

    dailyData.forEach(day => {
        const date = new Date(day.dt_txt).toLocaleDateString();
        const temp = day.main.temp;
        const desc = day.weather[0].description;
        const icon = getWeatherIcon(desc);  

        const dayHTML = `
        <div class="forecast-day">
            <h3>${date}</h3>
            <img src="${icon}" alt="${desc}">
            <p>${capitalize(desc)}</p>
            <p>${temp}°F</p>
        </div>
        `;
        display.innerHTML += dayHTML;
    });
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
