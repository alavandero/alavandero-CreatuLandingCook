import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CartContext } from '../context/CartContext';   
import { useContext, useState } from 'react';
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../firebase/db';
import { useNavigate } from 'react-router';

function CheckoutForm() {
    const MySwal = withReactContent(Swal);
    const { cart, getTotal, clearCart } = useContext(CartContext); 
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            MySwal.fire({
                title: <p>Error</p>,
                text: "Your cart is empty. Add items before checking out.",
                icon: 'error'
            });
            return;
        }

        setIsSubmitting(true);
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value; 
        const phone = form.phone.value;

        const order = {
            items: cart, 
            user: { fullname: name, email, phone },
            time: serverTimestamp(),
            total: getTotal()
        };

        createOrder(order)
            .then((orderId) => {
                console.log("Order created with ID:", orderId); // Debug
                if (!orderId) throw new Error("Order ID is undefined");
                clearCart();
                MySwal.fire({
                    title: <p>Thank you!</p>,
                    text: `This is your order ID: ${orderId}`,
                    icon: 'success'
                }).then(() => navigate("/"));
            })
            .catch((error) => {
                console.error("Error in checkout:", error);
                MySwal.fire({
                    title: <p>Error</p>,
                    text: "There was an issue processing your order",
                    icon: 'error'
                });
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <Form className="w-25" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
      
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Pepito Perez" required />
          </Form.Group>
      
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="+549112334565" required />
          </Form.Group>
      
          <Button 
            variant="dark" 
            type="submit" 
            className="w-100" 
            disabled={isSubmitting || cart.length === 0}
          >
            {isSubmitting ? 'Processing...' : 'End Purchase'}
          </Button>
        </Form>
    );
}

export default CheckoutForm;