const apiKey = "fa66d55bfb24497380e85722243011";
const baseUrl = "http://api.weatherapi.com/v1";


function displayWeather(data) { // Display weather info

    document.getElementById("contentSection").innerHTML = `

        <div class="weather-info">

            <img 
                class="weather-icon"
                src="https:${data.current.condition.icon}" 
                alt="${data.current.condition.text}"
            >

            <h2>${data.location.name}</h2>

            <p class="country">
                ${data.location.country}
            </p>

            <div class="temperature">
                ${data.current.temp_c}°C
            </div>

            <p class="condition">
                ${data.current.condition.text}
            </p>

        </div>

    `;
}




