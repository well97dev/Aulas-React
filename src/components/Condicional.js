import {useState} from 'react'

function Condicional() {

    function enviarEmail(event){
        event.preventDefault()
        console.log("Testando")
    }

    return (
        <div>
            <h2>Cadastre e seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..."></input>
                <button type="submit" onClick={enviarEmail}>Enviar-email</button></form>
        </div>
    )
}

export default Condicional