import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import { useCart } from '../context/CartContext'; // Import useCart to access context

function CartList({ cart }) {
  const { removeFromCart } = useCart(); // Access removeFromCart from context

  return (
    <ListGroup className="cart-list">
      {cart.map((item) => (
        <ListGroup.Item
          key={item.id}
          className="cart-item d-flex justify-content-between align-items-center p-3"
        >
          <div className="cart-item-text d-flex justify-content-center align-items-center">
            <span className="cart-item-title">{item.title}</span>
            <span className="cart-item-quantity">x {item.quantity}</span>
          </div>
          <CloseButton
            className="cart-close"
            onClick={() => removeFromCart(item.id)} 
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CartList;