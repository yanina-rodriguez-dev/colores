import { Form, Button } from 'react-bootstrap';
import ListaColores from "./ListaColores";
import { useState, useEffect } from 'react';

const Formulario = () => {
const coloresDelLocalStorage = JSON.parse(localStorage.getItem("listaColores")) || [];
const [color,  setColor] = useState(""); 
const [colores, setColores] = useState(coloresDelLocalStorage);

useEffect(()=>{
    localStorage.setItem("listaColores", JSON.stringify(colores));
}, [colores]);

 const handleSubmit  = (e) => {
    e.preventDefault(); 
    setColores([...colores,color]);
    setColor("");
 }

    const borrarColor = (nombreColor) =>{
        let copiaColores = colores.filter((itemColor) => itemColor !== nombreColor)
     setColores(copiaColores);
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="color">
                    <Form.Control
                     type="text"
                     placeholder="Ingrese un color"
                     onChange={(e)=>setColor(e.target.value)}
                     value={color}>
                    </Form.Control>
                    <hr />
                    <Button variant="dark"
                    type="submit"
                    className="">
                    Guardar
                    </Button>
                </Form.Group>
            </Form>
            <ListaColores colores={colores} borrarColor={borrarColor}></ListaColores>
        </div>
    );
};

export default Formulario;