//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario



  const Card = ({ nombre, color }) => {
    return (
      <div className="card">
        <h2>Información del Usuario:</h2>
        <p>Nombre: {nombre}</p>
        <p>Color: {color}</p>
      </div>
    );
  };
  

export default Card;
