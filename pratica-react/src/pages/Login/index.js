import imagemLogin from '../../assets/ImagemLogin.png'
import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputSenha from '../../components/senha/index'
import { ToastContainer } from "react-toastify";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './style.css'
import '../global.css'
import { NavLink, useHistory } from 'react-router-dom'
import UseConsumirDados from '../../hooks/useConsumirDados';
import useRequisicoes from '../../hooks/useRequisicoes'

export default function Login() {


  const requisicoes = useRequisicoes()
  const { email, setEmail, senha, setStorageToken, setSenha } = UseConsumirDados()
  const history = useHistory()

  console.log(window.location.pathname)
  async function handleSubmit(event) {
    event.preventDefault();
    if (!email || !senha) {
      return
    }

    const usuario = {
      email,
      senha
    }
    const resultado = await requisicoes.logar(usuario)

    if (resultado) {
      setStorageToken(resultado.token)
      history.push('/perfil')

    } else {
      return
    }
  }

  return (

    <main>
      <div className="esquerda">
        <img src={imagemLogin} alt="" />
      </div>

      <div className="direita">
        <div className="direita__main">
          <ToastContainer />
          <Typography variant="h5" gutterBottom component="div">Bem vindo</Typography>
          <Typography variant="h4" gutterBottom component="div">Faça o login com sua conta</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              value={email}
              onChange={e => setEmail(e.target.value)}
              id="email"
              fullWidth
              label="E-mail"
              size="large"
            />

            <InputSenha setSenha={setSenha} />

            <button className="btn btn-positive btn-register">Login</button>
          </form>
          <Typography sx={{ alignSelf: 'center' }} variant="body2" gutterBottom>Não tem cadastro? <NavLink to="/cadastro">Clique aqui!</NavLink></Typography>
        </div>
      </div>
    </main >


  )
}