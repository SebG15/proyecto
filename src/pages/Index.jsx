import Logo from 'Media/LogoEmpresa.PNG';
import 'Styles/EstilosIndex.css'

const Index = () => {
    return (
        <div >  
                      
            <main className="fondo">
            <div className="fondoprincipal ">
        <h1 >PROYECTO A2GRP</h1>
        <img src={Logo} width="290" alt="Prueba Ventas" className="logo" />
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
                
            </main>
        </div>
    )
}

export default Index
