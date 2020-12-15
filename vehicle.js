// Created By: Jacob Bonner
// Created On: December 2020
// This class creates a vehicle.

class Vehicle {
  // Constructor that defines fields
  constructor(licensePlateInput, colourInput) {
    this.licensePlate = licensePlateInput;
    this.colour = colourInput;
    this.numberOfDoors = 4;
    this.speed = 0;
    this.maximumSpeed = 477;
  }

  // Setter for the colour
  setColour(userColour) {
    this.colour = userColour;
  }

  // Getter for the colour
  getColour() {
    return this.colour;
  }

  // Setter for the license plate number
  setLicensePlate(userLicensePlate) {
    this.licensePlate = userLicensePlate;
  }

  // Getter for the license plate number
  getLicensePlate() {
    return this.licensePlate;
  }

  // Method that accelerates car
  accelerate(userIncrease) {
    // Ensuring all fields are integers
    this.maximumSpeed = parseInt(this.maximumSpeed, 10);
    this.speed = parseInt(this.speed, 10);
    userIncrease = parseInt(userIncrease, 10);
    
    // Checking to see if speed exceeds maximum then increasing the speed
    if (this.speed + userIncrease > this.maximumSpeed) {
      throw "ERROR: Attempt to change car property beyond allowed bounds";
    } else {
      this.speed = this.speed + userIncrease;
    }

    // Returning the new speed to the user
    return this.speed;
  }

  // Method that deccelerates the car
  deccelerate(userDecrease) {
    // Ensuring all fields are integers
    this.speed = parseInt(this.speed, 10);
    userDecrease = parseInt(userDecrease, 10);

    // Checking to see if speed exceeds maximum then increasing the speed
    if (this.speed - userDecrease < 0) {
      throw "ERROR: Attempt to change car property beyond allowed bounds";
    } else {
      this.speed = this.speed - userDecrease;
    }

    // Returning the new speed to the user
    return this.speed;
  }
}

// Exporting the class
module.exports = Vehicle;
