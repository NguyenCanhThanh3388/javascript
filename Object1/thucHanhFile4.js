class Circle {
    constructor(radius) {
      this.radius = radius;
  
    }
    getRadius = function () {
      return this.radius;
    }
    getArea = function () {
      return Math.PI * radius * radius;
    }
  }
  
  
  let circle = new Circle(2);
  let radius = circle.getRadius(); // 2
  
  let area = circle.getArea();
  console.log("radius: " + radius + "; area: " + area);