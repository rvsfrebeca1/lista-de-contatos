import { useState } from 'react'

import { useLocalStorage } from 'react-use'


export default function UseDados() {
    const [storageToken, setStorageToken, removeStorageToken] = useLocalStorage('token')

    const [open, setOpen] = useState(false)
    const [editando, setEditando] = useState(false)
    const [adicionando, setAdicionando] = useState(false)
    const [excluindo, setExcluindo] = useState({})
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const [contatos, setContatos] = useState([])
    const [usuarioAtual, setUsuarioAtual] = useLocalStorage('usuario')
    return {
        token,
        setToken,
        open,
        setOpen,
        editando,
        setEditando,
        nome,
        setNome,
        adicionando,
        setAdicionando,
        telefone,
        setTelefone,
        email,
        setEmail,
        setStorageToken,
        storageToken,
        senha,
        setSenha,
        contatos,
        setContatos,
        usuarioAtual,
        setUsuarioAtual,
        excluindo,
        setExcluindo,
        removeStorageToken
    }
}