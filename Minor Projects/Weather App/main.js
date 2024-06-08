const URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=";
const apiKey = "511d17f92b7b55b17c8303044031015b";

const btn = document.getElementById("searchbtn");
const weather = document.getElementById("weather");
const city = document.getElementById("input-city");
const weatherImage = document.getElementById("wether-image");
console.log(weatherImage)
async function getWeather() {
    try {
        let city = document.getElementById("input-city").value;
        if (city == "") {
            window.alert("Please enter a valid city name");
            return;
        } else {
            weather.classList.remove("hidden");
            const response = await fetch(`${URL}${apiKey}&q=${city}`);
            if (response.status >= 400) {
                throw new Error("Enter a valid city name");
            }
            let data = await response.json();
            console.log(data);
            const cityname = document.getElementById("city-name");
            const citytemp = document.getElementById("temp");
            const huimidity = document.getElementById("humidity");
            const windspeed = document.getElementById("windspeed");
            cityname.innerHTML = await city.toUpperCase();
            citytemp.innerText = await Math.round(data.main.temp) + "°C";
            huimidity.innerText = await `${data.main.humidity}%`;
            windspeed.innerText = await `${data.wind.speed}km/h`;
            if (data.weather[0].main == "Clouds") {
                weatherImage.src = "./images/clouds.png"
            } else if (data.weather[0].main == "Rain") {
                weatherImage.src = "./images/rain.png"
            } else if (data.weather[0].main == "Clear") {
                weatherImage.src = "./images/clear.png"
            } else if (data.weather[0].main == "Drizzle") {
                weatherImage.src = "./images/drizzle.png"
            } else if (data.weather[0].main == "Mist") {
                weatherImage.src = "./images/mist.png"
            } else if (data.weather[0].main == "Haze") {
                weatherImage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.softicons.com%2Fdownload%2Fweb-icons%2Fandroid-weather-icons-by-bharath-prabhuswamy%2Fpng%2F512x512%2FHaze.png&f=1&nofb=1&ipt=6e2540ba59fadf1c310c83d6a861cb9d9206eca01e826d4f4e34e3717bb7e12b&ipo=images"
            }
        }
    } catch (e) {
        alert(e.message);
        return;
    }
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    getWeather();
});

city.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        getWeather();
    }
})