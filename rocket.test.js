
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it returns a new rocket object', () => {
      const newRocket = new Rocket()
      expect(newRocket).toBeTruthy();
    });
    test('it should set default attributes if nothing is passed', () => {
      const newRocket = new Rocket()
      expect(newRocket.options).toBe();
    });

    test("it should set the rocket's name if provided", () => {
      const newRocket = new Rocket({'name': 'Larry'});
      expect(newRocket.name).toEqual('Larry');
    });

    test("it should set the rocket's color if provided", () => {
      const newRocket = new Rocket({'colour': 'blue'});
      expect(newRocket.colour).toEqual('blue');
    });

    test("it should set the rocket's flying status if provided", () => {
      const newRocket = new Rocket({'flying': true});
      expect(newRocket.flying).toBeTruthy();
    });

    test("it should set the rocket's flying status to false if not provided", () => {
      const newRocket = new Rocket();
      expect(newRocket.flying).toBeFalsy();
    });

  });

  describe('liftOff', () => {
    test('it should return true if flying is set to false', () => {
      const newRocket = new Rocket();
      expect(newRocket.liftOff()).toBeTruthy();
    });

    test('it should set flying to true if flying is set to false', () => {
      const newRocket = new Rocket();
      newRocket.liftOff();
      expect(newRocket.flying).toBeTruthy();
    });

    test('it should return false if flying is set to true', () => {
      const newRocket = new Rocket({'flying': true});
      expect(newRocket.liftOff()).toBeFalsy();
    });

    test('it should return true if flying is set to something else', () => {
      const newRocket = new Rocket({'flying': 'some value'});
      expect(newRocket.liftOff()).toBeFalsy();
    });
  });

  describe('land', () => {
    test('it should return false if flying is set to false', () => {
      const newRocket = new Rocket();
      expect(newRocket.land()).toBeFalsy();
    });

    test('it should return true if flying is set to true', () => {
      const newRocket = new Rocket({'flying': true});
      expect(newRocket.land()).toBeTruthy();
    });

    test('it should set flying to false if flying is set to true', () => {
      const newRocket = new Rocket({'flying': true});
      newRocket.land();
      expect(newRocket.flying).toBeFalsy();
    });

    test('it should return true if flying is set to something else', () => {
      const newRocket = new Rocket({'flying': 'some value'});
      expect(newRocket.land()).toBeTruthy();
    });
  });

  describe('status', () => {
    test('it should return rocket.name is flying through the sky if flying is set to true', () => {
      const newRocket = new Rocket({'name': 'Larry', 'flying': true});
      expect(newRocket.status()).toBe('Rocket Larry is flying through the sky!');
    });

    test('it should return rocket.name is ready for liftoff if flying is set to false', () => {
      const newRocket = new Rocket({'name': 'Larry', 'flying': false});
      expect(newRocket.status()).toBe('Rocket Larry is ready for liftoff!');
    });
  });
  
  describe('sendCodedSignal', () => {
    test('it should return boop if message code is undefined', () => {
      const newRocket = new Rocket();
      expect(newRocket.sendCodedSignal(undefined)).toBe('boop');
    });

    test('it should set signalInfo to empty array and return nothing', () => {
      const newRocket = new Rocket()
      newRocket.sendCodedSignal(undefined)
      expect(newRocket.signalInfo).toBe()
    });
    
    test('it should return beep if message code is < 10 and flying is false', () => {
      const newRocket = new Rocket();
      expect(newRocket.sendCodedSignal(3)).toBe('beep');
    });

    test('it should return beep beep if message code is < 10 and flying is true', () => {
      const newRocket = new Rocket({'flying': true});
      expect(newRocket.sendCodedSignal(3)).toBe('beep beep');
    });
    
    test('it should return boop beep beep if message code is > 10 and flying is false', () => {
      const newRocket = new Rocket({});
      expect(newRocket.sendCodedSignal(13)).toBe('boop beep beep');
    });
    
    test('it should return boop boop boop if message code is > 10 and flying is true', () => {
      const newRocket = new Rocket({'flying': true});
      expect(newRocket.sendCodedSignal(13)).toBe('boop boop boop');
    });
  });

});
