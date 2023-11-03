import Nav from 'react-bootstrap/Nav';
import { FacebookOutlined, SafetyDividerRounded, ThreeDRotation } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { DropdownDivider } from 'react-bootstrap';

function Footer() {
  return (
    <div className='pt-4' style={{ backgroundColor: '#d1e7dd' }}>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/news">NEWS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">ABOUT</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className='d-flex align-items-center justify-content-center'>
        <p className="text-center" style={{ width: '18rem' }}><hr></hr></p>
      </div>
      <Nav className="justify-content-center pb-5" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">
            <FacebookOutlined/>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <InstagramIcon/>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <LinkedInIcon/>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <TwitterIcon/>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <YouTubeIcon/>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <PinterestIcon/>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
    </div>
  );
}

export default Footer;