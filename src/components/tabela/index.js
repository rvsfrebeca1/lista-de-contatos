import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import editar from '../../assets/edit.svg'
import deletar from '../../assets/delete.svg'
import useStyles from './style'
import useConsumirDados from '../../hooks/useConsumirDados'
import useRequisicoes from '../../hooks/useRequisicoes';
import Modal from '../modal';
import './style.css'

function createData(nome, email, telefone, icons) {
  return { nome, email, telefone, icons };
}


export default function CustomTable() {
  const { storageToken, contatos, open, setOpen, setExcluindo } = useConsumirDados()
  const requisicoes = useRequisicoes()

  const rows = contatos.map(contato => {
    return createData(contato.nome, contato.email, contato.telefone, contato.id)
  })




  useEffect(() => {
    async function buscar() {
      if (storageToken) {
        await requisicoes.buscarContatosNaApi(storageToken)
      }
    }
    buscar()
  }, [open])

  const { setEditando } = useConsumirDados()
  const classe = useStyles()

  async function handleClickEdit(row) {
    const usuario = rows.find(contato => contato.telefone === row.telefone)
    setEditando(usuario)
    setOpen(true)
    await requisicoes.buscarContatosNaApi()
  }


  async function handleClickDelete(row) {
    setExcluindo(true)
    await requisicoes.excluirContato(row.icons)
    await requisicoes.buscarContatosNaApi()
  }



  return (
    <TableContainer className={classe.root}>
      <Table aria-label="simple table" >
        <TableHead className={classe.tableHead}>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell >Email</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {open && <Modal />}
          {rows.map((row) => (
            < TableRow
              className={classe.tableRow}
              key={row.telefone}
              sx={{
                borderBottomColor: 'green',
                '&:first-of-type td, &:first-of-type th': { borderTop: 20, borderColor: "#fff" }
              }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.telefone}</TableCell>
              <TableCell sx={{ textAlign: "start" }}>
                <img onClick={() => handleClickEdit(row)} className={classe.icons} src={editar} alt="" />
                <img onClick={() => handleClickDelete(row)} className={classe.icons} src={deletar} alt="" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}
