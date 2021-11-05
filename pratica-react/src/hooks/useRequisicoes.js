import UseConsumirDados from "./useConsumirDados"
import toast from '../popups/index'
import "react-toastify/dist/ReactToastify.css"
export default function useRequisicoes() {
    const { setContatos, storageToken, removeStorageToken } = UseConsumirDados()
    async function logar(usuario) {

        try {
            const response = await fetch('https://cubos-api-contacts.herokuapp.com/login', {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            })
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data)
            }
            return data;
        } catch (error) {
            return toast.messageError(error.message)

        }
    }

    async function deslogar() {
        removeStorageToken()
    }

    async function buscarContatosNaApi() {

        try {
            const response = await fetch('https://cubos-api-contacts.herokuapp.com/contatos', {
                headers: {
                    'Authorization': `Bearer ${storageToken}`
                }
            })

            const resultado = await response.json()
            setContatos([...resultado])
        } catch (error) {
            return toast.messageError(error.message)
        }
    }

    async function adicionarContato(usuario) {
        try {
            const response = await fetch('https://cubos-api-contacts.herokuapp.com/contatos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${storageToken}`
                },
                body: JSON.stringify(usuario)
            })

            const data = await response.json()
            if (!response.ok) {
                throw new Error(data)
            }
            return data;

        } catch (error) {
            return toast.messageError(error.message)
        }


    }


    async function excluirContato(id) {
        try {
            const response = await fetch(`https://cubos-api-contacts.herokuapp.com/contatos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${storageToken}`
                }
            })

            const data = await response.json()
            if (!response.ok) {
                throw new Error(data)
            }
            return data;

        } catch (error) {
            return toast.messageError(error.message)
        }
    }

    async function cadastrar(usuario) {
        try {
            const response = await fetch('https://cubos-api-contacts.herokuapp.com/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            })

            const data = await response.json()
            if (!response.ok) {
                throw new Error(data)
            }
            console.log(usuario)
            return data;

        } catch (error) {
            return toast.messageError(error.message)

        }

    }


    async function editar(id, usuario) {
        const response = await fetch(`https://cubos-api-contacts.herokuapp.com/contatos/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${storageToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })

        const data = await response.json()
        if (!response.ok) {
            throw new Error(data)
        }
        return data;

    }

    return {
        logar,
        buscarContatosNaApi,
        adicionarContato,
        excluirContato,
        deslogar,
        cadastrar,
        editar

    }
}