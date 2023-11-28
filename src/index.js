// necessary imports 
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList'; 


const restEndpoint = "https://jsonplaceholder.typicode.com/users";
// asynchronous function that fetches JSON data and returns our USERLIST component populating the response
const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    //const text = JSON.stringify(jsonResponse);
    return (
      // UserList component table is returned 
      <div>
        <UserList data={jsonResponse} />
    </div>
    );
          
    

}

function RenderResult() {
  //useState returns two values current state and function to update
  //store the two valies correspondingly in apiResponse and setApiResponse
  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  useEffect(() => {
      callRestApi().then(
          result => setApiResponse(result));
  },[]);
  
  return (
    //the div style refers to the styling of the container
    //h1 represnts the heading in this case UserRecords
    //p contains dynamic content( apiResponse from earlier) will show the content or loading
    <div style={{ background: '#ffffff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', margin: '20px', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>User Records</h1>
      <p style={{ color: '#555', fontSize: '18px', lineHeight: '1.6' }}>
        {/* if data is loading the it will present Loading Data...*/}
        {apiResponse || 'Loading data...'}
      </p>
    </div>
  );
};
//render react component('RenderResult) into the DOM(Document Object Model)
ReactDOM.render(
    <RenderResult/>,
    document.querySelector('#root')
);