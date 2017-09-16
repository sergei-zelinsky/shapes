import Shape from './Shape';

class Circle implements Shape {
    constructor(public radius: number){}

    getArea(){
        return 2 * Math.PI * this.radius;
    }
}

export default Circle;
