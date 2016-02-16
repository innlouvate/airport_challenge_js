function Airport() {
  this.capacity = 10;
  this.planes = [];
};

Airport.prototype.checkin = function(plane) {
  if (this.planes.length >= this.capacity) {
    throw new Error('Airport is full');
  } else {
    this.planes.push(plane);
    plane.landed;
  };
};

Airport.prototype.checkout = function(plane) {
  // var index = this.planes.indexOf(plane);
  if (this.planes.indexOf(plane) === -1) {
    throw new Error('Plane is not at this airport');
  } else {
    this.planes.splice(this.planes.indexOf(plane), 1);
    plane.departed;
  };
};
