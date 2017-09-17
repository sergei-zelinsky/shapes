import Shape from './Shape';

interface ShapesRegistry{
    shapes: Shape[],
    add: (shape: Shape) => void,
    remove: (shape: Shape) => void,
    getTotalArea: () => number
}

export default ShapesRegistry;
