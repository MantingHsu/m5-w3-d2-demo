import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Lists = ({ data, onUpdateClick, onDeleteClick }) => {
  const rows = data.map(item => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.author}</td>
      <td>
        <button
          className="btn btn-warning btn-sm mr-2"
          onClick={() => onUpdateClick(item)}
        >
          Update
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDeleteClick(item)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Lists;
