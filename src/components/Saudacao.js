function Saudacao({nome}) {

    function gerarSaudacao(AlgumNome){
        return `Olá, ${AlgumNome}, tudo bem?`
    }
    return (
    <>
        {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
    )
}

export default Saudacao