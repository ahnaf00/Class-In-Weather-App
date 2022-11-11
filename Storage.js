class Storage {
    #privateCity = ""
    #privateCountry = ""
    saveItem()
    {
        localStorage.setItem("BD-city", this.#privateCity)
        localStorage.setItem("BD-country", this.#privateCountry)
    }
    getItem()
    {
        const city = localStorage.getItem("BD-city", this.#privateCity)
        const country = localStorage.getItem("BD-country", this.#privateCountry)
        return {
            city,
            country,
        }
    }
}


// const storage = {
//     city: "",
//     country:"",
//     saveItem()
//     {
//         localStorage.setItem("BD-city", this.city)
//         localStorage.setItem("BD-country", this.country)
//     },
//     getItem()
//     {
//         const city = localStorage.getItem("BD-city", this.city)
//         const country = localStorage.getItem("BD-country", this.country)
//         return {
//             city,
//             country,
//         }
//     },
// }
const storage = new Storage()
export default storage