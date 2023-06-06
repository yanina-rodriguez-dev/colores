import { ListGroup, Card } from "react-bootstrap";
import ItemColor from "./ItemColor";

const ListaColores = ({ colores, borrarColor }) => {
  return (
    <ListGroup>
        <Card>

      {colores.map((color, indiceColor) => (
          <ItemColor
          color={color}
          key={indiceColor}
          borrarColor={borrarColor}
          ></ItemColor>
          ))}
          </Card>
    </ListGroup>
  );
};

export default ListaColores;
