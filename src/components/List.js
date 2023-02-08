import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Logan" ano_lancamento={1985}/>
                <Item marca="Uno" ano_lancamento={1964}/>
                <Item marca="Fiat"/>
                <Item marca="Chevrolet" ano_lancamento={1999}/>
                <Item />
            </ul>
        </>
    )
}

export default List