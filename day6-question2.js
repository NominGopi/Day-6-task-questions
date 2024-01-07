class Circle {
    private radius: number = 1.0;
    private color: string = "red";
  
    constructor();
    constructor(radius: number);
    constructor(radius: number, color: string);
    constructor(radius?: number, color?: string) {
      if (radius !== undefined) {
        this.radius = radius;
      }
      if (color !== undefined) {
        this.color = color;
      }
    }
  
    getRadius(): number {
      return this.radius;
    }
  
    setRadius(radius: number): void {
      this.radius = radius;
    }
  
    getColor(): string {
      return this.color;
    }
  
    setColor(color: string): void {
      this.color = color;
    }
  
    toString(): string {
      return `circle[radius=${this.radius},color=${this.color}]`;
    }
  
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  
    getCircumference(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Example usage:
  const defaultCircle = new Circle();
  console.log("Default Circle:", defaultCircle.toString());
  
  const customCircle = new Circle(3.5, "blue");
  console.log("Custom Circle:", customCircle.toString());
  console.log("Area:", customCircle.getArea());
  console.log("Circumference:", customCircle.getCircumference());
  