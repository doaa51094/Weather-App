let error=document.getElementById('error')
let date=new Date()
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
 document.getElementById('currentDay').innerHTML=`${days[date.getDay()]}`
document.getElementById('secondDay').innerHTML=`${days[(date.getDay()+1)% 7]}`
document.getElementById('thirdDay').innerHTML=`${days[(date.getDay()+2) % 7]}`
document.getElementById('currentDay').innerHTML=`${days[date.getDay()]}`
document.getElementById('date').innerHTML=`  ${monthNames[date.getMonth()]}`
document.getElementById('dateOfMonth').innerHTML=`${date.getDate()}`
console.log(thirdDay);
list=[]



const generateData =() => {
    const searchInput=document.querySelector('input').value
 
    getWeatherData(searchInput)
    if(searchInput==''){
        error.innerHTML='City not Find'
      setTimeout(_=> error.innerHTML='',2000)
  
   }
}
document.getElementById('button-addon2').addEventListener('click',generateData);
async function getWeatherData(searchInput){
 let res=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${searchInput}&days=3`)
 let data= await res.json()
 list=data
  
 console.log(data);
 document.querySelector('.location').innerHTML=`${data.location.name}`
 document.getElementById('icon1').setAttribute('src',`https:${data.current.condition.icon}`)
 document.querySelector('.custom-today').innerHTML=`${data.current.condition.text}`
 document.querySelector('.custom-second-day').innerHTML=`${data.forecast.forecastday[1].day.condition.text}`
 document.querySelector('.custom-third-day').innerHTML=`${data.forecast.forecastday[2].day.condition.text}`
 document.getElementById('icon2').setAttribute('src',`https:${data.forecast.forecastday[1].day.condition.icon}`)
 document.getElementById('icon3').setAttribute('src',`https:${data.forecast.forecastday[2].day.condition.icon}`)
 document.getElementById('maxTemp-second').innerHTML=`${data.forecast.forecastday[1].day.maxtemp_c}°C`
 document.getElementById('minTemp-second').innerHTML=`${data.forecast.forecastday[1].day.mintemp_c}°C`
 document.getElementById('maxTemp-third').innerHTML=`${data.forecast.forecastday[2].day.maxtemp_c}°C`
 document.getElementById('minTemp-third').innerHTML=`${data.forecast.forecastday[2].day.mintemp_c}°C`
 document.getElementById('maxTemp-today').innerHTML=`${data.current.temp_c}°C`
 
 
}
getWeatherData('alex')








