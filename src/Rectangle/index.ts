import Shape from 'types/Shape';

class Rectangle implements Shape {
    constructor(public width: number, public height: number){}

    getArea(){
        return this.width * this.height;
    }
};

export default Rectangle;
