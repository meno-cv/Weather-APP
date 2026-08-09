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

// Search weather
function btnSearchOnAction() {

    let city = document.getElementById("txtSearch").value;

    if (city.trim() === "") {
        document.getElementById("contentSection").innerHTML = `
            <p class="error">
                Please enter a city name.
            </p>
        `;
        return;
    }

    document.getElementById("contentSection").innerHTML = `
        <p class="loading">Searching...</p>
    `;

    fetch(`${baseUrl}/current.json?key=${apiKey}&q=${city}`)
        .then(res => res.json())
        .then(data => {

            console.log(data);

            if (data.error) {
                document.getElementById("contentSection").innerHTML = `
                    <p class="error">
                        ${data.error.message}
                    </p>
                `;
                return;
            }

            displayWeather(data);

        })
        .catch(error => {

            console.error(error);

            document.getElementById("contentSection").innerHTML = `
                <p class="error">
                    Something went wrong. Please try again.
                </p>
            `;

        });
}

// Load default weather
function loadDefaultWeather() {

    fetch(`${baseUrl}/current.json?key=${apiKey}&q=Panadura`)
        .then(res => res.json())
        .then(data => {

            console.log(data);

            if (!data.error) {
                displayWeather(data);
            }

        })
        .catch(error => {
            console.error(error);
        });
}

loadDefaultWeather();







