import Logo from 'Media/LogoEmpresa.PNG';
import "Styles/EstilosNavbar.css" ;



const Header = () => {
    return (
        
        <header>
        <ul className="navbar">
          <li>

            <img src={Logo}  className= "logonavbar" alt="Logo"/>
          </li>
          <li>
            <button className="boton_primario" >
              <a href="https://lms.misiontic2022udea.com/mod/assign/view.php?id=25436" className="quitarlinea" >
              Solicitudes del proyecto</a>
            </button>
          </li>
          <li >
            <button className="boton_primario">
              <a href="indexlog.html" className="quitarlinea">
                Inicie Sesion para realizar las compras</a>
            </button>
          </li>

        </ul>
        
      
    </header>
      
    )
}

export default Header
