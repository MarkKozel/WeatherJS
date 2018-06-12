class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');

        this.forecastLink = document.getElementById("forecast-link");

        this.l_geo = document.getElementById('l-geo');
        this.l_station = document.getElementById('l-station');
        this.l_el = document.getElementById('l-el');
        this.more_info_obsTime = document.getElementById('more-info-obsTime');
        this.more_info_wind = document.getElementById('more-info-wind');
        this.more_info_pd = document.getElementById('more-info-pd');
    }

    paint(weather) {
        this.location.textContent = weather.display_location.full;
        this.desc.textContent = weather.weather;
        this.string.textContent = weather.temperature_string;
        this.icon.setAttribute('src', weather.icon_url);
        this.humidity.innerHTML = `<b>Relative Humidity:</b> ${weather.relative_humidity}`;
        this.feelsLike.innerHTML = `<b>Feels Like:</b> ${weather.feelslike_string}`;
        this.dewpoint.innerHTML = `<b>DewPoint:</b> ${weather.dewpoint_string}`;
        this.wind.innerHTML = `<b>Wind:</b> ${weather.wind_string}`;
        this.l_geo.innerHTML = `<b>Geocoordinates:</b><br> (${weather.observation_location.latitude} ,${weather.observation_location.longitude})`;

        this.forecastLink.href = weather.forecast_url;

        this.l_station.innerHTML = `<b>Weather Station:</b><br> ${weather.observation_location.city} (ID ${weather.station_id})`;
        this.l_el.innerHTML = `<b>Elevation:</b><br> ${weather.observation_location.elevation}`;

        this.more_info_obsTime.innerHTML = `<b>Observation Time (local):</b><br> ${weather.observation_time}`;
        this.more_info_wind.innerHTML = `<b>Wind:</b><br> ${weather.wind_dir} at ${weather.wind_mph} MPH`;
        this.more_info_pd.innerHTML = `<b>Pressure/Dewpoint:</b><br> ${weather.pressure_mb} MB<br>${weather.dewpoint_string}`;

    }
}