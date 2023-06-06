import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'
import Formulario from "./components/Formulario"

function App() {
 

  return (
    <>
     <Container className="py-4">
       <h1>Administrar colores</h1>
       <hr />
       <Formulario></Formulario>
     </Container>
      
    </>
  )
}

export default App
