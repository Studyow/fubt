import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';

function TopLeagues() {
  return (
    <Card className="mb-4 mt-4">
      <ListGroup variant="flush">
        <ListGroup.Item>
            <span>1</span>
            <AdbOutlinedIcon className='mx-3'/>
            Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item>
            <span>2</span>
            <AdbOutlinedIcon className='mx-3'/>
            Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item>
            <span>3</span>
            <AdbOutlinedIcon className='mx-3'/>
            Vestibulum at eros
        </ListGroup.Item>
        <ListGroup.Item>
            <span>4</span>
            <AdbOutlinedIcon className='mx-3'/>
            Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item>
            <span>5</span>
            <AdbOutlinedIcon className='mx-3'/>
            Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item>
            <span>6</span>
            <AdbOutlinedIcon className='mx-3'/>
            Vestibulum at eros
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default TopLeagues;