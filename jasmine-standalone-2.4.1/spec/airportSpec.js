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
      airport.land(plane)
      expect(airport.planes).toContain(plane);
    });
    it('returns an error message if airport is full', function() {
      for(var i=1; i<=10; i++) { airport.land(new Airplane) }
      expect(function() {
        airport.land(plane)
      }).toThrowError('Airport is full');
    });
  });

});
