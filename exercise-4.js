class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight() {
        this.weight = weight;
    }

    toString() {
        return display.innerHTML = this.name + " cân nặng là: " + this.weight;
    }
}