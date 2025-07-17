import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Lists = ({ data }) => {
  const rows = data.map(item => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.author}</td>
    </tr>
  ));

  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Lists;
