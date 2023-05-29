const ellipse = {
  width: 10,
  height: 5,
  getArea: function ( ) {return Math.PI * ellipse.width * ellipse.height},
  getPerimeter: function () {
    const w = ellipse.width;
    const h = ellipse.height;
    const a = Math.sqrt((w*w + h*h)/2);
    return 2*Math.PI*a;
  },
  getEccentricity: function () {
    const a = ellipse.height / ellipse.width;
    return Math.sqrt(1-a*a);
  }
}

console.log(ellipse.getArea());
console.log(ellipse.getPerimeter());
console.log(ellipse.getEccentricity());