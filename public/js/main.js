

const submitButton = document.getElementById('submitButton');
const cityName = document.getElementById('cityName');
const errorMsg = document.getElementById('error');
const city = document.getElementById('city');
const temp = document.getElementById('temp')
const tempstat = document.getElementById('temp_status');
const day = document.getElementById('day');
const currDate = document.getElementById('date');


const today = new Date();

let week = [
 "Sunday",
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
 "Saturday",
];

let mon = [
 "JAN",
 "FEB",
 "MAR",
 "APR",
 "MAY",
 "JUN",
 "JUL",
 "AUG",
 "SEP",
 "OCT",
 "NOV",
 "DEC",
];
console.log(today);
day.innerText = `${week[today.getDay()]}`
date.innerText = `${today.getDate()} ${mon[today.getMonth()]}`

const getWeatherInfo = async(event) => {
    event.preventDefault();

    if (cityName.value == "") {
        errorMsg.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <p class="h3 mx-auto"><strong>Ooops!</strong> City name canot be empty.</p>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true" class="h3">&times;</span>
        </button>
      </div>`;
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=728bb9c50b7057f41dd2db7e6084b4f5`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);
            if(arrData[0].cod == 404){
                errorMsg.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                                            <p class="h3 mx-auto"><strong>Ooops!</strong> City Not Found.</p>
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true" class="h3">&times;</span>
                                            </button>
                                        </div>`;
                
                city.innerText = "Ooops";
                temp.innerText = "";
                tempstat.innerHTML = "";
            }
            else{
                city.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
                temp.innerText = `${arrData[0].main.temp} °C` ;

              const tempStatus = arrData[0].weather[0].main;

                if (tempStatus == "Sunny") {
                    tempstat.innerHTML =
                    "<i class='fa-solid fa-sun fa-2xl' style='color: #eccc68'></i>";
                } else if (tempStatus == "Clouds") {
                    tempstat.innerHTML =
                    "<i class='fa-solid fa-cloud fa-2xl' style='color: #ECF0F1'></i>";
                } else if (tempStatus == "Rain") {
                    tempstat.innerHTML =
                    "<i class='fa-solid fa-cloud-rain fa-2xl' style='color: #7F8C8D'></i>";
                } else if (tempStatus == "Mist") {
                    tempstat.innerHTML =
                    "<i class='fa-solid fa-smog fa-2xl' style='color: #DCDCDC'></i>";
                } else if (tempStatus == "Snow") {
                    tempstat.innerHTML =
                    "<i class='fa-solid fa-snowflake fa-2xl' style='color: #DCDCDC'></i>";
                }
                else if (tempStatus == "Clear") {
                    tempstat.innerHTML =
                    "<i class='fa-regular fa-sun fa-2xl' style='color: #eccc68'></i>";
                } else {
                    tempstat.innerHTML =
                    "<i class='fa-solid fa-spinner fa-2xl' style='color: #eccc68'></i>";
                } 
            }
            
        } catch (error) {
            
        }
        
    }
    
}
submitButton.addEventListener('click', getWeatherInfo);