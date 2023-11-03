import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel01 from '../components/Carousel';
import CardText from '../components/CardText';
import CardBody from '../components/CardBody';
import CardNews from '../components/CardNews';
import TopLeagues from '../components/home/topLeagues';
import CenterFilter from '../components/home/centerFilter';
import PremLeagues from '../components/home/premLeagues';
import newsData from '../assets/dumdata/newsData';
import Card from 'react-bootstrap/Card';


function Content01() {
  return (
    <>
      {/* <Carousel01 /> */}


  {/* <Button href="/about">Link</Button> */}

      <Container>
        <Row className='row-height-news'>
          <Col>
            <Card className="mt-4" body>
              <div className='d-flex align-items-center justify-content-between'>
                <h4>Top Leagues</h4>
                <Button variant="light">All leagues</Button>
              </div>
            </Card>
            <TopLeagues/>
            {/* <PremLeagues/> */}
          </Col>
          <Col xs={6} className='right-news'>
            <CenterFilter/>
          </Col>
          <Col className='right-news'>
            <Card className="mt-4" body>
              <div className='d-flex align-items-center justify-content-between'>
                <h4>News</h4>
                <Button variant="light">Watch all</Button>
              </div>
            </Card>
            <CardNews data={newsData}/>
            <Card className="mb-4" body>
              <div className='d-flex align-items-center justify-content-between'>
                <h4>News</h4>
                <Button variant="light">Watch all</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
   
  );
}

export default Content01;