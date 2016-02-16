describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Airplane();
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
  });

  describe('planes taking off', function() {
    it('releases a plane when departing', function() {
      airport.checkin(plane);
      airport.checkout(plane);
      expect(airport.planes).not.toContain(plane);
    });
    it('returns an error message if plane is not at the airport', function() {
      // airport.checkout(plane);
      expect(function() {
        airport.checkout(plane)
      }).toThrowError('Plane is not at this airport');
    });
  });

});
