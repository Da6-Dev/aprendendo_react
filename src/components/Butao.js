function Butao({numero}){

    function myEvent() {
        console.log("Você clicou o botão de número " + numero)
    }

    return (
        <div>

            <button onClick={myEvent}>Botão {numero}</button>

        </div>
    )
}

export default Butao;