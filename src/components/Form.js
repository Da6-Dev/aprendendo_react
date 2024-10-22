function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Usuário cadastrado com sucesso.")
    }

    return(
        <div>
            <h1>Meu Formulário</h1>
            <form onSubmit={cadastrarUsuario}>
                <input type="text" placeholder="Digite seu Nome" required/>
                <br/>
                <input type="number" placeholder="Digite sua idade" required max={100} min={0}/>
                <br/>
                <input type="submit" value="Cadastrar"/>
            </form>
        </div>
    )
}

export default Form;