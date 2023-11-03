class Car {
    constructor(name, color, engine){
        this.name = name;
        this.color = color;
        this.engine = engine;
    }
    move = () => {
    }
}

//class Bmw extends Car{
//    constructor(model, speed){
//        this.model = model;
//        this.speed = speed;
//
//    }
//    move1 = () => {
//
//    }
//}
const car1 = new Car("Volga", "white", "v8")
car1.move(new Car())
console.log(car1.name, car1.color, car1.engine)
const car2 = new Car("Subaru", "orange", "v12")
car2.move(new Car())
console.log(car2.name, car2.color, car2.engine)


