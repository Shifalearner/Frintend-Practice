const apiKey = 'a51e86d1fd914adba2f07a8b5333c9cd'; // Your OpenWeatherMap API key

function searchWeather() {
    const searchInput = document.getElementById('searchInput').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('City not found. Please check the spelling or try another city.');
                } else {
                    throw new Error('Error fetching data');
                }
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert(error.message); // Display the specific error message
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');

    const cityName = data.name;
    const temperature = data.main?.temp;
    const description = data.weather[0]?.description;
    const iconCode = data.weather[0]?.icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

    weatherInfo.innerHTML = `
        <h2>${cityName}</h2>
        <img src="${iconUrl}" alt="${description}">
        <p>${description}</p>
        <p>Temperature: ${temperature}°C</p>
    `;
}
