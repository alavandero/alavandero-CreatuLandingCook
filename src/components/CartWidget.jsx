import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router'

const CartWidget = () => {
  const { getquantity } = useCart()
  const total = getquantity()
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/cart')
  }

  return (
    <div className="cart-widget">
      <Button variant="outline-light" className="cart-button" onClick={handleClick}>
        <FaShoppingCart size={30} /> 
        {total > 0 && (
          <Badge bg="danger" className="cart-badge">
            {total}
          </Badge>
        )}
      </Button>
    </div>
  );
};

export default CartWidget;
