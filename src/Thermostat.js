function Thermostat(){
  this.temp = 20;
  this.MIN_TEMP = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temp;
}

Thermostat.prototype.isMinimumTemperature = function(){
  return this.temp === this.MIN_TEMP;
}

Thermostat.prototype.turnUp = function () {
  if(this.isMaximumTemperature()){
    return;
  }
  this.temp += 1;
}

Thermostat.prototype.turnDown = function () {
  if(this.isMinimumTemperature()){
    return;
  }
  this.temp -= 1;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode;
}

Thermostat.prototype.switchPowerSavingModeOff = function(){
  return this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function(){
  return this.powerSavingMode = true;
}

Thermostat.prototype.isMaximumTemperature = function(){
  if(this.isPowerSavingModeOn()){
    return this.temp === this.MAX_LIMIT_PSM_ON;
  }
  return this.temp === this.MAX_LIMIT_PSM_OFF;
}

Thermostat.prototype.resetTemperature = function(){
  this.temp = 20;
}

Thermostat.prototype.energyUsage = function(){
  temp = this.getCurrentTemperature()
  if(temp < 18){
    return 'low-usage';
  }
  else if (temp <= 25 && temp >= 18 ){
    return 'medium-usage';
  }
  else {
    console.log('high');
    return 'high-usage';
  }
}
