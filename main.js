const search = document.querySelector('#search');
const searchBtn = document.querySelector('#search-btn');
const dayImg = document.querySelector('#day-img');
const temp = document.querySelector('#temp');
const tempText = document.querySelector('#temp-text');
const weatherCard = document.querySelector('.weather-card');

searchBtn.addEventListener('click', e => {
	e.preventDefault();
	weatherRequest(search.value);
})


function weatherRequest(search) {
	fetch('https://api.aerisapi.com/observations/' + search + '?client_id=yuvqiCyLs8zJevAWLLzfS&client_secret=lZkeItc8LTpOKLvABGjFg0TFtgNFT8tQbt65Zbxh', 
		{mode: 'cors'})
	.then(function(response) {
		return response.json();
	}).then(function(response) {
		if (response.success) {
			temp.textContent = response.response.ob.tempC + ' °C';
			tempText.textContent = response.response.ob.weather
			dayImg.src = 'https://cdn.aerisapi.com/wxicons/v2/' + response.response.ob.icon;
			weatherCard.classList.add('show');

			console.log(response.response.ob)
		} else {
			console.log("Error with location")
		}	
	}).catch(function(err) {
		console.log(err)
	})
}

function weatherInfo(response) {
	const info = response.response.ob
}
