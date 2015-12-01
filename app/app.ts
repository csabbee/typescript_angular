class Animal {
    constructor(private name: string) {}
    
    move(meters: number = 0) {
        console.log(`${this.name} moved ${meters} m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    
    move(meters = 5) {
        console.log('Slithering...');
        super.move(meters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    
    move(meters = 45) {
        console.log('Galloping...');
        super.move(meters);
    }

    logToConsole(obj: {a: string, b: string}) {
        var {a,b} = obj;
        console.log(`a: ${a}`);
        console.log(`b: ${b}`);
    }
}

var sam = new Snake('Sammy the Python');
var tom = new Horse('Tommy the Palomino');

sam.move();
tom.move(34);
tom.logToConsole({a: 'AAA', b: 'BBB'})