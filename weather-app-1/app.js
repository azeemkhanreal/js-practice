  window.addEventListener('load',()=>{
    //Selectors
    let long;
    let lat;
    let tempDesc = document.querySelector('.temperature-description')
    let tempDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone')
    let temperatureSection = document.querySelector('.temperature')
    const temperatureSpan = document.querySelector('.temperature span')
    let cityName = document.querySelector('.city-name')
    //Get data from current Location Coordination  
        // if(navigator.geolocation){
        // navigator.geolocation.getCurrentPosition(position=>{
        //    long = position.coords.longitude
        //    lat = position.coords.latitude
    // fetch data from postionAPI    
//     fetch(api).then(response=>{
//         return response.json()
//     }).then(data=>{
//         console.log(data)
//         const feels_like = data.main.feels_like
//         //set DOM Element from the API
//         locationTimezone.textContent = data.name
//         tempDesc.textContent = data.weather[0].description

//         //change temperature to forignheight
//         temperatureSection.addEventListener('click',()=>{
//             if(temperatureSpan.textContent==="F"){
//                 let celsius = Math.round(feels_like-273)
//                 tempDegree.textContent = celsius    
//                 temperatureSpan.textContent="C"
//             }
//             else{
//                 temperatureSpan.textContent="F"
//             }
//         })
//     })
//     })
//   }
//   else{
//       h1.textContent="hey enable your location"
//   }
// })
    //API

        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=343fbae8c732e35c09dc738fa2e95194`
        
        cityName.addEventListener('keyup',function(event){
            if (event.keyCode===13){
                const apiCity = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=343fbae8c732e35c09dc738fa2e95194`
                cityName.value = ""
                fetch(apiCity).then(response=>{
                    return response.json()
                }).then(data=>{
                    let temp = Math.round(data.main.feels_like-273)
                    locationTimezone.textContent = data.name
                    tempDegree.textContent = temp
                    tempDesc.textContent = data.weather[0].description
                    console.log(data)
                    
                    event.preventDefault()
                })
            }
        })

    })

