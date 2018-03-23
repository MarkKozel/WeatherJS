class Weather {
    constructor(city, state) {
        this.apiKey = '99dfe35fcb7de1ee';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getCurrent() {
        const response = await fetch(`https://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
        const responseData = await response.json();

        return responseData.current_observation;
    }

    async getYesterday() {
        const yesterday = await fetch(`https://api.wunderground.com/api/${this.apiKey}/yesterday/q/${this.state}/${this.city}.json`);
        const yesterdayData = await yesterday.json();

        return yesterdayData.history.observations;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}