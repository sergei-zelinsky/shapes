import Shape from './Shape';

class Rectangle implements Shape {
    constructor(public height: number, public width: number){}

    getArea(){
        return this.width * this.height;
    }
};

export default Rectangle;
