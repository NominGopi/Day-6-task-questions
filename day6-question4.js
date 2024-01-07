class UberPriceCalculator {
    private baseFare: number;
    private costPerKilometer: number;
    private costPerMinute: number;
    private surgeMultiplier: number;
  
    constructor(baseFare: number, costPerKilometer: number, costPerMinute: number, surgeMultiplier: number) {
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
      this.costPerMinute = costPerMinute;
      this.surgeMultiplier = surgeMultiplier;
    }
  
    calculatePrice(distance: number, duration: number, isSurgeActive: boolean): number {
      const distanceCost = distance * this.costPerKilometer;
      const durationCost = duration * this.costPerMinute;
      const surgeMultiplier = isSurgeActive ? this.surgeMultiplier : 1;
  
      return this.baseFare + distanceCost + durationCost * surgeMultiplier;
    }
  }
  
  // Example usage:
  const uberCalculator = new UberPriceCalculator(5, 1.5, 0.2, 1.5);
  
  // Assuming a 10 km ride that takes 15 minutes without surge
  const distance = 10; // in kilometers
  const duration = 15; // in minutes
  const isSurgeActive = false;
  
  const totalPrice = uberCalculator.calculatePrice(distance, duration, isSurgeActive);
  console.log("Uber Price:", totalPrice);
  