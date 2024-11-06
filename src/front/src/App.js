import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://192.168.49.2:8080//api/data')
      .then(response => response.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>Data from BFF:</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;


