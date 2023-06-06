import React from 'react';
import { Form, Button } from 'react-bootstrap';

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
        </div>
    );
};

export default Formulario;