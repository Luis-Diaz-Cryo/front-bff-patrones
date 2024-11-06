import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  //http://127.0.0.1:30011
  useEffect(() => {
    fetch('http://127.0.0.1:30011/api/data')
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


