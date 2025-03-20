import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import CartList from './CartList';

function CartContainer() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => navigate('/checkout');

  if (cart.length === 0) {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2>Your cart is empty</h2>
        <Button variant='dark' className='w-50 mt-3' onClick={() => navigate('/')}>
          Go to Shop
        </Button>
      </div>
    );
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <CartList cart={cart} />
      <Button variant='dark' className='w-50 mt-3' onClick={handleClick}>
        Go to Checkout
      </Button>
    </div>
  );
}

export default CartContainer;