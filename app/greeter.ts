class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    prototype: Greeter;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

var greeter1 = Greeter;
greeter1 = new Greeter();
console.log(`grreter1: ${greeter1.greet()}`);
var greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = 'Hey there!';
var greeter2: Greeter = new greeterMaker();
console.log(`greeter2: ${greeter2.greet()}`)