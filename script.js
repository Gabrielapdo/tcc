const apikey = '94748b101feed1cd8d798f7468662b51';
const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const weatherInfo = document.getElementById("weather-info");

searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherData(city);
    } else {
        displayError('Digite o nome de uma cidade.');
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apikey}&lang=pt_br&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Cidade não encontrada');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        displayError(error.message);
    }
}

function displayWeather(data) {
    const { name, main, weather, wind } = data;

    weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Condição:</strong> ${weather[0].description}</p>
        <p><strong>Temperatura:</strong> ${main.temp}°C</p>
        <p><strong>Umidade:</strong> ${main.humidity}%</p>
        <p><strong>Vento:</strong> ${wind.speed} km/h</p>
    `;
}

function displayError(message) {
    weatherInfo.innerHTML = `<p style="color: red;">${message}</p>`;
}
