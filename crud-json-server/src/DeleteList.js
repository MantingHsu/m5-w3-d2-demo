// src/DeleteList.js

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteList = ({ show, onHide, onDelete, currentItem }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Delete Item</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Are you sure you want to delete the following item?</p>
      <ul>
        <li><strong>Title:</strong> {currentItem.title}</li>
        <li><strong>Author:</strong> {currentItem.author}</li>
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Cancel
      </Button>
      <Button variant="danger" onClick={onDelete}>
        Delete
      </Button>
    </Modal.Footer>
  </Modal>
);

export default DeleteList;
