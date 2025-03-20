import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router'; 
function Item({ producto }) {
  return (
    <Col md={6} lg={4} className="mb-4"> {/* Added margin-bottom for spacing */}
      <Card className="item-card h-100"> {/* Added h-100 to make cards the same height */}
        <Card.Img
          variant="top"
          src={producto.image}
          className="item-image" // Custom class for image sizing
        />
        <Card.Body className="d-flex flex-column"> {/* Flex column to push button to bottom */}
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>{producto.category}</Card.Text>
          <Card.Text>{producto.description}</Card.Text>
          <Button
            as={Link}
            to={`/item/${producto.id}`}
            variant="dark"
            className="mt-auto" // Push button to the bottom
          >
            See detail
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;