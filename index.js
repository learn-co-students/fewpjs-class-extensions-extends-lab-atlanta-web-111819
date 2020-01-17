class Polygon{
    constructor(sideArray){
        this.sideArray = sideArray
    }

    get countSides(){
        return this.sideArray.length
    }

    get perimeter(){
        let count = 0
        for (const element of this.sideArray){
            count = count + element
        }
        return count
    }
}

class Triangle extends Polygon{

    get isValid(){
        const [side1,side2,side3] = this.sideArray
        if((side1+side2)>side3 && (side2+side3)>side1 && (side3+side1)>side2){
            return true
        }else{return false}
    }
}

class Square extends Triangle{
    get area(){
        const [side1,side2] = this.sideArray

        return side1 * side2
    }

    get isValid(){
        if(this.sideArray[0] === this.sideArray[1]){
            return true;
        }else{return false}
    }
}