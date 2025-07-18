// src/UpdateList.js

import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UpdateList = ({ show, onHide, onChange, onUpdate, currentItem }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Update Item</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={currentItem.title || ''}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={currentItem.author || ''}
            onChange={onChange}
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Cancel
      </Button>
      <Button variant="warning" onClick={onUpdate}>
        Update
      </Button>
    </Modal.Footer>
  </Modal>
);

export default UpdateList;
