import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField';
import close from '../../assets/close.svg'
import Typography from '@mui/material/Typography';
import useConsumirDados from '../../hooks/useConsumirDados'
import useStyles from './style'
import './style.css'
import '../../pages/global.css'
import { useEffect } from 'react';
import useRequisicoes from '../../hooks/useRequisicoes';
export default function Modal() {
  const requisicoes = useRequisicoes()
  const {
    setNome,
    setEmail,
    setTelefone,
    nome,
    email,
    telefone,
    setEditando,
    setAdicionando,
    editando,
    adicionando,
    open,
    setOpen,

  } = useConsumirDados()




  const classe = useStyles()

  function handleClickClose() {
    setEditando(false)
    setAdicionando(false)
    setOpen(false)
  }




  useEffect(() => {

    async function atualizar() {

      if (adicionando) {
        setEmail('')
        setNome('')
        setTelefone('')
      } else if (editando) {
        setNome(editando.nome)
        setEmail(editando.email)
        setTelefone(editando.telefone)
      }
      await requisicoes.buscarContatosNaApi()
    }

    atualizar()
  }, [open])


  async function handleConfirm() {
    if (adicionando) {
      if (!email || !telefone || !nome) {
        return
      }
      const usuario = {
        email,
        nome,
        telefone
      }
      const resultado = await requisicoes.adicionarContato(usuario)
      if (resultado) {
        setOpen(false)
      }
    } else if (editando) {
      if (!email || !telefone || !nome) {
        return
      }
      const usuario = {
        email,
        nome,
        telefone
      }
      const resultado = await requisicoes.editar(editando.icons, usuario)
      if (resultado) {
        setOpen(false)
      }
    }
  }



  return (
    <div className="backdrop" style={open ? { display: 'flex' } : { display: 'inline' }}>

      <Card className={classe.card}>
        <img className={classe.img} src={close} alt="" onClick={handleClickClose} />
        <div className="content">



          <Typography sx={{ fontWeight: "700" }} variant="h4" gutterBottom component="div">{editando ? "Editar Contato" : "Novo Contato"}</Typography>


          <TextField
            onChange={e => setNome(e.target.value)}
            value={nome}
            className={classe.input}
            id="nome"
            fullWidth
            label="Nome"
            size="small"
          />
          <TextField
            onChange={e => setEmail(e.target.value)}
            value={email}
            className={classe.input}
            id="email"
            fullWidth
            label="E-mail"
            size="small"
          />
          <TextField
            onChange={e => setTelefone(e.target.value)}
            value={telefone}
            className={classe.input}
            id="telefone"
            fullWidth
            label="Telefone"
            size="small"
            sx={{ marginBottom: "30px" }}
          />

          <button onClick={() => handleConfirm()} className="btn btn-positive btn-modal-register-edit">{editando ? 'EDITAR' : 'ADICIONAR'}</button>
          <button onClick={handleClickClose} className="btn btn-negative btn-modal-register-edit">CANCELAR</button>

        </div>
      </Card>
    </div>
  )
}

