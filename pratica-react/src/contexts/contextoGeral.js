import { createContext } from 'react'
import UseDados from '../hooks/useDados'
const Contexto = createContext()
export function ContextoGeralProvider(props) {
    const dados = UseDados()
    return (

        <Contexto.Provider value={dados}>
            {props.children}
        </Contexto.Provider>
    )
}

export default Contexto