import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil'
import UseConsumirDados from './hooks/useConsumirDados';
import { BrowserRouter as Roteador, Route, Redirect } from 'react-router-dom'
import './App.css';

import { ContextoGeralProvider } from './contexts/contextoGeral';
function RotasProtegidas(props) {
  const { storageToken } = UseConsumirDados()
  return (
    <Route render={() => {
      return storageToken ? props.children : <Redirect exact to="/" />
    }} />
  )
}


function Rotas() {
  const nomeDaClasse = (window.location.pathname).substr(1)
  return (
    <div className={`App ${nomeDaClasse}`}>

      <Roteador>
        <ContextoGeralProvider>

          <Route path="/" exact component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          <RotasProtegidas>
            <Route path="/perfil" component={Perfil} />
          </RotasProtegidas>

        </ContextoGeralProvider>
      </Roteador>
    </div>
  );
}

export default Rotas;
