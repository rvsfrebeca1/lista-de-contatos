import { ContextoGeralProvider } from '../../contexts/contextoGeral';
import ImagemDireita from '../../assets/ImagemDireita.png'
import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputSenha from '../../components/senha';
import { ToastContainer } from "react-toastify";
import toast from '../../popups/index'
import useConsumirDados from '../../hooks/useConsumirDados'
import useRequisicoes from '../../hooks/useRequisicoes';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './style.css'
import '../global.css'
import { NavLink, useHistory } from 'react-router-dom'



export default function Cadastro() {

  const history = useHistory()
  const requisicoes = useRequisicoes()
  const { nome, email, senha, setNome, setEmail, removeStorageToken, setSenha } = useConsumirDados()
  console.log(nome, email, senha)

  async function handleCadastro(e) {
    e.preventDefault()
    if (!senha || !email || !nome) {
      return toast.messageError('Todos os campos são obrigatorios')
    }
    const usuario = {
      nome,
      email,
      senha
    }
    const resultado = await requisicoes.cadastrar(usuario)
    if (resultado) {
      removeStorageToken()
      history.push('/')
      toast.messageSuccess('Usuário cadastrado com sucesso')
    }
  }

  return (
    <ContextoGeralProvider>
      <ToastContainer />
      <main>
        <div className="esquerda__cadastro">
          <div className="esquerda__main">

            <Typography sx={{ alignSelf: 'center', fontWeight: 700 }} variant="h5" gutterBottom component="div">Cadastre-se</Typography>
            <form action="submit" onSubmit={handleCadastro}>

              <TextField

                value={nome}
                onChange={(e) => setNome(e.target.value)}
                id="nome"
                fullWidth
                label="Nome"
                size="large"
              />
              <TextField

                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                fullWidth
                label="E-mail"
                size="large"
              />
              <InputSenha setSenha={setSenha} />
              <div className="buttons">
                <button className="btn btn-positive btn-register">CADASTRAR</button>
                <button onClick={() => history.push('/')} className="btn btn-negative btn-register">CANCELAR</button>
              </div>
            </form>
            <Typography sx={{ alignSelf: 'center' }} variant="body2" gutterBottom>Já tem cadastro? <NavLink to="/">Clique aqui!</NavLink></Typography>
          </div>
        </div>

        <div className="direita">
          <img src={ImagemDireita} alt="" />
        </div>
      </main >
    </ContextoGeralProvider >
  )
}