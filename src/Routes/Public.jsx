import Home from "../Paginas/Home";
import Menu from "../Componentes/Menu";
import "../Estilos/Public.css";
import { Routes, Route } from "react-router-dom";
import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import NotFound from "../Componentes/NotFound"


function Public() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (<>
        <div className="cajas">
                <div id="main-toggle" className="toggle-menu"  >
                    <FontAwesomeIcon icon={faBars} onClick={showSidebar}  size="xs" className="toggle" inverse/>
                </div>
            <div id="main-nav" className={sidebar ? 'Menu active' : 'Menu'}  >
                <div id="main-toggle" className="toggle-close"  >
                    <FontAwesomeIcon icon={faXmark} onClick={showSidebar} />
                </div>
                <Menu id="main-menu" className="main-menu" onClick={showSidebar} />
            </div>
            <div className="Home"  >
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    </>
    )
}


export default Public;