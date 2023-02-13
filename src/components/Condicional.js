import {useState} from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    function enviarEmail(event){
        event.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(event){
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre e seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..." onChange={(event) => setEmail(event.target.value)}></input>
                <button type="submit" onClick={enviarEmail}>Enviar-email</button>
                {userEmail && (
                    <div>
                        <p>o e-mail do usuario é : {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
                </form>
        </div>
    )
}

export default Condicional