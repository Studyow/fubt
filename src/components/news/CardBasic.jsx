import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardBasic = props => {
  const data = props.data;
  return (
    <>
            {
                data.slice(0,6).map((item,index) => (
                  <Col xs={3}>
                    <Card
                      // border="light" 
                      className="mb-4 mt-4">
                      <Card.Img variant="top" src={item.img} />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text className='text-description'>
                          {item.desc}
                        </Card.Text>
                        <span className='text-secondary'>{item.postime}</span>
                        
                      </Card.Body>
                      <Card.Footer className="text-muted">
                        <div className='d-flex justify-content-center'>
                          <Button 
                          style={{border:'0'}}
                            href="/News" 
                            variant="outline-secondary" 
                            size="sm">See more</Button>
                        </div>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))
            }
    </>
  );
};

export default CardBasic;