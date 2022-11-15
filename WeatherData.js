class WeatherData{
    // #privateCity = ""
    // #privateCountry = ""
    city = ""
    country = ""
    #API_KEY = "96b035e56ef3230f6f03edfb962cb72d"
    async getWeather()
    {
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.#API_KEY}`)
            const { name, main, weather } = await response.json() 
            return {
                name, 
                main, 
                weather,
            }
        }catch(err){
            UI.showMessage("Error in fetching data")
        }
        
    }   
}

// const weatherData = {
//     city: "",
//     country: "",
//     API_KEY: "96b035e56ef3230f6f03edfb962cb72d",
//     async getWeather()
//     {
//         try{
//             const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.API_KEY}`)
//             const { name, main, weather } = await response.json() 
//             return {
//                 name, 
//                 main, 
//                 weather,
//             }
//         }catch(err){
//             UI.showMessage("Error in fetching data")
//         }
        
//     }
// }
const weatherData = new WeatherData()
export default weatherData