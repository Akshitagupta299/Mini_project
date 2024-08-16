const currentDate = new Date();
const currentTime = currentDate.toLocaleTimeString();
var currentHour = new Date().getHours();
var tlh3 = document.querySelector("#tlpage1 h3");
tlh3.innerHTML = currentTime;

const apikey = "52798eb2079ffbc6fee6068aba6c60c5";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#blpage1 #cityInput");
const searchBtn = document.querySelector("#blpage1 button");
const weatherIcon = document.querySelector("#Weather-Icon");
const weather = document.querySelector(".weather h4");

async function checkweather(city){
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);

if(response.status == 404){
  document.querySelector(".error").style.display="block";
  document.querySelector(".weather").style.display="none";
}
else{
var data = await response.json(); 
var tempz = document.querySelector("#tlpage1 .weather h2")
tempz.innerHTML = data.main.temp + "&#8451";
console.log("API Response Data:", data);
function updateClothing(info) {
  var temperature = data.main.temp;
  var currentHour = new Date().getHours();

  var headwearH4 = document.querySelector("#top-lrpage1 h4");
  var headwearImg = document.querySelector("#top-lrpage1 img");
  var topwearH4 = document.querySelector("#top-rrpage1 h4");
  var topwearImg = document.querySelector("#top-rrpage1 img");
  var bottomwearH4 = document.querySelector("#bottom-lrpage1 h4");
  var bottomwearImg = document.querySelector("#bottom-lrpage1 img");
  var footwearH4 = document.querySelector("#bottom-rrpage1 h4");
  var footwearImg = document.querySelector("#bottom-rrpage1 img");

  if (temperature < -20 && currentHour >= 0 && currentHour <= 12) {
    headwearH4.innerHTML = "Winter Caps";
    headwearImg.src = "./Clothes/Winter Caps.jpeg";
    topwearH4.innerHTML = "Winter Pullover";
    topwearImg.src = "./Clothes/Winter Pullover.jpeg";
    bottomwearH4.innerHTML = "Jeans";
    bottomwearImg.src = "./Clothes/Winter Jeans.jpeg";
    footwearH4.innerHTML = "Woolen Shoes";
    footwearImg.src = "./Clothes/Woolen Shoes.jpeg";
  } else if (temperature < -20 && currentHour >= 12 && currentHour <= 24) {
    headwearH4.innerHTML = "Caps and Gloves";
    headwearImg.src = "./Clothes/Caps and gloves.jpeg";
    topwearH4.innerHTML = "Winter Pullover";
    topwearImg.src = "./Clothes/Win Pullover.jpeg";
    bottomwearH4.innerHTML = "Thermal bottom";
    bottomwearImg.src = "./Clothes/Thermal bottom.jpeg";
    footwearH4.innerHTML = "Boots";
    footwearImg.src = "./Clothes/Winter Boots.jpeg";
  } else if (temperature >= -20 && temperature <= 0 && data.weather[0].main=="Snow") {
    headwearH4.innerHTML = "Caps and Gloves";
    headwearImg.src = "./Clothes/Caps and gloves.jpeg";
    topwearH4.innerHTML = "Snow Jacket";
    topwearImg.src = "./Clothes/Snow Jacket.jpeg";
    bottomwearH4.innerHTML = "Thermal bottom";
    bottomwearImg.src = "./Clothes/Thermal bottom.jpeg";
    footwearH4.innerHTML = "Snow Boots";
    footwearImg.src = "./Clothes/Snow Boots.jpeg";
  } else if (temperature >= 0 && temperature <= 10 && currentHour >= 00 && currentHour <= 12 && data.weather[0].main=="Clear") {
    headwearH4.innerHTML = "Woolen beanie";
    headwearImg.src = "./Clothes/Wolleen warm beanie cap.jpeg";
    topwearH4.innerHTML = "Jacket";
    topwearImg.src = "./Clothes/Jacket3.jpg"
    bottomwearH4.innerHTML = "Thermal Lower";
    bottomwearImg.src = "./Clothes/Thermal lower.jpeg";
    footwearH4.innerHTML = "Woolen Shoes";
    footwearImg.src = "./Clothes/WWoolen Shoes.jpeg";
  } else if (temperature >= 0 && temperature <= 10 && currentHour >= 12 && currentHour <= 24 && data.weather[0].main=="Clear") {
    headwearH4.innerHTML = "Knit Cap and Scarf";
    headwearImg.src = "./Clothes/Knit Cap and Scarf.jpeg";
    topwearH4.innerHTML = "Woolen Sweater";
    topwearImg.src = "./Clothes/Woolen Sweater.jpeg";
    bottomwearH4.innerHTML = "Thermal Pant";
    bottomwearImg.src = "./Clothes/Thermal Pant.jpeg";
    footwearH4.innerHTML = "Ankle Boots";
    footwearImg.src = "./Clothes/Ankle boots.jpeg";
  }else if (temperature >= 10 && temperature <= 20 && currentHour >= 00 && currentHour <= 12 && data.weather[0].main=="Clear") {
    headwearH4.innerHTML = "Wool Knited Scarf";
    headwearImg.src = "./Clothes/Wool Knitted Scarf.jpeg";
    topwearH4.innerHTML = "Woolen Sweater";
    topwearImg.src = "./Clothes/Woolen Sweater1.jpeg";
    bottomwearH4.innerHTML = "Woolen Pants";
    bottomwearImg.src = "./Clothes/Woolen Pants.jpeg";
    footwearH4.innerHTML = "Thick Shoes";
    footwearImg.src = "./Clothes/Thick Shoes.jpeg";
  } else if (temperature >= 10 && temperature <= 20 && currentHour >= 12 && currentHour <= 24 && data.weather[0].main=="Clear") {
    headwearH4.innerHTML = "Winter Cap";
    headwearImg.src = "./Clothes/Winter Cap.jpeg";
    topwearH4.innerHTML = "Pullover";
    topwearImg.src = "./Clothes/Pullover.jpeg";
    bottomwearH4.innerHTML = "Woolen bell bottom";
    bottomwearImg.src = "./Clothes/Woolen bell bottom.jpeg";
    footwearH4.innerHTML = "Boots";
    footwearImg.src = "./Clothes/Boots1.jpeg";
  }else if (temperature >= 20 && temperature <= 25 && currentHour >= 00 && currentHour <= 12 && data.weather[0].main=="Clear") {
    headwearH4.innerHTML = "Scarf";
    headwearImg.src = "./Clothes/Scarf.jpeg";
    topwearH4.innerHTML = "Casual Shirt";
    topwearImg.src = "./Clothes/Casual Shirt.jpeg";
    bottomwearH4.innerHTML = "Pencil Skirt";
    bottomwearImg.src = "./Clothes/Pencil Skirt.jpeg";
    footwearH4.innerHTML = "Sandal";
    footwearImg.src = "./Clothes/Sandal.jpeg";
  } else if (temperature >= 20 && temperature <= 25 && currentHour >= 12 && currentHour <= 24 && data.weather[0].main=="Clear") {
    headwearH4.innerHTML = "Cap";
    headwearImg.src = "./Clothes/Cap1.jpeg";
    topwearH4.innerHTML = "Top";
    topwearImg.src = "./Clothes/Top.jpeg";
    bottomwearH4.innerHTML = "Denim";
    bottomwearImg.src = "./Clothes/Denim.jpeg";
    footwearH4.innerHTML = "Sneaker";
    footwearImg.src = "./Clothes/Sneaker.jpeg";
  }else if (temperature >= 25 && temperature <= 40 && currentHour >= 00 && currentHour <= 12 && data.weather[0].main=="Clear") {
    headwearH4.innerHTML = "SunGlasses";
    headwearImg.src = "./Clothes/SunGlasses.jpg";
    topwearH4.innerHTML = "Fitted Top";
    topwearImg.src = "./Clothes/Fitted Top.jpg";
    bottomwearH4.innerHTML = "Maxi Skirt";
    bottomwearImg.src = "./Clothes/Maxi Skirt.jpg";
    footwearH4.innerHTML = "Heels";
    footwearImg.src = "./Clothes/Heels3.jpg";
  } else if (temperature >= 25 && temperature <= 40 && currentHour >= 12 && currentHour <= 24 && data.weather[0].main=="Clear") {
    headwearH4.innerHTML = "Floppy Hat";
    headwearImg.src = "./Clothes/Floppy Hat.jpg";
    topwearH4.innerHTML = "Sundress";
    topwearImg.src = "./Clothes/Sundress.jpg";
    bottomwearH4.innerHTML = "Leg Anklets";
    bottomwearImg.src = "./Clothes/Leg Anklet.jpg";
    footwearH4.innerHTML = "Sandals";
    footwearImg.src = "./Clothes/Light Sandals.jpg";
  } else if (temperature >= 0 && temperature <= 10 && currentHour >= 00 && currentHour <= 12 && data.weather[0].main=="Clouds") {
    headwearH4.innerHTML = "Woolen beanie";
    headwearImg.src = "./Clothes/Wolleen warm beanie cap.jpeg";
    topwearH4.innerHTML = "Jacket";
    topwearImg.src = "./Clothes/Jacket3.jpg";
    bottomwearH4.innerHTML = "Thermal Lower";
    bottomwearImg.src = "./Clothes/Thermal lower.jpeg";
    footwearH4.innerHTML = "Woolen Shoes";
    footwearImg.src = "./Clothes/WWoolen Shoes.jpeg";
  } else if (temperature >= 0 && temperature <= 10 && currentHour >= 13 && currentHour <= 24 && data.weather[0].main=="Clouds") {
    headwearH4.innerHTML = "Knit Cap and Scarf";
    headwearImg.src = "./Clothes/Knit Cap and Scarf.jpeg";
    topwearH4.innerHTML = "Woolen Sweater";
    topwearImg.src = "./Clothes/Woolen Sweater.jpeg";
    bottomwearH4.innerHTML = "Thermal Pant";
    bottomwearImg.src = "./Clothes/Thermal Pant.jpeg";
    footwearH4.innerHTML = "Ankle Boots";
    footwearImg.src = "./Clothes/Ankle boots.jpeg";
  }else if (temperature >= 10 && temperature <= 20 && currentHour >= 00 && currentHour <= 12 && data.weather[0].main=="Clouds") {
    headwearH4.innerHTML = "Wool Knited Scarf";
    headwearImg.src = "./Clothes/Wool Knitted Scarf.jpeg";
    topwearH4.innerHTML = "Woolen Sweater";
    topwearImg.src = "./Clothes/Woolen Sweater1.jpeg";
    bottomwearH4.innerHTML = "Woolen Pants";
    bottomwearImg.src = "./Clothes/Woolen Pants.jpeg";
    footwearH4.innerHTML = "Thick Shoes";
    footwearImg.src = "./Clothes/Thick Shoes.jpeg";
  } else if (temperature >= 10 && temperature <= 20 && currentHour >= 13 && currentHour <= 24 && data.weather[0].main=="Clouds") {
    headwearH4.innerHTML = "Winter Cap";
    headwearImg.src = "./Clothes/Winter Cap.jpeg";
    topwearH4.innerHTML = "Pullover";
    topwearImg.src = "./Clothes/Pullover.jpeg";
    bottomwearH4.innerHTML = "Woolen bell bottom";
    bottomwearImg.src = "./Clothes/Woolen bell bottom.jpeg";
    footwearH4.innerHTML = "Boots";
    footwearImg.src = "./Clothes/Boots1.jpeg";
  }else if (temperature >= 20 && temperature <= 25 && currentHour >= 00 && currentHour <= 12 && data.weather[0].main=="Clouds") {
    headwearH4.innerHTML = "Scarf";
    headwearImg.src = "./Clothes/Scarf.jpeg";
    topwearH4.innerHTML = "Casual Shirt";
    topwearImg.src = "./Clothes/Casual Shirt.jpeg";
    bottomwearH4.innerHTML = "Pencil Skirt";
    bottomwearImg.src = "./Clothes/Pencil Skirt.jpeg";
    footwearH4.innerHTML = "Sandal";
    footwearImg.src = "./Clothes/Sandal.jpeg";
  } else if (temperature >= 20 && temperature <= 25 && currentHour >= 13 && currentHour <= 24 && data.weather[0].main=="Clouds") {
    headwearH4.innerHTML = "Cap";
    headwearImg.src = "./Clothes/Cap1.jpeg";
    topwearH4.innerHTML = "Top";
    topwearImg.src = "./Clothes/Top.jpeg";
    bottomwearH4.innerHTML = "Denim";
    bottomwearImg.src = "./Clothes/Denim.jpeg";
    footwearH4.innerHTML = "Sneaker";
    footwearImg.src = "./Clothes/Sneaker.jpeg";
  }else if (temperature >= 25 && temperature <= 40 && currentHour >= 00 && currentHour <= 12 && data.weather[0].main=="Clouds") {
    headwearH4.innerHTML = "SunGlasses";
    headwearImg.src = "./Clothes/SunGlasses.jpg";
    topwearH4.innerHTML = "Fitted Top";
    topwearImg.src = "./Clothes/Fitted Top.jpg";
    bottomwearH4.innerHTML = "Maxi Skirt";
    bottomwearImg.src = "./Clothes/Maxi Skirt.jpg";
    footwearH4.innerHTML = "Heels";
    footwearImg.src = "./Clothes/Heels3.jpg";
  } else if (temperature >= 25 && temperature <= 40 && currentHour >= 13 && currentHour <= 24 && data.weather[0].main=="Clouds") {
    headwearH4.innerHTML = "Floppy Hat";
    headwearImg.src = "./Clothes/Floppy Hat.jpg";
    topwearH4.innerHTML = "Sundress";
    topwearImg.src = "./Clothes/Sundress.jpg";
    bottomwearH4.innerHTML = "Leg Anklets";
    bottomwearImg.src = "./Clothes/Leg Anklet.jpg";
    footwearH4.innerHTML = "Sandals";
    footwearImg.src = "./Clothes/Light Sandals.jpg";
  }else if (currentHour >= 00 && currentHour <= 12 && data.weather[0].main=="Drizzle") {
    headwearH4.innerHTML = "Umbrella";
    headwearImg.src = "./Clothes/Umbrella.jpeg";
    topwearH4.innerHTML = "Sleeveless Top";
    topwearImg.src = "./Clothes/Sleeveless Top.jpeg";
    bottomwearH4.innerHTML = "Joggers";
    bottomwearImg.src = "./Clothes/Joggers.jpeg";
    footwearH4.innerHTML = "Long Boots";
    footwearImg.src = "./Clothes/Long Boots.jpeg";
  } else if (currentHour >= 13 && currentHour <= 24 && data.weather[0].main=="Drizzle") {
    headwearH4.innerHTML = "Umbrella";
    headwearImg.src = "./Clothes/Umbrella.jpeg";
    topwearH4.innerHTML = "Tank Top";
    topwearImg.src = "./Clothes/Tank top.jpeg";
    bottomwearH4.innerHTML = "Long Skirt";
    bottomwearImg.src = "./Clothes/Long Skirt.jpeg";
    footwearH4.innerHTML = "Boots";
    footwearImg.src = "./Clothes/boots2.jpeg";
  }else if (currentHour >= 00 && currentHour <= 12 && data.weather[0].main=="Rain") {
    headwearH4.innerHTML = "RainCoat";
    headwearImg.src = "./Clothes/RainCoat.jpeg";
    topwearH4.innerHTML = "Tie dye shirt style top";
    topwearImg.src = "./Clothes/Tie dye shirt style top.jpeg";
    bottomwearH4.innerHTML = "Flared Jeans";
    bottomwearImg.src = "./Clothes/Flared Jeans.jpeg";
    footwearH4.innerHTML = "Rain Boots";
    footwearImg.src = "./Clothes/Rain Boots1.jpeg";
  } else if(currentHour >= 13 && currentHour <= 24 && data.weather[0].main=="Rain") {
    headwearH4.innerHTML = "RainCoat";
    headwearImg.src = "./Clothes/Rain Coat2.jpeg";
    topwearH4.innerHTML = "Hoodie Top";
    topwearImg.src = "./Clothes/Hoodie top.jpeg";
    bottomwearH4.innerHTML = "Cargo Trouser";
    bottomwearImg.src = "./Clothes/Cargo Trouser.jpeg";
    footwearH4.innerHTML = "Rain Boots";
    footwearImg.src = "./Clothes/Rain Boots 2.jpeg";
  }
} 
  

updateClothing(data);

if(data.weather[0].main=="Clouds"){
  weatherIcon.src = "cloudy_1146869.png";
  weather.innerHTML = "Cloudy";
}
else if(data.weather[0].main=="Clear"){
  weatherIcon.src = "sun_2698194.png";
  weather.textContent = "Clear";
}
else if(data.weather[0].main=="Rain"){
  weatherIcon.src = "rain.png";
  weather.textContent = "Rainy";
}
else if(data.weather[0].main=="Drizzle"){
  weatherIcon.src = "drizzle.png";
  weather.textContent = "Drizzle";
}
else if(data.weather[0].main=="Snow"){
  weatherIcon.src = "snow_2315309.png";
  weather.textContent = "Snowy";
}
else if(data.weather[0].main=="Thunderstrom"){
  weatherIcon.src = "thunderstorm_1959334.png";
  weather.textContent = "Thunderstorm";
}
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display="none";
  }
}
searchBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    checkweather(searchBox.value);
})

var head_h4 = document.querySelector("#top-lrpage1 h4");
var head_img = document.querySelector("#top-lrpage1 img");
var top_h4 = document.querySelector("#top-rrpage1 h4");
var top_img = document.querySelector("#top-rrpage1 img");
var bottom_h4 = document.querySelector("#bottom-lrpage1 h4");
var bottom_img = document.querySelector("#bottom-lrpage1 img");
var foot_h4 = document.querySelector("#bottom-rrpage1 h4");
var foot_img = document.querySelector("#bottom-rrpage1 img");
