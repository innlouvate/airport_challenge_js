function Airport() {
  this.capacity = 10;
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
  plane.landed;
}
