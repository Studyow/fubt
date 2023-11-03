import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

const DatePick = props => {
    const [show, setShow] = useState(false);
    const [showErr, setShowErr] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Nov 2, 2023
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nov 2, 2023</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Alert variant="danger" onClose={() => setShowErr(false)} dismissible>
                <Alert.Heading>Ooops! We're still in-progress!</Alert.Heading>
                <p>
                    Date Select and some of the pages is still waiting to be clear in report.
                </p>
            </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DatePick;
