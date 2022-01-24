fetch('http://api.openweathermap.org/data/2.5/weather?q=Denpasar&appid=85845f8459fdd8f701377c8b9320545b')
   .then(function (resp) { return resp.json() })
   .then(function (data) {
      console.log(data);
      document.querySelector('.denpasar-title').textContent = data.name;
      document.querySelector('.denpasar-temp').innerHTML = Math.floor(data.main.temp - 273.15) + '&deg';
      document.querySelector('.denpasar-sky').textContent = data.weather[0]['description'];
      document.querySelector('.denpasar-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      document.querySelector('.denpasar-wind').innerHTML = data.wind.speed + ' m/s';
   })
   .catch(function () {
      //  any errors 
   });
fetch('http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=85845f8459fdd8f701377c8b9320545b')
   .then(function (resp) { return resp.json() })
   .then(function (data) {
      console.log(data);
      document.querySelector('.tokyo-title').textContent = data.name;
      document.querySelector('.tokyo-temp').innerHTML = Math.floor(data.main.temp - 273.15) + '&deg';
      document.querySelector('.tokyo-sky').textContent = data.weather[0]['description'];
      document.querySelector('.tokyo-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      document.querySelector('.tokyo-wind').innerHTML = data.wind.speed + ' m/s';
   })
   .catch(function () {
      //  any errors 
   });
fetch('http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=85845f8459fdd8f701377c8b9320545b')
   .then(function (resp) { return resp.json() })
   .then(function (data) {
      console.log(data);
      document.querySelector('.amsterdam-title').textContent = data.name;
      document.querySelector('.amsterdam-temp').innerHTML = Math.floor(data.main.temp - 273.15) + '&deg';
      document.querySelector('.amsterdam-sky').textContent = data.weather[0]['description'];
      document.querySelector('.amsterdam-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      document.querySelector('.amsterdam-wind').innerHTML = data.wind.speed + ' m/s';
   })
   .catch(function () {
      //  any errors 
   });
fetch('http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=85845f8459fdd8f701377c8b9320545b')
   .then(function (resp) { return resp.json() })
   .then(function (data) {
      console.log(data);
      document.querySelector('.moscow-title').textContent = data.name;
      document.querySelector('.moscow-temp').innerHTML = Math.floor(data.main.temp - 273.15) + '&deg';
      document.querySelector('.moscow-sky').textContent = data.weather[0]['description'];
      document.querySelector('.moscow-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      document.querySelector('.moscow-wind').innerHTML = data.wind.speed + ' m/s';
   })
   .catch(function () {
      //  any errors 
   });
fetch('http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=85845f8459fdd8f701377c8b9320545b')
   .then(function (resp) { return resp.json() })
   .then(function (data) {
      console.log(data);
      document.querySelector('.madrid-title').textContent = data.name;
      document.querySelector('.madrid-temp').innerHTML = Math.floor(data.main.temp - 273.15) + '&deg';
      document.querySelector('.madrid-sky').textContent = data.weather[0]['description'];
      document.querySelector('.madrid-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      document.querySelector('.madrid-wind').innerHTML = data.wind.speed + ' m/s';
   })
   .catch(function () {
      //  any errors 
   });
fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=85845f8459fdd8f701377c8b9320545b')
   .then(function (resp) { return resp.json() })
   .then(function (data) {
      console.log(data);
      document.querySelector('.london-title').textContent = data.name;
      document.querySelector('.london-temp').innerHTML = Math.floor(data.main.temp - 273.15) + '&deg';
      document.querySelector('.london-sky').textContent = data.weather[0]['description'];
      document.querySelector('.london-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      document.querySelector('.london-wind').innerHTML = data.wind.speed + ' m/s';
   })
   .catch(function () {
      //  any errors 
   });

const hideEl = document.querySelectorAll('#hide');
const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
   slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active')
   })
}


function clearActiveClasses() {
   slides.forEach((slide) => {
      slide.classList.remove('active')
   })
}



















