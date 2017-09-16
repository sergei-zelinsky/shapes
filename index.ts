import Shape from './src/Shape';
import Rectangle from './src/Rectangle';
import Circle from './src/Circle';

const shapes: Shape[] = [];

shapes.push(new Rectangle(4, 2));
shapes.push(new Circle(42));

const totalArea = shapes.reduce((area: number, shape: Shape) => {
    return area + shape.getArea();
}, 0);

console.log(`Total area: ${totalArea}`);
