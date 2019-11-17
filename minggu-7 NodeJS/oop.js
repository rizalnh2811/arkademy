class mobil {

    constructor(type, color) {
        this.type = type
        this.color = color
        this.engineStatus = 'off'
    }

    engineStart () {

        this.engineStatus = 'on'
        console.log('engine start, mobilnya warna '+ this.color+" typenya: "+this.type+" status mesin: "+this.engineStatus)
    }

    engineStop () {
        this.engineStatus = 'off'
        console.log('engine start, mobilnya warna: '+this.color+" typenya: "+this.type+" status mesin: "+this.engineStatus)
    }

    static isEngineOn (mobil) {
        if (mobil.engineStatus === 'on') {
            console.log('Engine On')
        } else {
            console.log('Engine Off')
        }
    }
}

    const m = new mobil('Phanter', 'Hitam');

// m.engineStop();

mobil.isEngineOn(m);

// Without set & get
class Car {
    constructor(color) {
        this._color = color;
    }
}

let a = new Car('Merah')

console.log(a._color);

//With set&get
class Car2 {
    constructor() {
        this._color = null
    }

    get color () {
        return `Warna mobilnya adalah ${this._color}`
    }

    set color (color) {
        this._color = `${color} keren`
    }
}

const car2 = new Car2()

car2.color = 'merah'

console.log(car2.color)