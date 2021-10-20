import Layouts from 'layouts/Layouts';
import Index from 'pages/Index';
import InicioSesion from 'pages/Admin/InicioSesion';
import Admin from 'pages/Admin/Admin';
import Registro from 'pages/Admin/Registro';
import Productos from 'pages/Admin/Productos';


import 'Styles/estilos.css'

import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

import PrivateLayout from 'layouts/PrivateLayout';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={['/admin','/admin/productos']}>
          <PrivateLayout>
              <Switch>
                <Route path='/admin/productos'>
                  <Productos/>
                </Route>
                <Route path='/admin'>
                <Admin/>
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/login','/registro']}>
            <Switch>
              <Route path='/login'>
              <InicioSesion/>
              </Route>
              <Route path='/registro'>
                <Registro/>
              </Route>
            </Switch>
          </Route>
          <Route path ={['/']}>
            <Layouts>
              <Switch>
                <Route path='/'>
                  <Index/>
                </Route>
                </Switch>


            </Layouts>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
