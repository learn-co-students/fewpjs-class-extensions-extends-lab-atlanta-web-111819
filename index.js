class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side)
    }
}

class Triangle extends Polygon {

    get isValid() {
        const [a, b, c] = this.sides
        // We know that a + b > c
        // Also that a + c > b
        // And also that b + c > a
        return a + b > c && a + c > b && b + c > a
    }

}

class Square extends Polygon {
    get isValid() {
        return this.sides.every((side, index, sideArray) => side === sideArray[0])
    }

    get area() {
        return this.sides[0] ** 2
    }
}