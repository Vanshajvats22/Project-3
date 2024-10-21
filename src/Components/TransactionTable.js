import React, { useState } from 'react';
import './TransactionTable.css'; // Create this CSS file for styling

const TransactionTable = () => {
   
  const [selectedRows, setSelectedRows] = useState([]);
  
  const transactions = [
    {
      sno: "01",
      clientCode: "R25IB93060apw",
      clientName: "Canara Bank",
      success: 4,
      failed: 4,
      aborted: 4,
      refunded: 4,
      total: 20,
      gmv: 320.00,
      tsr: 320.00,
    },
    {
      sno: "02",
      clientCode: "R25IB93060apw",
      clientName: "Demo client for payment link",
      success: 6,
      failed: 6,
      aborted: 6,
      refunded: 6,
      total: 30,
      gmv: 320.00,
      tsr: 320.00,
    },
    {
      sno: "02",
      clientCode: "R25IB93060apw",
      clientName: "DjB-EE-TM-6",
      success: 8,
      failed: 8,
      aborted: 8,
      refunded: 8,
      total: 40,
      gmv: 320.00,
      tsr: 320.00,
    },
    {
      sno: "01",
      clientCode: "R25IB93060apw",
      clientName: "Canara Bank",
      success: 4,
      failed: 4,
      aborted: 4,
      refunded: 4,
      total: 20,
      gmv: 320.00,
      tsr: 320.00,
    },
    {
      sno: "02",
      clientCode: "R25IB93060apw",
      clientName: "Demo client for payment link",
      success: 6,
      failed: 6,
      aborted: 6,
      refunded: 6,
      total: 30,
      gmv: 320.00,
      tsr: 320.00,
    },
    {
      sno: "02",
      clientCode: "R25IB93060apw",
      clientName: "DjB-EE-TM-6",
      success: 8,
      failed: 8,
      aborted: 8,
      refunded: 8,
      total: 40,
      gmv: 320.00,
      tsr: 320.00,
    },
    // Add more transaction data here
  ];

  const handleCheckboxChange = (id) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id) // Deselect
        : [...prevSelected, id] // Select
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === transactions.length) {
      // Deselect all if all rows are already selected
      setSelectedRows([]);
    } else {
      // Select all rows
      setSelectedRows(transactions.map((_, index) => index));
    }
  };

  return (
    <div className="transaction-table-container">
        <p>Recent Transactions</p>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th className='selectDeselect' onClick={toggleSelectAll}>
              {selectedRows.length === transactions.length ? 'Deselect All' : 'Select All'}
            </th>
            <th>Client Code</th>
            <th>Client Name</th>
            <th>Success</th>
            <th>Failed</th>
            <th>Aborted/Initiated</th>
            <th>Refunded</th>
            <th>Total</th>
            <th>GMV (INR)</th>
            <th>TSR (₹)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.sno}</td>
              <td><input
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                /></td>
              <td>{transaction.clientCode}</td>
              <td>{transaction.clientName}</td>
              <td>{transaction.success}</td>
              <td>{transaction.failed}</td>
              <td>{transaction.aborted}</td>
              <td>{transaction.refunded}</td>
              <td>{transaction.total}</td>
              <td>{transaction.gmv.toFixed(2)}</td>
              <td>{transaction.tsr.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
