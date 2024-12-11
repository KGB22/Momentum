const API_KEY = "apikey";


function geoOk(p) {
    const lat = p.coords.latitude;
    const lon = p.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector('#weather span:first-child');
            const temp = document.querySelector('#weather .temp');
            const city = document.querySelector('#weather span:last-child');
            city.innerText = data.name;
            const t = Math.round(data.main.temp);
            temp.innerText = `${t}도`;
            weather.innerText = data.weather[0].main;
    });
}

function geoError() {
    alert("can't find your weather!");
}
navigator.geolocation.getCurrentPosition(geoOk, geoError);
// getCurrentPosition는 모든게 잘실행됏을때 실행할 함수와 안돼ㅑㅆ을때실행될 함수 2개가 필요함