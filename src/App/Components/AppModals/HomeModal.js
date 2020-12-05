import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

const HomeModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className='btn btn-success progress-btn home-btn' onClick={toggle}>
        <h3>Plan a New Trip</h3>
        <div><i class="fas fa-plus"></i></div>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={'black-text'}>
        <ModalHeader toggle={toggle}>Where are you off to?</ModalHeader>
        <ModalBody className='black-text'>
          {props.children}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default HomeModal;
