import Rectangle from './src/Rectangle';
import Circle from './src/Circle';
import ShapesStorage from './src/ShapesStorage';

const shapesStorage = new ShapesStorage();

const rectangle = new Rectangle(4, 2);
const circle = new Circle(42);

console.log('------------------------------------------');

shapesStorage.add(rectangle);
shapesStorage.add(circle);
console.log('Add rectangle and circle shapes');

const totalArea = shapesStorage.getTotalArea();
console.log(`Total area = ${totalArea}`);

shapesStorage.remove(circle);
console.log('Remove circle shape');

const totalAreaAfterRemoving = shapesStorage.getTotalArea();
console.log(`Total area = ${totalAreaAfterRemoving}`);

console.log('------------------------------------------');
