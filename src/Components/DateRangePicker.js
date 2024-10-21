import React, { useState } from 'react';

const CheckpointTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const data = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Alice Johnson', age: 25 },
    { id: 4, name: 'Bob Brown', age: 40 },
  ];

  const handleCheckboxChange = (id) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id) // Deselect
        : [...prevSelected, id] // Select
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h3>Selected Rows:</h3>
        {selectedRows.length > 0 ? (
          <ul>
            {selectedRows.map((id) => (
              <li key={id}>{data.find((item) => item.id === id).name}</li>
            ))}
          </ul>
        ) : (
          <p>No rows selected</p>
        )}
      </div>
    </div>
  );
};

export default CheckpointTable;
