import useRequisicoes from '../hooks/useRequisicoes'
import { createContext } from 'react'
const Contexto = createContext()

export function ContextoRequisicaoProvider(props) {
    const dados = useRequisicoes()
    return (

        <Contexto.Provider value={dados}>
            {props.children}
        </Contexto.Provider>
    )
}