const hideEl = document.querySelectorAll('#hide');
const slides = document.querySelectorAll('.slide')


const param = {
   "url": "https://api.openweathermap.org/data/2.5/",
   "appid": "85845f8459fdd8f701377c8b9320545b"
}

function getWeather() {

   for (const slide of slides) {

      slide.addEventListener('click', () => {
         const cityName = slide.getAttribute('value');

         clearActiveClasses();

         slide.classList.add('active')


         fetch(`${param.url}weather?q=${cityName}&appid=${param.appid}`)

            .then(function (resp) { return resp.json() })
            .then(function (data) {
               console.log(data);
               document.querySelector(`.${cityName.toLowerCase()}-title`).textContent = data.name;
               document.querySelector(`.${cityName.toLowerCase()}-temp`).innerHTML = Math.floor(data.main.temp - 273.15) + '&deg';
               document.querySelector(`.${cityName.toLowerCase()}-sky`).textContent = data.weather[0]['description'];
               document.querySelector(`.${cityName.toLowerCase()}-icon`).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
               document.querySelector(`.${cityName.toLowerCase()}-wind`).innerHTML = data.wind.speed + ' m/s';
            })

      })
   }

}




getWeather()


function clearActiveClasses() {
   slides.forEach((slide) => {
      slide.classList.remove('active')
   })
}




















