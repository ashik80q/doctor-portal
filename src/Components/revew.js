import React from 'react';
import fakeData from '../fakeData/fakeData';

const revew = () => {

    const handler = () =>{
        console.log('yes click ', fakeData);
        fetch('https://limitless-savannah-61989.herokuapp.com/addService', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(fakeData),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        
    }
    return (
        <div>
            <button onClick={handler}>Click me</button>
        </div>
    );
};

export default revew;