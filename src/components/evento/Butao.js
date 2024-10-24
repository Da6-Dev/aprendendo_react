import Button from "./Button";

function Butao(props){

    function myEvent() {
        console.log("Ativando evento n° " + props.numero)
    }

    return (
        <div>

            <Button event={myEvent} text={"Botão " + props.numero}/>

        </div>
    )
}

export default Butao;