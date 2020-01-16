// Your code here

class Polygon{
    constructor(array){
        this.array = array
    }

    get countSides(){
        return this.array.length
    }

    get perimeter(){
        let perimeter = 0
        this.array.forEach(side => perimeter += side)
        return perimeter
    }
}


class Triangle extends Polygon{

    get isValid(){
        this.array.sort((a, b) => a - b);
        return ((this.array[0]+ this.array[1]) >  this.array[2]) ? true : false
    }

}
    

class Square extends Polygon{

    get area(){return this.array[0] ** 2 }

    get isValid(){
        return this.array.every( (val, i, arr) => val === arr[0] )
    }
}
