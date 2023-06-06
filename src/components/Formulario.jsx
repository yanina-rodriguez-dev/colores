import React from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaColores from "./ListaColores";

const Formulario = () => {
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Control
                     type="text"
                     placeholder="Ingreseun color">
                     
                    </Form.Control>
                    <hr />
                    <Button variant="dark"
                    type="submit"
                    className="">
                    Guardar
                    </Button>
                </Form.Group>
            </Form>
            <ListaColores></ListaColores>
        </div>
    );
};

export default Formulario;