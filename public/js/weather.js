$.ajax({
  type: "get",
  url: "https://api.openweathermap.org/data/2.5/weather",
  dataType: "json",
  data: {
    id:"1835848",
    appid:"54f5f6da6ec0d5836a0ffa4752588da4",
    units:"metric"
  },
  success: function (wData) {
    console.log(wData);
    var tag = `
    <div class="w3-padding">
    <img src="http://openweathermap.org/img/w/${wData.weather[0].icon}.png"></div>
    <div class="w3-padding">현재온도:${wData.main.temp}도</div>
    <div class="w3-padding">현재날씨:${wData.weather[0].main} / ${wData.weather[0].description}</div>
    <div class="w3-padding">현재바람:${wData.wind.speed} / ${wData.wind.deg}deg</div>
    <div class="w3-padding">현재도시:${wData.name}</div>
    `;
    $("#status").append(tag);
  },
  error: function(xhr) {
    console.log(xhr);
  }
});