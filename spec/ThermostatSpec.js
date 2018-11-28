describe('Thermostat', function(){
var thermostat;

  beforeEach(function(){
  thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases the temperature by 1', function(){
    thermostat.turnUp();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature by 1', function () {
    thermostat.turnDown();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('does not allow the temperature to fall below 10 degrees', function(){
    for(var i = 0; i < 11; i++){
      thermostat.turnDown();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', function () {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch power saving mode off', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch power saving mode on', function () {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);

    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can reset the temperature to 20 degrees', function (){
    thermostat.turnUp();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });


  describe('when power saving mode is on', function() {

    it('shows power saving mode has a maximum temp of 25 degrees when set to on', function() {
      for(var i = 0; i < 6; i++) {
        thermostat.turnUp();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

  });

  describe('when power saving mode is off', function() {
    it('shows power saving mode has a maximum temp of 32 degrees when set to off', function() {
      thermostat.switchPowerSavingModeOff();
      for(var i = 0; i < 13; i++) {
        thermostat.turnUp();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('energyUsage',function(){
    it('shows low usage if temperature is less than 18',function(){
      for(var i = 0; i < 4; i++){
        thermostat.turnDown();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('shows medium usage if temperature is less than 25 and more than 18', function () {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('shows high usage if temperature is more than 25', function () {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 10; i++) {
        thermostat.turnUp();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });

 });
