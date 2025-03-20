import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ItemCount({ product }) {
    const [count, setCount] = useState(0);
    const { addToCart } = useContext(CartContext);

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleRemove = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (count > 0) { 
            addToCart({ ...product, quantity: count });
            setCount(0); 
        }

    };

    return (
        <div>
            <button onClick={handleRemove}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ItemCount;