import Proyecto from './Proyecto';
import { faHtml5, faCss3Alt, faJs, faNode, faBootstrap, faAngular, faReact } from '@fortawesome/free-brands-svg-icons';
import "../Estilos/Proyectos.css";
import hands from "../img/hands.png"
import almacen from "../img/almacen.png"
import api from "../img/api.png"
import Iconos from "./IconosProyectos"
import { useEffect, useState } from 'react';
import Links from "./IconosLinkProyecto"



function Proyectos(){
 const[proyecto, setProyecto]= useState([]);


  useEffect(
    () => {
        setTimeout(() => {
            setProyecto([
                {
                    id: 1,
                    title:"Proyecto Hands" ,
                    text:"Aplicación web creada con Node Express conectada a una base de datos relacional MYSQL" ,
                    src: hands ,
                    icons:[  
              <Iconos   titulo="HTML5" icon={faHtml5} style={{backgroundColor: '  rgb(245, 102, 63)', width: '65px'}}  />, 
              <Iconos titulo="Css3" icon={faCss3Alt}   style={{backgroundColor: ' rgb(82, 104, 165)', width: '53px'}}  />,  
              <Iconos  titulo="JavaScript" icon={faJs} style={{backgroundColor: 'gold', width: '87px'}}  />,
              <Iconos   titulo="Node.js" icon={faNode}  style={{backgroundColor: 'green', width: '75px'}}  />,
              <Iconos  titulo="Bootstrap" icon={faBootstrap} style={{backgroundColor: 'blueviolet', width: '90px'}} />
             ],
                links:[ <Links  hrefGit="https://github.com/MTABERNER22/ProyectoHands" hrefLink="https://hands-6f41726dfab3.herokuapp.com/"/> ]
                },
                {
                    id: 2,
                    title:"Proyecto MEAN",
                    text:"Aplicación web creada en Angular.js conectada a una base de datos no relacional MongoDB, posee un listado de productos de una api externa (Mercado Libre)",
                    src: almacen,
                    icons:[   <Iconos titulo="HTML5" icon={faHtml5} style={{backgroundColor: '  rgb(245, 102, 63)', width: '65px'}}  />, 
                    <Iconos  titulo="Css3" icon={faCss3Alt}   style={{backgroundColor: ' rgb(82, 104, 165)', width: '53px'}}  />,  
                    <Iconos   titulo="JavaScript" icon={faJs} style={{backgroundColor: 'gold', width: '87px'}}  />,
                    <Iconos  titulo="Node.js" icon={faNode}  style={{backgroundColor: 'green', width: '75px'}}  />,
                    <Iconos   titulo="Angular.js" icon={faAngular} style={{backgroundColor: ' rgb(136, 14, 24)', width: '80px'}} />
                  ],
                  links:[ <Links  hrefGit="https://github.com/MTABERNER22/MEAN/" hrefLink="https://proyectomean.matiastaberner.com.ar/"/> ]
                },
                {
                    id: 3,
                    title:"Proyecto MERN",
                    src: api ,
                    text:"Aplicacion web desarrollada en React.js conectada a una base de datos no relacional MongoDB, posee un listado de productos de una api propia hecha en Node Express y MongoDb ",
                    icons:[ 
                    <Iconos  titulo="HTML5" icon={faHtml5} style={{backgroundColor: '  rgb(245, 102, 63)', width: '65px'}}  />, 
                    <Iconos  titulo="Css3" icon={faCss3Alt}   style={{backgroundColor: ' rgb(82, 104, 165)', width: '53px'}}  />,  
                    <Iconos  titulo="JavaScript" icon={faJs} style={{backgroundColor: 'gold', width: '87px'}}  />,
                    <Iconos titulo="Node.js" icon={faNode}  style={{backgroundColor: 'green', width: '75px'}}  />,
                    <Iconos  titulo="React.js" icon={faReact}  style={{backgroundColor: 'gray', width: '75px'}} />,
                    <Iconos  titulo="Bootstrap" icon={faBootstrap} style={{backgroundColor: 'blueviolet', width: '90px'}} />
                  ],
                  links:[ <Links  hrefGit="https://github.com/MTABERNER22/MERN/" hrefLink="https://proyectomern.matiastaberner.com.ar/"/> ]
                },

            ]);
        }, 1000);


    },
    []
);
   return (
            <div className="conteinerProyectos" id="proyectos"  >
              {proyecto.map((proyecto) => (
              <Proyecto  key={proyecto.id} id={proyecto.id} title={proyecto.title} src={proyecto.src} text={proyecto.text} icons={proyecto.icons} links={proyecto.links} />))}
            </div>
      );

}

export default Proyectos;


