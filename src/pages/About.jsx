import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Banner01 from '../assets/basic/banner02.png'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import FlagCircleOutlinedIcon from '@mui/icons-material/FlagCircleOutlined';
import Intouch from '../template/intouch';

function About() {
  const logoList = [
    { 
      imgUrl: 'https://t4.ftcdn.net/jpg/03/02/12/83/360_F_302128359_q6aCwgAvdYZBPF4XSwxXddLPE0h3Kor1.jpg', 
      id: '0' 
    },
    { 
      imgUrl: 'https://cdn.sanity.io/images/n5wk68wz/production/09841b40a40b2a074472793d907ccee7448e16d1-444x360.webp', 
      id: '1' 
    },
    { 
      imgUrl: 'https://cdn.sanity.io/images/n5wk68wz/production/f77638bf5dbc6b4b3378ef589049df3f393a232c-543x108.webp', 
      id: '3' 
    },
    { 
      imgUrl: 'https://cdn.sanity.io/images/n5wk68wz/production/c8f9bd3a163434399b76335dbc06f161967b7cae-306x300.webp', 
      id: '4' 
    },
  ];
  return (
    <>

        <Carousel>
          <Carousel.Item>
            <img 
              src={Banner01} 
              style={{width:'100%', height:'50%'}} 
              text="First slide" />
            
            <Carousel.Caption>
              <h3>F U T B</h3>
              <p>Changing how the world follows football</p>
              {/* <Card body>This is some text within a card body.</Card> */}

            </Carousel.Caption>
              
          </Carousel.Item>
        </Carousel>
        <Container>
          <Card className='pointerBannter' body>
            <Row>

              <Col>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                  <SportsSoccerOutlinedIcon 
                    className='m-2 text-success'
                    style={{fontSize:'45px'}}/>
                  <h2>+1973</h2>
                  <h5 className='text-secondary'>Leagues</h5>
                </div>
              </Col>

              <Col>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                  <FlagCircleOutlinedIcon 
                    className='m-2 text-success'
                    style={{fontSize:'45px'}}/>
                  <h2>+211</h2>
                  <h5 className='text-secondary'>Countries</h5>
                </div>
              </Col>

              <Col>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                  <SlideshowOutlinedIcon 
                    className='m-2 text-success'
                    style={{fontSize:'45px'}}/>
                  <h2>+30K</h2>
                  <h5 className='text-secondary'>Live Viewing</h5>
                </div>
              </Col>

            </Row>
          </Card>
        </Container>

        {/* Main About Content */}
        <div>
          <Container className="p-4">
            <Row className='py-5'>
              <Col className='d-flex justify-content-center align-items-center flex-column'>
                <h3>About Us</h3>
                  <p className='text-center'><strong>Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit. Aenean commodo ligula eget dolor.</strong> Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient
                     montes, nascetur ridiculus mus. <br></br><br></br>Donec quam felis, 
                     ultricies nec, pellentesque eu, pretium quis, sem.
                      Nulla consequat massa quis enim.</p>
              </Col>
              <Col className='d-flex justify-content-center align-items-center'>
                <img 
                  src='https://cdn.asp.events/CLIENT_Media_Bu_282F8449_9953_6F53_6E524AED3459B222/productImages/D8692058-070C-6025-C578B1E7F0855969_cover.png' 
                  width={300}/>
              </Col>
            </Row>
          </Container>

          <Container className="bg-dark text-white" style={{padding:'200px 0'}} fluid>
            
            <Container>
              <h3 className='mb-5'>Recognised by:</h3>
              <Row>
              {logoList.map((logoH, idx) => (
                <Col className='d-flex justify-content-center align-items-center'>
                  <Card>
                    <Card.Body>
                    <img src={logoH.imgUrl} width={100}/>
                    </Card.Body>
                  </Card>
                </Col>
                ))}
              </Row>
            </Container>
          </Container>
        </div>

        <div>
          <Intouch/>
        </div>

    </>
  );
}

export default About;