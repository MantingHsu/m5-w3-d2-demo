// src/App.js

import React, { Component } from 'react';
import Lists from './Lists';
import CreateList from './CreateList';
import UpdateList from './UpdateList';
import DeleteList from './DeleteList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      alldata: [],
      showCreate: false,
      showUpdate: false,
      showDelete: false,
      currentItem: { id: '', title: '', author: '' },
    };
  }

  // Fetch all data
  handleClick = () => {
    this.setState({ loading: true });
    fetch('http://localhost:5001/lists')
      .then(response => response.json())
      .then(json => this.setState({ alldata: json, loading: false }))
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  // Modal handlers
  showCreateModal = () => this.setState({
    showCreate: true,
    currentItem: { id: '', title: '', author: '' }
  });
  hideCreateModal = () => this.setState({ showCreate: false, currentItem: { id: '', title: '', author: '' } });

  showUpdateModal = (item) => this.setState({ showUpdate: true, currentItem: { ...item } });
  hideUpdateModal = () => this.setState({ showUpdate: false, currentItem: { id: '', title: '', author: '' } });

  showDeleteModal = (item) => this.setState({ showDelete: true, currentItem: { ...item } });
  hideDeleteModal = () => this.setState({ showDelete: false, currentItem: { id: '', title: '', author: '' } });

  // Input change handler (shared)
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      currentItem: {
        ...this.state.currentItem,
        [name]: value,
      },
    });
  };

  // CREATE
  handleCreate = () => {
    fetch('http://localhost:5001/lists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: this.state.currentItem.title,
        author: this.state.currentItem.author,
      }),
    })
      .then(res => res.json())
      .then(() => {
        this.hideCreateModal();
        this.handleClick();
      });
  };

  // UPDATE
  handleUpdate = () => {
    fetch(`http://localhost:5001/lists/${this.state.currentItem.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: this.state.currentItem.title,
        author: this.state.currentItem.author,
      }),
    })
      .then(res => res.json())
      .then(() => {
        this.hideUpdateModal();
        this.handleClick();
      });
  };

  // DELETE
  handleDelete = () => {
    fetch(`http://localhost:5001/lists/${this.state.currentItem.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        this.hideDeleteModal();
        this.handleClick();
      });
  };

  render() {
    return (
      <div className="container">
        <h1>CRUD Demo</h1>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Get Lists
        </button>
        <button className="btn btn-success ml-2" onClick={this.showCreateModal}>
          Create New
        </button>

        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <Lists
            data={this.state.alldata}
            onUpdateClick={this.showUpdateModal}
            onDeleteClick={this.showDeleteModal}
          />
        )}

        <CreateList
          show={this.state.showCreate}
          onHide={this.hideCreateModal}
          onChange={this.handleChange}
          onCreate={this.handleCreate}
          currentItem={this.state.currentItem}
        />

        <UpdateList
          show={this.state.showUpdate}
          onHide={this.hideUpdateModal}
          onChange={this.handleChange}
          onUpdate={this.handleUpdate}
          currentItem={this.state.currentItem}
        />

        <DeleteList
          show={this.state.showDelete}
          onHide={this.hideDeleteModal}
          onDelete={this.handleDelete}
          currentItem={this.state.currentItem}
        />
      </div>
    );
  }
}

export default App;
