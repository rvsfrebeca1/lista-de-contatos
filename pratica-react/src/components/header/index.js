import Toolbar from '@mui/material/Toolbar';
import logo from '../../assets/logo.svg'
import quit from '../../assets/quit.svg'
import { NavLink } from 'react-router-dom'
import useRequisicoes from '../../hooks/useRequisicoes';
import './style.css'
export default function Header() {
  const requisicoes = useRequisicoes()
  return <Toolbar variant="dense" sx={{
    backgroundColor: "#134563",
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    marginBottom: "70px"

  }}>
    <div className="logo">

      <img src={logo} alt="" />
    </div>
    <div className="quit">

      <NavLink onClick={requisicoes.deslogar} to="/"><img src={quit} alt="" /></NavLink>
    </div>

  </Toolbar>
}