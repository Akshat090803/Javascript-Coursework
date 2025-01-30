

// to get the date and time


// !taking reffrences
let search=document.querySelector('.city_name');
let inputCityName=document.querySelector('.city_name');
let cityName=document.querySelector('.weather_city')
let searchCity=document.querySelector('.weather_search')
let dateTime=document.querySelector('.weather_date_time');
let w_forecast=document.querySelector('.weather_forecast')
let w_temperature=document.querySelector('.weather_temperature')
let w_icon=document.querySelector('.weather_icon')
let w_minTem=document.querySelector('.weather_min')
let w_maxTem=document.querySelector('.weather_max')
let gridCol1=document.querySelector('.weather_feelsLike');
let gridCol2=document.querySelector('.weather_humidity');
let gridCol3=document.querySelector('.weather_wind');
let gridCol4=document.querySelector('.weather_pressure');
let container=document.querySelector('.container')




// !to get the actual country name
const getCountryName=(code)=>{
  const regionNamesInEnglish = new Intl.DisplayNames([code], { type: 'region' });
  return regionNamesInEnglish.of(code);
}

  

// !to get time datetime
const getDateTime=(dts)=>{
  let currDate=new Date(dts*1000);
  // we are multiplying dt with 1000 bcoz api is returning seconds and to get milisec we multiply 1000

  const options = { weekday: 'long',
   day: 'numeric',
    month: 'long',
     year: 'numeric',
     hour:'numeric',
     minute: 'numeric',
     
     };

     const formatter= new Intl.DateTimeFormat('en-US', options);
     return  formatter.format(currDate);

}
// ! function to convert fahrenhiet to celsius
const tempConvert=(temp)=>{
  const celsius = temp-273.15;
 
  return celsius;
}
//! change background according to forecast
const changeBg=(forecast)=>{
  if(forecast=="Clouds"){
    container.style.backgroundImage = "url('./cloudy.jpg')";
    container.style.backgroundSize='cover'
  //   background-image:url("./cloudy.jpg");
  }
  else if(forecast=="Haze"){
    container.style.backgroundImage = "url('./haze.jpg')";
    container.style.backgroundSize='cover'
  //   background-image:url("./cloudy.jpg");
  }
  
  else if(forecast=="Clear"){
    container.style.backgroundImage = "url('./clear.jpg')";
    container.style.backgroundSize='cover'
  //   background-image:url("./cloudy.jpg");
  }
  else if(forecast=="Rainy"){
    container.style.backgroundImage = "url('./rainy.jpg')";
    container.style.backgroundSize='cover'
  //   background-image:url("./cloudy.jpg");
  }
  else if(forecast=="Rain"){
    container.style.backgroundImage = "url('./rainy.jpg')";
    container.style.backgroundSize='cover'
  //   background-image:url("./cloudy.jpg");
  }
  else{
    container.style.backgroundColor='#fff'
    container.style.backgroundImage = "";

  }

}






// !define the getWeather function here
let city="kota";

const getWeatherData = async () => {
  const weatherUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5cea3c302d377c3e0b4ae23cea3f0de3`;

  try{
    const res=await fetch(weatherUrl);
    const data=await res.json();
    const {main, name,weather,wind,sys,dt}= data;
    cityName.innerHTML=`${name}, ${getCountryName(sys.country)}`;

    
   
    
    dateTime.innerHTML=getDateTime(dt);
    
    w_temperature.innerHTML=`${tempConvert(main.temp).toFixed(2)}&#176C`;
    console.log(main.temp);
    console.log(main.temp_max);
    console.log(main.temp_min);

    w_minTem.innerHTML=`Min : ${tempConvert(main.temp_min).toFixed()}&#176C`;
    w_maxTem.innerHTML=`Max : ${tempConvert(main.temp_max+3).toFixed()}&#176C`;


    // adding data in grid cols
    console.log(data);
    gridCol1.innerHTML = `${weather[0].description.charAt(0).toUpperCase()+weather[0].description.slice(1)}`;
    gridCol2.innerHTML=`${main.humidity}%`;
    gridCol3.innerHTML=`${wind.speed} m/s`;
    gridCol4.innerHTML=`${main.pressure} hPa`;
    

    w_forecast.innerHTML=`${weather[0].main}`;
    w_icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png"></img>`


// calling function to change bg
changeBg(weather[0].main);
console.log(`weather forecast = ${weather[0].main}`)
   


  }
  catch(err){
    console.log(err);
  }
};


// ! search functionality

searchCity.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log(inputCityName.value);
  city=inputCityName.value;
  getWeatherData();
  inputCityName.value="";
})





//!this event listenere will update data on load 
// we can do this by calling only getWeatherData(); like we were dong previously

document.body.addEventListener("load", getWeatherData());



