import { useState } from "react";

function Form(){

    const [name, setName] = useState()
    const [idade, setIdade] = useState()
    const [password, setPassword] = useState()

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log(idade)
        console.log(password)
        console.log("Usuário cadastrado com sucesso.")
    }

    return(
        <div style={{display: "flex", gap: 30 + "px"}}>
            <div>
                <h1>Meu Formulário</h1>
                <form onSubmit={cadastrarUsuario}>
                    <label htmlFor="nome">Nome</label>
                    <br/>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu Nome" required onChange={(e)=>setName(e.target.value)}/>
                    <br/>
                    <label htmlFor="idade">Idade</label>
                    <br/>
                    <input type="number" id="idade" name="idade" placeholder="Digite sua idade" required onChange={(e)=>setIdade(e.target.value)}/>
                    <br/>
                    <label htmlFor="passoword">Senha</label>
                    <br/>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" required onChange={(e)=>setPassword(e.target.value)}/>
                    <br/>
                    <input type="submit" value="Cadastrar"/>
                    <br/>
                </form>
            </div>
            <div>
                <h1>Nome : {name}</h1>
                <p>Idade : {idade}</p>
                <p>Senha : {password}</p>
            </div>
        </div>
    )
}

export default Form;