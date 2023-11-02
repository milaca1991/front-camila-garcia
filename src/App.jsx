import React, { useState } from 'react';
import Card from './Card';
import Form from './Form';

function App() {
  const [userData, setUserData] = useState({ nombre: '', color: '' });

  const updateUserData = (nombre, color) => {
    setUserData({ nombre, color });
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <Form updateUserData={updateUserData} />
      {userData.nombre && userData.color ? (
        <Card nombre={userData.nombre} color={userData.color} />
      ) : null}
    </div>
  );
}

export default App;
