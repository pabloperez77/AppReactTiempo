const location = "Murcia, es";
const appID = "5ae765425c003aec7bdc81cbbd770220";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appID}`;

class serviceAPI {

    static async getData(){
        let result = await fetch(api_weather)
            .then(data => data.json())
            .then(weather_data => weather_data);
        return result;
    }
}

export default serviceAPI;