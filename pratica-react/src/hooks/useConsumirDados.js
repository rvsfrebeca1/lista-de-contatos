import { useContext } from 'react'
import Contexto from '../contexts/contextoGeral'

export default function UseConsumirDados() {
    return useContext(Contexto)
}