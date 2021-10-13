import Logo from 'Media/LogoEmpresa.PNG';
import Navegadores from 'Media/Navegadores.png'
import Equipo from 'Media/equipo.jpg'
import lenguajes from 'Media/HTML-CSS-JS.png'
import 'Styles/EstilosIndex.css'



const Index = () => {
    return (
        <div >  
                      
        <section className="fondo">
        <div className="fondoprincipal ">
        <h1 >PROYECTO A2GRP</h1>
        <img src={Logo}  alt="Logo" className="logo" />
        <p >
          El desarrollo de aplicaciones web tendrá como base un proyecto dividido
          en cinco (5) sprints y deberá ser construido en un equipo de cinco (5)
          integrantes. Junto con los integrantes del equipo en el que te
          encuentras, deberás establecer un cronograma de actividades para
          sincronizar de manera ágil el trabajo a llevar a cabo.
          
        </p>
        Cada grupo tendrá asignado un tutor que le dará soporte dependiendo de
          las necesidades que surjan en la ejecución del proyecto. Además, el
          equipo debe diligenciar diariamente un formulario que encontrará en la
          plataforma, en el cual se deberán registrar los avances, las
          dificultades y el cumplimiento de compromisos de cada uno de los
          El tutor registrará el seguimiento de los avances que haga el equipo, e
          igualmente las dificultades y el cumplimiento de los compromisos de cada
          uno de sus miembros según lo registrado en los Dailys y en el
          administrador de proyectos (Trello). 
        <p>
          <p>Si dentro de ese seguimiento se
            tiene alguna consulta o se requiere aclarar dudas e inquietudes, se
            podrá solicitar al tutor un encuentro sincrónico por medio de la
            plataforma; dicho encuentro quedará grabado en plataforma para que
            accedas a su contenido cada vez que lo necesites.
            integrantes.  
          </p>  
        </p>
      </div> 
      <h2 className="titulo">Acerca de Nosotros</h2> 
      <div>
      <ul class="horizontal fondoprincipal">
      <li class="contenedor listas">              
            <div>
              <ul>
              <h3>Descripcion</h3>
              <img class="imagen" src={Equipo} alt="" />
                 <p>
                  Se propone analizar, diseñar y construir una aplicación software que
                  permita controlar las ventas físicas y virtuales de una empresa de
                  manufactura y hacerles el correspondiente seguimiento.
                  Para llevar a cabo este proyecto se reunen cinco personas para
                  conformar un equipo de trabajo y posteriormente se distribuyen los
                  roles y las funciones para cada uno de los integrantes.
                  </p>
              </ul>
              
            </div >  

            </li>
            <li  class="contenedor listas">
              <div>                
                   <ul>
                    <h3>Objetivo</h3>
                    <img class="imagen" src={Navegadores} alt="" />
                    
                    <li>Creacion de grupo de trabajo y determinacion de Roles.</li>
                    <li>Analisis del caso a trabajar.</li>
                    <li>Asignacion de funciones para cada integrante,</li>
                    <li>
                      Desarrollo del proyecto de forma responsive para Desktops,Tablets y
                      Mobiles.
                    </li>
                   </ul>                  
              </div>
              </li>
              
              <li class="contenedor listas">
              <div >
                <ul>
                  <h3>Qué se Utilizara</h3>
                <img class="imagen" src={lenguajes} alt="" />
                <ul>
                  <li>Git y GitHub</li>
                  <li>Visual studio code</li>
                  <li>HTML5 CCS3 JS</li>
                </ul>
                </ul>

              </div>
            </li> 
              
          </ul>
      </div>
            </section>
                    </div>
    )
}

export default Index
