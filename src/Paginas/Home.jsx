import Proyectos from '../Componentes/Proyectos';
import SobreMi from '../Componentes/SobreMi';
import Skills from '../Componentes/Skills';
import Educacion from '../Componentes/Educacion';
import FormContacto from '../Componentes/FormContacto';
import Presentacion from '../Componentes/Presentacion';
import firebase from '../Config/firebase';
import Contacto from '../Componentes/Contacto';




function Home() {

  console.log("firebase");
  console.log(firebase);

  return (
    <section >
      <Presentacion  />
      <Proyectos  />
      <SobreMi  />
      <Skills />
      <Educacion />
      <FormContacto />
      <Contacto/>
    </section>
  )
}

export default Home;