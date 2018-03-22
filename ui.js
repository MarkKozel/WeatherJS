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
        this.more_info_pressure = document.getElementById('more-info-pressure');
        this.more_info_visibility = document.getElementById('more-info-visibility');
        this.more_info_yesterday = document.getElementById('more-info-yesterday');
        this.more_info_yesterdayThisTime = document.getElementById('more-info-yesterdayThisTime');

    }

    current(weather) {
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
        this.more_info_wind.innerHTML = `<b>Wind:</b> ${weather.wind_dir} at ${weather.wind_mph} MPH`;
        this.more_info_pressure.innerHTML = `<b>Pressure (curr/trend):</b> ${weather.pressure_mb} MB / ${weather.pressure_trend}`;

        this.more_info_visibility.innerHTML = `<b>Visibility:</b> ${weather.visibility_mi} Mi`;
    }

    yesterday(data) {
            let high = Number.MIN_SAFE_INTEGER;
            let low = Number.MAX_SAFE_INTEGER;
            let thisTimeYesterday = 0;

            var now = new Date();
            // var utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
            //     now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

            let dataArray = 0;

            for (dataArray; dataArray < data.length; dataArray++) {
                if (data[dataArray].tempi > high) {
                    high = data[dataArray].tempi;
                }
                if (data[dataArray].tempi < low) {
                    low = data[dataArray].tempi;
                }

                //Check for ThisTimeYesterday block
                if (data[dataArray].utcdate.mon === now.getUTCMonth()) {
                    //Correct Month
                    if (data[dataArray].utcdate.mday === now.getUTCDate()) {
                        //Correct Day
                        if (data[dataArray].utcdate.hour <= now.getUTCHours()) {
                            //Correct hour
                            thisTimeYesterday = dataArray;
                        }
                    }
                }
            } //for loop
            this.more_info_yesterday.innerHTML = `<b>Yesterday:</b> High/Low ${high}/${low}F`;
            this.more_info_yesterdayThisTime.innerHTML = `<b>Yesterday at ${data[thisTimeYesterday].utcdate.hour} it was :</b> ${data[thisTimeYesterday].tempi}F`;

        } //yesterday
} //class