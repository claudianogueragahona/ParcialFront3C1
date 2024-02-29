import { useState } from 'react';
import './App.css';
import { Card } from './Components/Card';

function App() {
  const [nombre, setNombre] = useState('');
  const [comida, setComida] = useState('');
  const [renderCard, setRenderCard] = useState(false);
  const [mensaje, setMensaje] = useState(false);

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeComida = (e) => setComida(e.target.value);

  const espacioNombre = (nombre) => {
    const espacio = nombre.trim().length > 2 ? true : false;
    return espacio;
  };
    const longComida = (comida) => {
    const long = comida.trim().length > 5 ? true : false;
    return long;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      espacioNombre(nombre) &&
      longComida(comida) 
    ) {
      setRenderCard(true);
      setMensaje(false);
    } else {
      setRenderCard(false);
      setMensaje(true);
    }
  };

  return (
    <>
    <div>
  
    <form onSubmit={handleSubmit}>
      <label htmlFor=''>Nombre</label>
      <input type='text' value={nombre} onChange={onChangeNombre}></input>
      <div>
        <br />
      <label htmlFor=''>Ingresa Tu Comida Favorita</label>
      <input type='text' value={comida} onChange={onChangeComida}></input>
      </div>
      <br />
      <button type='submit'>Enviar</button>
    </form>
    {mensaje && (
      <p style={{ color: 'red' }}>
        Por favor chequea que la información sea correcta
      </p>
    )}
    {renderCard && <Card nombre={nombre} comida={comida} />}
  </div>
  </>
  );
}

export default App;
