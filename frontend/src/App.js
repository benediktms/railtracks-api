import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState();

  const fetchData = async () => {
    const res = await fetch('/api/v1/tests');
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <button onClick={() => console.log(users)}>Test connection</button>
    </div>
  );
}

export default App;
