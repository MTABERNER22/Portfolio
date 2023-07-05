import { useState } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore";
import appFirebase from "../Config/firebase";
import { Form, Button, Alert } from "react-bootstrap"
import "../Estilos/Contacto.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const db = getFirestore(appFirebase)

function FormContacto() {

  const [message, setMessage] = useState(false)

  const valorInicial = {
    nombre: '',
    razonSocial: '',
    email: '',
    telefono: '',
    mensaje: '',
  }

  const [user, setUser] = useState(valorInicial);

  const capturarInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
    console.log(capturarInput)
  };

  const guardarDatos = async (e) => {
    e.preventDefault();
    try {
      const document = await addDoc(collection(db, "usuarios"), {
        ...user
      })
      if (document) {
        setMessage(true)
      }

    } catch (error) {
      console.log(error)
    }
    setUser({ ...valorInicial });

  };

  return (
    <div className="form" id="input" >
      <div style={{display: 'flex'}}>
        <h2 style={{width:'95%'}}>Contactame</h2>
        <div  style={{width:'5%', fontSize:'1.5rem'}}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
      <br />
      <Form onSubmit={guardarDatos} className="row">

        <Form.Group className="mb-3" >
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={capturarInput} value={user.nombre} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Razón Social</Form.Label>
          <Form.Control type="text" placeholder="Razón Social" name="razonSocial" onChange={capturarInput} value={user.razonSocial} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="nombre@ejemplo.com" name="email" onChange={capturarInput} value={user.email} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="number" placeholder="Tel/Cel" name="telefono" onChange={capturarInput} value={user.telefono} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Motivo</Form.Label>
          <Form.Control as="textarea" rows={3} type="text" placeholder="Escriba aquí su mensaje" name="mensaje" onChange={capturarInput} value={user.mensaje} />
        </Form.Group>

        <Button variant="dark" size="sm" type="submit"> Enviar</Button>

      </Form>
      <br />
      {message && <Alert variant="success">Gracias por contactarse, su mensaje ha sido envíado con éxito</Alert>}
    </div>
  )
}

export default FormContacto;











//<div>
  //  <form onSubmit={guardarDatos}>
    //   <input type="text" placeholder="Nombre" name="nombre" onChange={capturarInput} value={user.nombre} />
      // <input type="text" placeholder="Razon Social" name="razonSocial" onChange={capturarInput} value={user.razonSocial} />
      // <input type="email" placeholder="nombre@ejemplo.com" name="email" onChange={capturarInput} value={user.email}/>
      // <input type="number" placeholder="Tel/Cel" name="telefono" onChange={capturarInput} value={user.telefono}  />
     //  <input type="text" placeholder="Escriba aquí su mensaje" name="mensaje" onChange={capturarInput} value={user.mensaje} />
   // <button > Enviar</button>
    //</form>
 // </div>