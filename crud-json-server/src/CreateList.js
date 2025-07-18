// src/CreateList.js

import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CreateList = ({ show, onHide, onChange, onCreate, currentItem }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Create New Item</Modal.Title>
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
            placeholder="Enter title"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={currentItem.author || ''}
            onChange={onChange}
            placeholder="Enter author"
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Cancel
      </Button>
      <Button variant="success" onClick={onCreate}>
        Create
      </Button>
    </Modal.Footer>
  </Modal>
);

export default CreateList;
