// Created By: Jacob Bonner
// Created On: December 2020
// This program allows the user to have two cars and change certain properties
//   of the cars, such as colour, license plate number and the speed the car
//   will travel once they have it.

// Importing the class Vehicle from another file
const Vehicle = require("./vehicle.js");

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

try {
  // User input for license plate of first car
  let licenseInput = prompt("What is the license plate number of" +
                            " the first car: ");

  // User input for colour of first car
  let colourInput = prompt("What is the colour of the first car: ");
  console.log();

  /// Initializing the users first car
  let firstCar = new Vehicle(licenseInput, colourInput);
  console.log("Here is your first car!");
  console.log("License Plate Number:", firstCar.getLicensePlate());
  console.log("Colour:", firstCar.getColour());
  console.log();

  // User input for license plate of second car
  licenseInput = prompt("What is the license plate number of" +
                        " the second car: ");

  // User input for colour of second car
  colourInput = prompt("What is the colour of the second car: ");
  console.log();

  /// Initializing the users second car
  let secondCar = new Vehicle(licenseInput, colourInput);
  console.log("Here is your second car!");
  console.log("License Plate Number:", secondCar.getLicensePlate());
  console.log("Colour:", secondCar.getColour());
  console.log();

  // Changing the license plate number of the first car
  licenseInput = prompt("The license plate on your first car expired! What " + 
                        "is your new license plate number: ");
  firstCar.setLicensePlate(licenseInput);
  console.log("Your new license plate number is:", firstCar.getLicensePlate());
  console.log();

  // Changing the colour of the second car
  colourInput = prompt("The second car needs a new paint job! What " + 
                       "colour do you want your car to be: ");
  secondCar.setColour(colourInput);
  console.log("The colour of your new paint job is:", secondCar.getColour());
  console.log();

  // Accelerating the first car
  let speedInput = prompt("Take one of your cars for a spin! How much would " +
                          "you like to speed up the car (in KM/h): ");
  if (isNaN(speedInput) == true) {
    throw "ERROR: Invalid Input";
  } else {
    console.log("The car is travelling at", firstCar.accelerate(speedInput), 
                "KM/h");
  }
  console.log();

  // Accelerating the first car again
  speedInput = prompt("Now that you are on the highway, how much would " +
                      "you like to speed up the car (in KM/h): ");
  if (isNaN(speedInput) == true) {
    throw "ERROR: Invalid Input";
  } else {
    console.log("The car is travelling at", firstCar.accelerate(speedInput), 
                "KM/h");
  }
  console.log();

  // Deccelerating the first car
  speedInput = prompt("There is traffic, you need to slow down! How much " +
                      "would you like to slow down the car (in KM/h): ");
  if (isNaN(speedInput) == true) {
    throw "ERROR: Invalid Input";
  } else {
    console.log("The car is travelling at", firstCar.deccelerate(speedInput), 
                "KM/h");
  }

  // Catches and tells the user what error occured
} catch (err) {
  console.log("");
  console.error(err);
}
