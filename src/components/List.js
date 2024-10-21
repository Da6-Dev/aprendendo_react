import Item from "./Item";

function List(){
    const Comidas = [['2025-04-06', 'Banana'], ['2025-01-18', 'Pizza'], ['2025-06-13', 'Lixo'], ['2025-10-22', 'Arroz'], ['2025-10-03', 'Guaraná'], ['2025-06-05', 'Bicicleta']]


    return (
        <div>
            <h1>Comidas</h1>
            <ul>
                {Comidas.map((comida) => <Item key={comida[1]} comida={comida[1]} dataValidade={comida[0]}/>)}
            </ul>
        </div>   
    )
}

export default List;