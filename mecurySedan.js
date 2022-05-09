class Vehicle {
  constructor(make, model, year, color, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passenger = 0;
    this.speed = 0;
    this.mileage = mileage;
    this.started = false;
    this.numberOfWheels = 0;
    this.fuel = 100;
  }

  accelerate() {
    if (this.started) {
      if (this.fuel > 0) {
        console.log((this.speed += 1));
        this.fuel = this.fuel - 1;
      } else {
        console.log("out of fuel.");
        this.stop();
      }
    } else {
      alert("You need to start the engine first.");
    }
  }

  decelerate() {
    if (this.started) {
      if (this.fuel > 0) {
        if (this.speed > 0) {
          console.log((this.speed -= 1));
          this.fuel = this.fuel - 1;
        } else {
          console.log(this + " has stopped moving");
          this.fuel = this.fuel - 1;
        }
      } else {
        console.log("out of fuel.");
        this.stop();
      }
    } else {
      alert("You need to start the engine first.");
    }
  }

  stop() {
    console.log("engine off");
    this.started = false;
  }

  typeOfVehicle() {
    if (this.numberOfWheels == 8) {
      console.log(this.model + " " + this.make + " is a Truck");
    } else if (this.numberOfWheels == 4) {
      console.log(this.model + " " + this.make + " is a Car");
    } else if (this.numberOfWheels == 2) {
      console.log(this.model + " " + this.make + " is a Bike");
    } else {
      console.log("Unknown type of vehicle");
    }
  }
}
class Car extends Vehicle {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.mileage = mileage;
    this.passenger = 0;
    this.maxSpeed = 160;
    this.numberOfWheels = 4;
    this.fule = 10;
    this.scheduleService = false;
  }
  loadPassenger(num) {
    if (this.passenger + num <= this.maxPassengers) {
      this.passenger += num;
      console.log(`${this.passenger} passenger(s) total are loaded up`);
      console.log(`${this.maxPassengers - this.passenger} Seat(s) left`);
    } else {
      console.log(
        `There is no more room more passengers. There are already ${this.passenger} pasengers`
      );
    }
  }
  start() {
    if (this.fule > 0) {
      console.log(`Engine started with ${this.fule}0% fule left`);
    } else {
      console.log(`No fule left to start`);
    }
  }
  scheduleServices() {
    if (this.mileage >= 30000) {
      this.scheduleService = true;
    } else {
      this.scheduleService = false;
    }
    console.log(`Service needed: ${this.scheduleService}`);
  }
}

//this shows how to call from this module...

let myCar = new Car("Mecury", "Sedan", "1960", "color", 4000);

console.log(myCar);

myCar.loadPassenger(2);
myCar.loadPassenger(2);
myCar.loadPassenger(1);
myCar.loadPassenger(2);
myCar.start();
myCar.scheduleServices();
