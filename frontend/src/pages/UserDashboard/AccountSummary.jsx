import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import { fetchTransactions } from '../../services/AccountSummary';

// import '../style/AccountSummary.css'

function AccountSummary() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const transactions = await fetchTransactions('1');
      setData(transactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  useEffect(() => {
    

    // fetchData();
  }, []);


  // const transactions = [
  //   {
  //     date: '2023-08-21',
  //     account : 1,
  //     type : "NEFT",
  //     amount: 100,
  //     description: 'Groceries',
  //   },
  //   {
  //     date: '2023-08-20',
  //     account : 2,
  //     type : "RTGS",
  //     amount: -50,
  //     description: 'Dinner at a restaurant',
  //   },
  //   // Add more transactions here
  // ];

  const columns = [
    {
      Header: 'Date',
      accessor: 'date',
    },
    {
      Header: 'Account',
      accessor: 'account',
    },
    {
      Header: 'Type',
      accessor: 'type',
    },
    {
      Header: 'Amount',
      accessor: 'amount',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // return (
    
  //   <div className="transaction-table">
  //     <h2>Transaction Table</h2>

  //     {/* <button onClick={handleFetchTransactions} disabled={fetching}>
  //       {fetching ? 'Fetching...' : 'Fetch Transactions'}
  //     </button> */}

  //     <table {...getTableProps()} className="table">
  //       <thead>
  //         {headerGroups.map(headerGroup => (
  //           <tr {...headerGroup.getHeaderGroupProps()} className="table-header">
  //             {headerGroup.headers.map(column => (
  //               <th {...column.getHeaderProps()}>{column.render('Header')}</th>
  //             ))}
  //           </tr>
  //         ))}
  //       </thead>
  //       <tbody {...getTableBodyProps()}>
  //         {rows.map(row => {
  //           prepareRow(row);
  //           return (
  //             <tr {...row.getRowProps()} className="table-row">
  //               {row.cells.map(cell => {
  //                 return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
  //               })}
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //   </div>
  // );
  
}

export default AccountSummary;