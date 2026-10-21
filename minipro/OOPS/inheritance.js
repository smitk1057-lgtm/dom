class Car{
    constructor(){
        this.numberOfwheels=4

    }
    rules(){
        console.log('Car Should Have Wheels=', this.numberOfwheels)
        console.log('Car Should Have Seats')
        console.log('Car should have a engine')
        console.log('Car Should Have a fuel Tank')
    }
}

class Tesla extends Car{  // intertance
    constructor(){
  super()
  this.numberOfwheels=9

    }
    rules (){   // method overiding
        super.rules()
        console.log('We dont need rules, we run on the mars')
    }

}
let car = new Car ()
let tesla = new Tesla()
car.rules()
console.log('#####')
tesla.rules()