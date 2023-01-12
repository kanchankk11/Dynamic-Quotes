const submitButton = document.getElementById('submitButton');
const cityName = document.getElementById('cityName');
const getWeatherInfo = async(event) => {
    event.preventDefault();

    if (cityName.value) {
        $('.alert').alert()
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=Switzerland&units=metric&appid=728bb9c50b7057f41dd2db7e6084b4f5`;
        const response = await fetch(url);
    }
    
}
submitButton.addEventListener('click', getWeatherInfo);