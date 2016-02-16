'use strict';

describe('Airport', function() {

  var airport;
  var plane;
  var weatherStation;
  var isStormySpy;
  // var weather;

  beforeEach(function() {
    // weatherStation = jasmine.createSpyObj('weatherStation', ['isStormy']);
    weatherStation = { isStormy: function() {} };
    isStormySpy = spyOn(weatherStation,'isStormy').and.returnValue(false);

    airport = new Airport(weatherStation);
    plane = jasmine.createSpyObj('plane',['landed', 'departed']);

  });

  describe('has initialised values', function() {
    it('capacity of 10', function() {
      expect(airport.capacity).toEqual(10);
    });
    it('has an empty planes array', function() {
      expect(airport.planes).toEqual([]);
    });
  });

  describe('planes landing', function() {
    it('can accept a plane and store', function() {
      airport.checkin(plane)
      expect(airport.planes).toContain(plane);
    });
    it('returns an error message if airport is full', function() {
      for(var i=1; i<=10; i++) { airport.checkin(new Airplane) }
      expect(function() {
        airport.checkin(plane)
      }).toThrowError('Airport is full');
    });
    it('calls plane to be landed', function(){
      airport.checkin(plane)
      expect(plane.landed).toHaveBeenCalledWith(airport);
    });
    it('blocks landing when weather is stormy', function(){
      isStormySpy.and.returnValue(true);
      console.log(airport.weatherStation.isStormy());
      expect(function(){
        airport.checkin(plane);}).toThrowError('Too stormy to land');
      expect(airport.planes).not.toContain(plane);
    });
  });

  describe('planes taking off', function() {
    it('releases a plane when departing', function() {
      airport.checkin(plane);
      airport.checkout(plane);
      expect(airport.planes).not.toContain(plane);
    });
    it('returns an error message if plane is not at the airport', function() {
      expect(function() {
        airport.checkout(plane)
      }).toThrowError('Plane is not at this airport');
    });
    it('calls plane to be departed', function() {
      airport.checkin(plane);
      airport.checkout(plane);
      expect(plane.departed).toHaveBeenCalledWith(airport);
    });
    it('blocks takeoff when weather is stormy', function(){
      airport.checkin(plane);
      isStormySpy.and.returnValue(true);
      console.log(airport.weatherStation.isStormy());
      expect(function(){
        airport.checkout(plane);}).toThrowError('Too stormy to takeoff');
      expect(airport.planes).toContain(plane);
    });
  });

});
