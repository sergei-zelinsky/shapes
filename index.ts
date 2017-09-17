import Rectangle from './src/Rectangle';
import Circle from './src/Circle';
import ShapesStorage from './src/ShapesStorage';

const shapesStorage = new ShapesStorage();

shapesStorage.add(new Rectangle(4, 2));
shapesStorage.add(new Circle(42));

const totalArea = shapesStorage.getTotalArea();

console.log(`Total area: ${totalArea}`);
