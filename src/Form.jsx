import React, { useState } from 'react'

const Form = () => {

    const [nombre, setNombre] = useState("")
    const [color, setColor] = useState("")
    const [nombreError, setNombreError] = useState("");
    const [colorError, setColorError] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (nombreError || colorError) {
          alert(nombreError);
        } else if (nombre === "" || color === "") {
          alert("Faltan datos");
        } else {
          alert("Los datos fueron enviados correctamente");
        }
      };

      const handleNombreChange = (event) => {
        const inputValue = event.target.value;
        const isValid = inputValue.trim().length >= 3 && !inputValue.startsWith(' ');
    
        setNombre(inputValue);
        setNombreError(isValid ? '' : 'El nombre debe tener al menos 3 caracteres y no empezar con espacios en blanco');
      };

      const handleColorChange = (event) => {
        const inputValue = event.target.value;
        const isValid = inputValue.length >= 6;
    
        setColor(inputValue);
        setColorError(isValid ? '' : 'El color debe tener al menos 6 caracteres.');
      };
    


    return (
        <>
       
            <form
                onSubmit={handleSubmit}
            >
                <label htmlFor='nombre'>Nombre: </label>
                <input
                    type='text'
                    placeholder='Ingresar Nombre'
                    id='nombre'
                    value={nombre}
                    onChange={(e) => handleNombreChange(e)}
                />
                 {nombreError && <div className="error-message">{nombreError}</div>}

                <label htmlFor=''>Color: </label>
                <input
                    type='text'
                    placeholder='Ingresar color'
                    value={color}   
                    onChange={(e) => handleColorChange(e)}
                />
               {colorError && <div className="error-message">{colorError}</div>}



                <input
                    type="submit"
                    value="Enviar datos"
                />

            </form>
        </>
    )
}

export default Form