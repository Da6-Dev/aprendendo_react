import './App.css';
import Pessoa from './components/Pessoa.js';
import List from './components/List.js';
import Butao from './components/evento/Butao';
import Form from './components/Form.js';
import Count from './components/Count.js';


function App() {

  const Pessoas = [["https://segredosdomundo.r7.com/wp-content/uploads/2019/04/ugly-models-e-a-agencia-que-contrata-apenas-pessoas-feias-13.jpg", "Mario", "Milhonário"], ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfi6xxe7PjQEYED1NXaIv95tnwsBg05zp9w&s", "Framboeso", "Lixeiro"],["https://static6.depositphotos.com/1000647/567/i/450/depositphotos_5676642-stock-photo-nerd-student-girl.jpg" , "Menina Fei", "Rainha de Bateria"] ]

  return (
    <div>
      <div className="Container">
        {Pessoas.map((element) => <Pessoa key={element[1]} profileImage={element[0]} name={element[1]} work={element[2]}/>)}
      </div>
      <div className="Container">
        <List/>
      </div>
      <div className="Container">
        <div>
          <h1>Testando Eventos</h1>
          <p>Clique para testar evento de click!</p>
          <Butao numero={1}/>
          <Butao numero={2}/>
        </div>
      </div>
      <div className="Container">
        <Form/>
      </div>
      <div className="Container">
        <Count/>
      </div>
    </div>
  );
}

export default App;
