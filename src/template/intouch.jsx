import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Logo01 from '../assets/basic/logo01.png';

function Intouch() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <>
    <hr className='my-5'></hr>
        <Container>
            <Row className='m-5 py-5' bg='secondary'>

                <Col>
                    {/* <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img 
                            src='https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29jY2VyfGVufDB8fDB8fHww' 
                            style={{width:'100%', height:'50%', opacity: '40%'}} 
                            text="First slide" />
                            <Carousel.Caption>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel> */}
                    <Card border="light" body className='mb-5 d-flex justify-content-center align-items-center'>
                        <img 
                            src={Logo01}
                            width={200}/>
                    </Card>
                    
                    <Card 
                        // border="light" 
                        body>
                        <div className='text-end d-flex flex-column-reverse justify-content-start'>
                            <LocationCityOutlinedIcon
                                className='m-2 text-secondary'
                                style={{fontSize:'45px'}}/>
                            <h3><span className='text-success'>Hello</span> FUTB</h3>
                            <p className='text-secondary'>Kokstadveien 23 57 Kokstad Norway</p>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card border="light">
                        <Card.Body>
                            <Card.Title>Get in touch</Card.Title>
                            <Card.Subtitle className="mb-4 text-muted">We are always here to help.</Card.Subtitle>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="name" className="mb-4"/>
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="email" placeholder="futb@email.com" className="mb-4"/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-4">
                                        <Form.Label>Write your message</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <div className='d-flex justify-content-end'>
                                        <Button variant='success' size="lg">Submit</Button>
                                    </div>
                                </Form>
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    </>
  );
}

export default Intouch;