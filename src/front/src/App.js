import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const apiUrl = 'http://bff-service:5000/api/data'; 

  useEffect(() => {
    
    console.log(`Fetching data from: ${apiUrl}`);

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(setData)
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from BFF:</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
