function Evento({numero}) {

    function meuEvento() {
        console.log(`Opa, fui Ativado! ${numero}`);
    }

    return(
        <div>
        <p>Clique  abaixo para disparar um evento:</p>
        <button onClick={meuEvento()}>Ativar!</button>
        </div>
    )
}

export default Evento