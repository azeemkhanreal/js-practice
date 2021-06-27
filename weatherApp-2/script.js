const inputCity = document.querySelector('#city-input')
const outputCity = document.querySelector('#city-name')
const weatherType = document.querySelector('#weather-type')
const temp = document.querySelector('#temp')
const minTemp = document.querySelector('#min-temp')
const maxTemp = document.querySelector('#max-temp')

let API_KEY = "343fbae8c732e35c09dc738fa2e95194"

let getWeatherData = (inputCity)=>{
    const URL = "https://api.openweathermap.org/data/2.5/weather"
    const fullURL = `${URL}?q=${inputCity}&appid=${API_KEY}&units=metric`

    const weatherPromise = fetch(fullURL)
    return weatherPromise.then((response)=>{
        return response.json();
    }).catch(()=>{
        console.log('not success')
    })
}

function searchCity(){
    const city = inputCity.value
    getWeatherData(city).then((response)=>{
        showWeatherData(response)
    }).catch((error)=>{
        console.log(error)
    })
}
let showWeatherData = (response)=>{
    outputCity.innerText = response.name
    weatherType.innerText = response.weather[0].description
    temp.innerText = response.main.feels_like
    minTemp.innerText = response.main.temp_min
    maxTemp.innerText = response.main.temp_max
}