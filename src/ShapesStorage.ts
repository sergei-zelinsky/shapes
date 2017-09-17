import Shape from './types/Shape';
import ShapesRegistry from './types/ShapesRegistry';

class ShapesStorage implements ShapesRegistry {
    shapes: Shape[] = [];

    constructor(){}

    add(shape: Shape){
        this.shapes.push(shape);
    }

    remove(target: Shape) {
        const updatedShapes = this.shapes.filter((shape: Shape) => {
            return shape !== target;
        });
        this.shapes = updatedShapes;
    }

    getTotalArea(){
        return this.shapes.reduce((acc: number, shape: Shape) => {
            return acc + shape.getArea()
        }, 0);
    }
}

export default ShapesStorage;
