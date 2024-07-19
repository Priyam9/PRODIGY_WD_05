document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '7220795a16fe47b33220af55d24dba70';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').textContent = data.name;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('weatherDescription').textContent = `Description: ${data.weather[0].description}`;
            } else {
                document.getElementById('cityName').textContent = 'City not found';
                document.getElementById('temperature').textContent = '';
                document.getElementById('weatherDescription').textContent = '';
            }
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});
