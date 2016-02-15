function Airport() {
  this.capacity = 10;
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  if (this.planes.length >= this.capacity) {
    throw new Error('Airport is full');
  } else {
    this.planes.push(plane);
    plane.landed;
  };
}
