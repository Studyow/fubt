import React, { useState }from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import CloseButton from 'react-bootstrap/CloseButton';
import InputGroup from 'react-bootstrap/InputGroup';

// icons
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListOffOutlinedIcon from '@mui/icons-material/FilterListOffOutlined';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import DatePick from './datePick';


const FilterObjects = props => {
    // model
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // radio
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
      { name: 'Yesterday', value: '1' },
      { name: 'Today', value: '2' },
      { name: 'Tomorrow', value: '3' },
    ];


    return (
        <section>

            <div className='d-flex justify-content-between'>
                <h4>Select Event</h4>
                <DatePick/>
            </div>

            <div className='my-4'>
                <Stack direction="horizontal" gap={3}>
                    <Button variant="secondary" onClick={handleShow}>
                        <FilterListOutlinedIcon/>
                    </Button>
                    <Form.Control className="me-auto" placeholder="Filter" />
                    <Button variant="secondary">
                        <SearchOutlinedIcon/>
                    </Button>
                    <div className="vr" />
                    <Button variant="outline-danger">
                        <FilterListOffOutlinedIcon/>
                    </Button>
                </Stack>
            </div>

            <InputGroup className="mb-3">
                <InputGroup.Text><EmojiFlagsOutlinedIcon/></InputGroup.Text>
                <Form.Select size="sm" aria-label="Default select example">
                    <option>Country</option>
                    <option value="3">ny</option>
                    <option value="1">ph</option>
                    <option value="2">ta</option>
                    <option value="3">sa</option>
                </Form.Select>
            </InputGroup>
            














            <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>Filter Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='text-secondary my-3'>Country</div>
                            <Row className='mx-2'>
                                <Col>
                                    <ToggleButton
                                        className="mb-2 d-grid gap-2"
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="outline-secondary"
                                        checked={checked}
                                        value="1"
                                        onChange={(e) => setChecked(e.currentTarget.checked)}
                                    >
                                        Spain
                                    </ToggleButton>
                                </Col>
                                <Col>
                                    <ToggleButton
                                        className="mb-2 d-grid gap-2"
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="outline-secondary"
                                        checked={checked}
                                        value="0"
                                        disabled
                                        onChange={(e) => setChecked(e.currentTarget.checked)}
                                    >
                                        Europa
                                    </ToggleButton>
                                </Col>
                                <Col>
                                    <ToggleButton
                                        className="mb-2 d-grid gap-2"
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="outline-secondary"
                                        checked={checked}
                                        value="0"
                                        disabled
                                        onChange={(e) => setChecked(e.currentTarget.checked)}
                                    >
                                        N.Y.
                                    </ToggleButton>
                                </Col>
                                <Col>
                                    <ToggleButton
                                        className="mb-2 d-grid gap-2"
                                        id="toggle-check"
                                        type="checkbox"
                                        variant="outline-secondary"
                                        checked={checked}
                                        value="0"
                                        disabled
                                        onChange={(e) => setChecked(e.currentTarget.checked)}
                                    >
                                        Singapore
                                    </ToggleButton>
                                </Col>
                            </Row>
                            <hr></hr>
                        <div className='text-secondary my-3'>Event</div>
                            <Row className='mx-2 pb-2'>
                                <Col>
                                    <ButtonGroup>
                                        {radios.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            variant={idx % 2 ? 'outline-secondary' : 'outline-success'}
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                        ))}
                                    </ButtonGroup>
                                </Col>
                            </Row>
                            <hr></hr>
                        <div className='text-secondary my-3'>Filtering</div>
                            <Row>
                                <Col>
                                    <Stack xs={6} direction="horizontal" gap={2} style={{ width: '200px' }}>
                                        <Badge pill bg="secondary" className='d-flex align-items-center justify-content-between'>
                                            <span className='px-2'>Spain</span>
                                            <CloseButton aria-label="Hide" />
                                        </Badge>
                                        <Badge pill bg="secondary" className='d-flex align-items-center justify-content-between'>
                                            <span className='px-2'>Philippines</span>
                                            <CloseButton aria-label="Hide" />
                                        </Badge>
                                        <Badge pill bg="secondary" className='d-flex align-items-center justify-content-between'>
                                            <span className='px-2'>Tomorrow</span>
                                            <CloseButton aria-label="Hide" />
                                        </Badge>
                                        <Badge pill bg="secondary" className='d-flex align-items-center justify-content-between'>
                                            <span className='px-2'>Today</span>
                                            <CloseButton aria-label="Hide" />
                                        </Badge>
                                    </Stack>
                                </Col>
                            </Row>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Set
                    </Button>
                    </Modal.Footer>
                </Modal>
        </section>
    );
};

export default FilterObjects;
