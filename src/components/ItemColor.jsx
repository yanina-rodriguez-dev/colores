import React from "react";
import { ListGroupItem, Button } from "react-bootstrap";


const ItemColor = ({ color, borrarColor }) => {
  return (
    <ListGroupItem className=" d-flex justify-content-space-between">
      {color}
      <Button variant="warning" onClick={() => borrarColor(color)}>
        Borrar
      </Button>
    </ListGroupItem>
  );
};

export default ItemColor;
