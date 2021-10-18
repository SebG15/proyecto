import Logo from 'Media/logo.png';
import "Styles/EstilosNavbar.css" ;
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        
        <header>
          
        <ul className="navbar">
          <div class="ANDROMEDA">
              <h1>A N D R Ó M E D A</h1>
          </div>
          <li>

            <img src={Logo}  className= "logonavbar" alt="Logo"/>
          </li>
          <li>
          <Link to= "/login">
            <button className="boton_primario quitarlinea" >
              Iniciar Sesion
            </button>
            </Link>
          </li>
          <li >
            <Link to ="/Productos">
            <button className="boton_primario quitarlinea">              
               Productos
            </button>
            </Link>
          </li>
          <li >
            <button className="boton_primario quitarlinea">
              
               Quienes Somos
            </button>
          </li>

        </ul>
        
      
    </header>
      
    )
}

export default Header
