import React, {useState} from 'react';
import "./App.css";
import Names from "./components/Names.js"
import Form from "./components/Form.js"

function App() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState('visitante');

  const handleNameAddition = (nameData) => {
    setName(nameData);
    const newNome = [... names, nameData];
    setNames(newNome);
  }

  return (  
    <>
      <div className='title'>
        <h1>Hello, {name}</h1>
      </div>
      <div className='container form'>
        <h2>Informe seu nome para receber um Hello personalizado</h2>
        <Form handleNameAddition={handleNameAddition} />
      </div>
      <div className='container history'>
        <h2>Histórico de nomes</h2>
        <Names names={names}/>
      </div>
    </>
  );
}

export default App;
