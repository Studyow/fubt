import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Banner03 from '../assets/basic/banner03.png'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import FlagCircleOutlinedIcon from '@mui/icons-material/FlagCircleOutlined';
import Intouch from '../template/intouch';
import CardBasic from '../components/news/CardBasic';
import newsData from '../assets/dumdata/newsData';

import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';
import SportsFootballOutlinedIcon from '@mui/icons-material/SportsFootballOutlined';
function News() {
  return (
    <>

        <Carousel>
          <Carousel.Item>
            <img 
              src={Banner03} 
              style={{width:'100%', height:'50%'}} 
              text="First slide" />
            
            <Carousel.Caption>
              <h3>Live Sports on TV Today</h3>
              <p>Here's sports to watch today, Friday, Nov 3, 2023. Watch Live Sports events today on TV, including Contacto Deportivo, Live Racing! International, and DP World Tour Golf.</p>
              {/* <Card body>This is some text within a card body.</Card> */}

            </Carousel.Caption>
              
          </Carousel.Item>
        </Carousel>
        <Container>
          <Card className='pointerBannter' body>
            <Row>

            {/* <h2>Live Sports on TV Today</h2>
            <span></span> */}
            

              <Col>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                  <SportsHandballOutlinedIcon 
                    className='m-2 text-success'
                    style={{fontSize:'45px'}}/>
                  <h2>+20</h2>
                  <h5 className='text-secondary'>Games Today</h5>
                </div>
              </Col>

              <Col>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                  <SportsFootballOutlinedIcon 
                    className='m-2 text-success'
                    style={{fontSize:'45px'}}/>
                  <h2>+93</h2>
                  <h5 className='text-secondary'>Players</h5>
                </div>
              </Col>

              <Col>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                  <OndemandVideoOutlinedIcon 
                    className='m-2 text-success'
                    style={{fontSize:'45px'}}/>
                  <h2>+1K</h2>
                  <h5 className='text-secondary'>Videos</h5>
                </div>
              </Col>

            </Row>
          </Card>
        </Container>



      <Container>

        <Row>
          {/* <div>
          https://latest.fotmob.com/wp-content/uploads/2023/11/Covers_MLS-Playoffs-0211-1.png
          MLS Cup Playoffs Power Rankings
          LOGO -> futb 2 hours ago
          </div> */}
          <h3>News</h3>
        </Row>

        <Row>
            <CardBasic data={newsData}/>
        </Row>

      </Container>
    

        <div>
          <Intouch/>
        </div>

    </>
  );
}

export default News;