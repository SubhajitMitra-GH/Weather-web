const apikey="2080748f04bccd918532910a8515a10f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inp=document.querySelector(".weather-input input");
const btn=document.querySelector(".weather-input button");
const weathericon=document.querySelector(".image-container");
async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    if(response.status==404){
        alert("No such location found");
    }
    else{
    document.querySelector(".temp").innerHTML="Temperature:"+Math.round(data.main.temp)+"°C";
    document.querySelector(".Location").innerHTML="Location:"+data.name;
    document.querySelector(".wind").innerHTML=data.wind.speed+" kmph";
    document.querySelector(".humid").innerHTML=data.main.humidity;
    document.querySelector(".press").innerHTML=data.main.pressure;
    document.querySelector(".max").innerHTML=data.main.temp_max;
     
    switch(data.weather[0].main) {
        case "Clear":
            weathericon.src = "assets/clear.png"
            break;
        case "Clouds":
            weathericon.src = "assets/clouds.png"
            break;
        case "Rain":
            weathericon.src = "assets/rain.png"
            break;
        case "Drizzle":
            weathericon.src = "assets/drizzle.png"
            break;
        case "Haze":
            weathericon.src = "assets/mist.png"
            break;
        case "Snow":
            weathericon.src = "assets/snow.png"
            break;
        default:
            alert("Error, No such icon present");
    }
}
}
btn.addEventListener("click",()=>{
    checkWeather(inp.value);
})
btn.addEventListener('keypress',(event)=>{
    if(event.key==='Enter')
    checkWeather(inp.value);
})
