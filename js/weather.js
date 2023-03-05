const API_KEY = '801f0df73d165a29c379e5ab16fed61e';

const weatherIcon = {
	'01': '☀︎',
	'02': '⛅︎',
	'03': '☁',
	'04': '⛅',
	'09': '🌦',
	'10': '☔',
	'11': '🌫',
	'13': '',
	'50': '',
};

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector('#weather .weather');
			const city = document.querySelector('#weather .city');
			city.innerText = data.name;
			const currentWeather = data.weather[0].icon.substr(0, 2);
			const whatWeather = data.weather[0].main;
			weather.innerText = weatherIcon[currentWeather];
		})
		.catch();
}
function onGeoError() {
	console.log('error');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
