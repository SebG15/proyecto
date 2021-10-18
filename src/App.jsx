import Layouts from 'layouts/Layouts';
import Index from 'pages/Index';
import InicioSesion from 'pages/Admin/InicioSesion';
import 'Styles/estilos.css'
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import Productos from 'pages/Admin/Productos';



function App() {
  return (
    <div className="App">
      <Router>
      
        <Switch>
          <Route path="/InicioSesion">
            <InicioSesion/>
          </Route>
          <Route path = "/Productos">
            <Productos/>
          </Route>
          
        
        <Layouts>
        <Route path ="/">
           <Index/>
           </Route>
       
      </Layouts>
      </Switch>

      </Router>
      
    </div>
  );
}

export default App;
