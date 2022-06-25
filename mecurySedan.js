//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassengers= 5;
        this.passenger= 0;
        this.numberOfWheels= 4;
        this.maxSpeed= 160;
        this.fuel= 10;
        this.scheduleService= false;
    }

    loadPassenger(num){
        if (this.passenger < this.maxPassengers){
            console.log("Available Room")
        }
        else{
            console.log("Not Enough Room")
        }
    }

    start(){
        if(this.fuel > 0){
            console.log(start == true)
        }
        else{
            console.log ("no fuel")
        }
    }

    scheduleService(mileage){
        if(this.mileage > 30000){
            this.scheduleService == true
        }
    }
}
