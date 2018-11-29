$(document).ready(function() {
    var thermostat = new Thermostat();
    var update = function(thermo){
      $('#current-temperature').text(thermo.temp);
      updatePsm(thermo);
      updateEnergy(thermo);
    };

    var updateEnergy = function(thermo){
      if (thermo.energyUsage() === "low-usage"){
          $('#energy-usage').css('backgroundColor', 'green');
      } else if (thermo.energyUsage() === "medium-usage"){
          $('#energy-usage').css('backgroundColor', 'black');
      } else if (thermo.energyUsage() === "high-usage"){
          $('#energy-usage').css('backgroundColor', 'red');
      }
    };

    var updatePsm = function(thermo){
      if (thermo.powerSavingMode){
          $('#power-saving-status').text("on");
      } else if (thermo.powerSavingMode === false){
          $('#power-saving-status').text("off");
      }
    };

    update(thermostat);

    $('#temperature-up').click(function(){
      thermostat.turnUp();
      update(thermostat);
    });

    $('#temperature-down').click(function(){
      thermostat.turnDown();
      update(thermostat);
    });

    $('#powersaving-on').click(function(){
      thermostat.switchPowerSavingModeOn();
      $('#power-saving-status').text("on");
    });

    $('#powersaving-off').click(function(){
      thermostat.switchPowerSavingModeOff();
      $('#power-saving-status').text("off");
    });

    $('#reset').click(function(){
      thermostat.resetTemperature();
      update(thermostat);
    });

    $('#weather').click(function(){
    $.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=1247251ef7128ea10967b9340efaf87d", function(data) {
      console.log(data); });
    });

    displayWeather('London');

    $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
    })

    function displayWeather(city) {
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=1247251ef7128ea10967b9340efaf87d';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#city-temperature').text(data.main.temp);
    }
  )};

   // $('#city').val(function(){
   //  displayWeather(city);
   // };
    $.get(server linked to db), retrieves last known temperature
    $.post store last known temperature 

});
