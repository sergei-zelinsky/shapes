import Rectangle from './index';

describe('Rectangle', () => {

    it('should create an instance of Rectangle', () => {
        const rectangle = new Rectangle(4, 2);

        expect(rectangle).toBeInstanceOf(Rectangle);
    });

    it('should set right width and height public properties', () => {
        const width = 4;
        const height = 2;
        const rectangle = new Rectangle(4, 2);

        expect(rectangle.width).toBe(width);
        expect(rectangle.height).toBe(height);
    });

    it('should have getArea method', () => {
        const rectangle = new Rectangle(4, 2);

        expect(rectangle.getArea).toBeInstanceOf(Function);
    })

    it('should calculate right area', () => {
        const rectangle = new Rectangle(4, 2);

        expect(rectangle.getArea()).toBeCloseTo(4 * 2);
    });

})
