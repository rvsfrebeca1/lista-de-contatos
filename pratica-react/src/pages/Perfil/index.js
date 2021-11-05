import CustomTable from '../../components/tabela';
import Header from '../../components/header';
import UseConsumirDados from '../../hooks/useConsumirDados';
import './style.css'

export default function Perfil() {
  const { setAdicionando, setOpen } = UseConsumirDados()
  function handleModal() {
    setAdicionando(true)
    setOpen(true)
  }
  return (
    <>
      <Header></Header>


      <div className="table">
        <button onClick={handleModal} className="btn-add btn btn-positive">Adicionar</button>

        <CustomTable />
      </div>
    </>
  )
}