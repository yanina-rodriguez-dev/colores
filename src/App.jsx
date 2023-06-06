import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'
import Formulario from "./components/Formulario"

function App() {
 

  return (
    <>
     <Container className="py-4 main">
       <h1>Administrar colores</h1>
       <hr />
       <Formulario></Formulario>
     </Container>
      <footer className="bg-secondary py-4 text-center">
      <p>&copy;Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
