function getCity(event) {
    event.preventDefault();
  
    let searchInput = document.querySelector("#search-input");
    let cityInput = searchInput.value;
  
    let apiKey = "ob55808a045744a1atcf819b03a865a1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}&units=imperial`;
  
    axios.get(apiUrl).then(updateData);
  }
  const now = new Date();
  
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const nameofMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  let currentDay = daysOfWeek[now.getDay()];
  
  let currentMin = now.getMinutes();
  if (currentMin < 10) {
    currentMin = `0${currentMin}`;
  }
  
  let currentHour = now.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  
  let newDate = document.querySelector("#time");
  
  newDate.innerHTML = `${currentHour}:${currentMin}`;
  
  let currentMonth = nameofMonth[now.getMonth()];
  let currentDate = now.getDate();
  let currentYear = now.getFullYear();
  
  let displayDate = document.querySelector("#current-date");
  displayDate.innerHTML = ` ${currentMonth} ${currentDate}, ${currentYear}`;
  
  function updateData(response) {
    let temperature = Math.round(response.data.temperature.current);
    let displayTemperature = document.querySelector("#current-temperature-value");
    displayTemperature.innerHTML = `${temperature}`;
  
    let city = response.data.city;
    let displayCity = document.querySelector("#current-city");
    displayCity.innerHTML = `${city}`;
  
    let description = response.data.condition.description;
    let displayCondition = document.querySelector("#current-description");
    displayCondition.innerHTML = `${description}`;
  }
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", getCity);
  