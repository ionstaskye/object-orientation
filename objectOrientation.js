class Vehicle {
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
    honk(){
        return "Beep."
    }
    toString()  {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}
class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year)
        this.wheels = 4
    }
}
class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year)
        this.wheels = 2
    }
    revEngine() {
        return "VROOM!!!"
    }
}
class Garage    {
    constructor(capacity){
        this.capacity =capacity
        this.vehicles = []
        this.currentCapacity = 0
    }
    vehicles(){
        return currentVehicle
    }
    add(vehicle){
        if(this.currentCapacity < this.capacity)  {
            if(vehicle.constructor.name === "Vehicle"){
                this.vehicles.push(vehicle)
                this.currentCapacity++
                return "Vehicle added!"
            }
            else{
                return "Only vehicles are allowed in here!"
            }
        }
        else {
            return "Sorry, we're full."
        }
    }
}
