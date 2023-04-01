import React, { useState, useEffect } from 'react';

function NameList() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/names')
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  return (
    <div>
      <h1>Names</h1>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;