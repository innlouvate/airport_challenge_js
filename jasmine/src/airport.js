function Airport(weatherStation) {
  this.capacity = 10;
  this.planes = [];
  this.weatherStation = weatherStation;
};

Airport.prototype.checkin = function(plane) {
  if (this.weatherStation.isStormy()) {
    throw new Error('Too stormy to land');
  } else if (this.planes.length >= this.capacity) {
    throw new Error('Airport is full');
  } else {
    this.planes.push(plane);
    plane.landed(this);
  };
};

Airport.prototype.checkout = function(plane) {
  var index = this.planes.indexOf(plane);
  if (this.weatherStation.isStormy()) {
    throw new Error('Too stormy to takeoff');
  } else if (index === -1) {
    throw new Error('Plane is not at this airport');
  } else {
    this.planes.splice(index, 1);
    plane.departed(this);
  };
};
