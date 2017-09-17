import Shape from './Shape';

interface ShapesRegistry{
    shapes: Shape[],
    add: (shape: Shape) => void,
    remove: (shape: Shape) => Shape,
    getTotalArea: () => number
}

export default ShapesRegistry;
