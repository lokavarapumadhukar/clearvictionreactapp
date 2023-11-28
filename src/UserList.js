import React, { useState } from 'react';

const UserList = ({ data }) => {
  // inititalizes state variable sort order using useState hook, 'asc' means ascending
  const [sortOrder, setSortOrder] = useState('asc'); 
  //intitlizes state variable to store sorted data
  const [sortedData, setSortedData] = useState(data);

  const sortData = (field) => {
    //creates copy of sortedData array so as to not mutate original 
    const newData = [...sortedData];
    const orderMultiplier = sortOrder === 'asc' ? 1 : -1;
    //sorts data based on field and order
    newData.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1 * orderMultiplier;
      }
      if (a[field] > b[field]) {
        return 1 * orderMultiplier;
      }
      return 0;
    });
    //updates state with newly sorted data
    setSortedData(newData);
    //toggles order from ascending to descending and vice versa
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    // styling for the UserList as well as onClick events that sort the data based on that field and order
    <table style={{ borderCollapse: 'collapse', width: '100%', background: '#2c3e50', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', margin: '20px 0' }}>
      <thead style={{ background: '#34495e', color: '#ffffff' }}>
        <tr>
          <th style={{ borderBottom: '2px solid #333', padding: '12px', textAlign: 'left', cursor: 'pointer' }} onClick={() => sortData('name')}>
            NAME {sortOrder === 'asc' ? '▲' : '▼'}
          </th>
          <th style={{ borderBottom: '2px solid #333', padding: '12px', textAlign: 'left', cursor: 'pointer' }} onClick={() => sortData('username')}>
            USERNAME {sortOrder === 'asc' ? '▲' : '▼'}
          </th>
          <th style={{ borderBottom: '2px solid #333', padding: '12px', textAlign: 'left', cursor: 'pointer' }} onClick={() => sortData('email')}>
            EMAIL {sortOrder === 'asc' ? '▲' : '▼'}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((user, index) => (
          <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '12px', color: '#ffffff' }}>{user.name}</td>
            <td style={{ padding: '12px', color: '#ffffff' }}>{user.username}</td>
            <td style={{ padding: '12px', color: '#ffffff' }}>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
//export UserList to reference in index.js file 
export default UserList;