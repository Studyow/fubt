import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PremLeagues() {
  return (
    <Card className="text-center mb-4 mt-4">
      <Card.Header>Featured League</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default PremLeagues;